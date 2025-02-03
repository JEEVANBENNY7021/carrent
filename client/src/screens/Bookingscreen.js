import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
import StripeCheckout from 'react-stripe-checkout';
import   Swal from 'sweetalert2';


function Bookingscreen() {
  const { carid, startDate, endDate } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCarData = async () => {

      if (!localStorage.getItem('currentUser')){
        window.location.href = '/login';
    }
      try {
        setLoading(true);
        const { data } = await axios.post("/api/cars/getcarbyid", { carid });

        setCar(data.car);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    };

    fetchCarData();
  }, [carid]);

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB"); // Adjust locale for your preferred format
  }

  function calculateTotalDays(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const differenceInTime = end.getTime() - start.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24); // Convert time difference to days
    return differenceInDays + 1; // Add 1 day to include the end date
  }


  function calculateTotalAmount(days, rentPerDay) {
    return days * rentPerDay;
  }

  const totalDays = calculateTotalDays(startDate, endDate);
  const totalAmount = car ? calculateTotalAmount(totalDays, car.rentperday) : 0;


  async function onToken(token) {
    console.log(token);
  
    const bookingDetails = {
      car,
      carid,
      userid: JSON.parse(localStorage.getItem('currentUser'))._id,
      startDate,
      endDate,
      totalAmount,
      totalDays,
      token
    };
  
    try {
      setLoading(true);
      const result = await axios.post('/api/bookings/bookcar', bookingDetails);
      console.log(result)
      setLoading(false);
      Swal.fire("congratuations ", "Your Car Booked  Successful", "success").then(result=>{
        window.location.href = "/profile";
      })
    } catch (error) {
      console.error("Error booking car:", error);
      setLoading(false)
      setError(true); 
      Swal.fire("OOps ", "Something went wrong", "error");
    }
  }
  
  return (
    <div className="m-5">
      {loading ? (
        <h1>
          <Loader />
        </h1>
      ) : car ? (
        <div>
          <div    className="row justify-content-center mt-5 bs">
            <div className="col-md-6">
              <h1 className="fs-2">{car.name}</h1>
              <img src={car.imageurls[0]} className="bigimg" alt="Car" />
            </div>
            <div className="col-md-6">
              <div style={{ textAlign: "right" }}>
                <h1 className="fs-2 fw-3 "> BOOKING DETAILS</h1>
                <hr />
                <b>
                  <p>Name:{JSON.parse(localStorage.getItem('currentUser')).name}</p>
                  <p>Pickup Date: {formatDate(startDate)}</p>
                  <p>Return Date:: {formatDate(endDate)}</p>
                  <p>Max Count: {car.maxcount}</p>
                </b>

                <div style={{ textAlign: "right" }}>
                  <b>
                    <h1>Amount</h1>
                    <hr />
                    <p>Total days: {totalDays}</p>
                    <p>Rent per day: {car.rentperday}</p>
                    <p>Total Amount: {totalAmount}</p>
                  </b>
                </div>

                <div style={{ float: "right" ,backgroundColor:"white" }}>
                   {error && <Error />}
                  <StripeCheckout
                  amount={totalAmount *100}
                    token={onToken}
                    stripeKey="pk_test_51QdTW1GfF1CZEik1jHGACE69mUaDCh82xdlM5S73qrSXQ26OYjf6VaVnSMcFQVxHHvHqpmq3Zcz5G8PlMgAfvQXy00aVriohwa"
                  >

                  <button className="btn btn-primary">Pay Now</button>
                  </StripeCheckout>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
}

export default Bookingscreen;
