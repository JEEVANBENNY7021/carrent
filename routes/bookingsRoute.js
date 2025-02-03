const express = require('express');
const router = express.Router();
const Booking = require("../models/booking");
const Car = require("../models/car");
const moment = require('moment');
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')('sk_test_51QdTW1GfF1CZEik1dhPF3ulALBB6pa1kg4B60KWh1MLgvyOEND8PwzpiUbe3gc7COY9xKz5gSf5LaX0YjZ7XwBUH009yENgPN0');
const { sendMail } = require("../utils/emilService"); // Import email logic
const User = require('../models/user');
router.post("/bookcar", async (req, res) => {
    const {
        car,
        carid,
        userid,
        startDate,
        endDate,
        totalAmount,
        totalDays,
        token,
        status,
    } = req.body;

    try {

        const user = await User.findById(userid);  // Fetch the user by their ID

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        // Create a new customer in Stripe
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });


        // Create a payment charge
        const payment = await stripe.charges.create({
            amount: totalAmount * 100, // Stripe accepts amounts in smallest currency unit (cents)
            customer: customer.id,
            currency: 'inr',
            receipt_email: token.email
        }, {
            idempotencyKey: uuidv4() // Prevent duplicate charges
        });

        // If payment is successful, proceed with booking
        if (payment.status === 'succeeded') {
            try {
                // Create a new booking
                const newBooking = new Booking({
                    car: car.name, // Assuming `car` contains a `name` property
                    carid,
                    userid,
                    startDate: moment(startDate).format('DD-MM-YYYY'),
                    endDate: moment(endDate).format('DD-MM-YYYY'),
                    totalAmount,
                    totalDays,
                    status: 'booked',
                    transactionId: payment.id // Use the Stripe transaction ID
                });

                // Save the new booking
                const booking = await newBooking.save();

                // Find the car by ID
                const carTemp = await Car.findOne({ _id: carid });

                if (!carTemp) {
                    return res.status(404).json({ message: "Car not found" });
                }

                // Add the new booking to the currentbookings array
                carTemp.currentbookings = carTemp.currentbookings || [];
                carTemp.currentbookings.push({
                    bookingid: booking._id,
                    startDate: moment(startDate).format('DD-MM-YYYY'),
                    endDate: moment(endDate).format('DD-MM-YYYY'),
                    userid,
                    status: booking.status // Default status
                });


                await carTemp.save();
                sendMail(
                    token.email, // Recipient email
                    "Welcome to RentRover", // Subject
                    null, // Plain text (set to null since we're using HTML)
                    `
                    <h2>Welcome to RentRover</h2>
                    <p>Hi ${user.name},</p>
                    <p>Thank you for booking with RentRover. Here are your booking details:</p>
                    <ul>
                        <li><strong>car ID:</strong> ${carid}</li>
                       <li><strong>Pickup Date:</strong> ${new Date(startDate).toLocaleDateString()}</li>
  <li><strong>Return Date:</strong> ${new Date(endDate).toLocaleDateString()}</li>                  
    <li><strong>Total Amount:</strong> ₹${totalAmount}</li>
                        <li><strong>Transaction ID:</strong> ${payment.id}</li>
                    </ul>
                    <p>We look forward to hosting you!</p>
                    <p>Best regards,</p>
                    <p><strong>RentRover</strong></p>
                    `
                );

                res.send("Car booked successfully");
            } catch (error) {
                console.error("Error saving booking:", error);
                return res.status(400).json({ error: "Error while booking the car " });
            }
        } else {
            return res.status(400).json({ error: "Payment failed" });
        }
    } catch (error) {
        console.error("Error during payment or booking process:", error);
        return res.status(400).json({ error: "Error while processing the payment or booking" });
    }
});


router.post("/getbookingsbyuserid", async (req, res) => {

    const userid = req.body.userid

    try {
        const booking = await Booking.find({ userid: userid })
        res.send(booking)
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post("/cancelbooking", async (req, res) => {
    const { bookingid, carid } = req.body

    try {
        const bookingitem = await Booking.findOne({ _id: bookingid })
        bookingitem.status = "cancelled"
        await bookingitem.save()

        const car = await Car.findOne({ _id: carid })
        const bookings = car.currentbookings

        const temp = bookings.filter(booking => booking.bookingid.toString() !== bookingid)
        car.currentbookings = temp

        await car.save()

        res.send("Booking cancelled successfully")

    } catch (error) {
        return res.status(400).json({ error });
    }
});



router.get("/getallbookings", async (req, res) => {

    try {
        const bookings = await Booking.find()
        res.send(bookings)
    } catch (error) {
        return res.status(400).json({ error });
    }
});


module.exports = router;
