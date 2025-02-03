import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import axios from 'axios';
import Loader from "../components/Loader";
import Swal from 'sweetalert2';
import { FaUserTie } from "react-icons/fa";
import {  Tag } from 'antd';
const { TabPane } = Tabs;

function ProfileScreen() { // Changed 'profilescreen' to 'ProfileScreen'

    const user = JSON.parse(localStorage.getItem('currentUser'));

    useEffect(() => {
        if (!user) {
          window.location.href = '/login';
        }
      }, [user]);
      

    return (
        <div className='ml-3 mt-3 bs'>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Profile" key="1">
                    <h1><FaUserTie /></h1>
                    <h1>My Profile</h1>
                    <br />
                    <h1>Name: {user.name}</h1>
                    <h1>Email: {user.email}</h1>
                    <h1>isAdmin: {user.isAdmin ? 'Yes' : 'No'}</h1>
                    {user.isAdmin && (
                        <div>
                            <button
                                className="btn btn-primary mt-3"
                                onClick={() => window.location.href = '/admin'}
                            >
                                Admin Panel
                            </button>
                        </div>
                    )}                </TabPane>
                <TabPane tab="Bookings" key="2">
                    <MyBookings />
                </TabPane>
            </Tabs>
        </div>
    );
}

export default ProfileScreen;
export function MyBookings() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const user = JSON.parse(localStorage.getItem("currentUser"));

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                setLoading(true);
                const { data } = await axios.post("/api/bookings/getbookingsbyuserid", { userid: user._id });
                console.log(data);
                setBookings(data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching bookings:", err);
                setError("Failed to load bookings. Please try again later."); // Set an error message
                setLoading(false);
            }
        };

        fetchBookings();
    }, [user._id]);

    async function cancelBooking(bookingid, carid) {
        try {
            setLoading(true);
            const result = await axios.post("/api/bookings/cancelbooking", { bookingid, carid });
            console.log(result);
            setLoading(false);
            Swal.fire('Congrats', 'Your booking has been cancelled', 'success').then(() => {
                window.location.reload();
            });
        } catch (error) {
            console.error(error);
            setLoading(false);
            Swal.fire('Oops', 'Something went wrong', 'error');
        }
    }

    return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
                    {loading && <Loader />}
                    {error && (
                        <div className="alert alert-danger">
                            <strong>Error:</strong> {error}
                        </div>
                    )}
                    {bookings && bookings.map((booking) => (
                        <div className='bs' key={booking._id}>
                            <h1>{booking.car}</h1>
                            <p><b>BookingId:</b> {booking._id}</p>
                            <p><b>Pickup Date:</b> {booking.startDate}</p>
                            <p><b>Return Date:</b> {booking.endDate}</p>
                            <p><b>Amount:</b> {booking.totalAmount}</p>
                            <p>
                                <b>Status:</b>{' '}
                                {booking.status === 'cancelled' ? (
                                    <Tag color="red">CANCELLED</Tag>
                                ) : (
                                    <Tag color="green">CONFIRMED</Tag>
                                )}
                            </p>
                            {booking.status !== 'cancelled' && (
                                <div className='text-right'>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => cancelBooking(booking._id, booking.carid)}
                                    >
                                        CANCEL BOOKING
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
