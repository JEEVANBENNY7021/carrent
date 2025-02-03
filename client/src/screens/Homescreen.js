import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Car from '../components/Car';
import Loader from '../components/Loader';
import 'antd/dist/antd';
import moment from 'moment';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

function Homescreen() {
    const [cars, setcars] = useState([]);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(false);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [duplicatecars, setduplicatecars] = useState([]);
    const [searchkey, setsearchkey] = useState('');
    const [type, settype] = useState('all');
    const [sortOrder, setSortOrder] = useState('default'); // Added for sorting

    useEffect(() => {
        const fetchData = async () => {
            try {
                setloading(true);
                const response = await axios.get('/api/cars/getallcars');
                const data = response.data.cars;
                setcars(data);
                setduplicatecars(data);
                setloading(false);
            } catch (error) {
                seterror(true);
                console.error(error);
                setloading(false);
            }
        };
        fetchData();
    }, []);

    function filterByDate(dates) {
        if (!dates || dates.length < 2) {
            console.log("Invalid date range selected");
            return;
        }

        const startDate = dates[0];
        const endDate = dates[1];
        setStartDate(startDate);
        setEndDate(endDate);

        var tempcars = [];
        for (const car of duplicatecars) {
            let available = true;

            for (const booking of car.currentbookings) {
                if (
                    moment(startDate).isBetween(booking.startDate, booking.endDate, null, '[]') ||
                    moment(endDate).isBetween(booking.startDate, booking.endDate, null, '[]') ||
                    moment(booking.startDate).isBetween(startDate, endDate, null, '[]') ||
                    moment(booking.endDate).isBetween(startDate, endDate, null, '[]')
                ) {
                    available = false;
                    break;
                }
            }

            if (available) {
                tempcars.push(car);
            }
        }
        setcars(tempcars);
    }

    function filterBySearch() {
        const tempcars = duplicatecars.filter(car => car.name.toLowerCase().includes(searchkey.toLowerCase()));
        setcars(tempcars);
    }

    function filterByType(e) {
        settype(e);
        if (e !== 'all') {
            const tempcars = duplicatecars.filter(car => car.type.toLowerCase() === e.toLowerCase());
            setcars(tempcars);
        } else {
            setcars(duplicatecars);
        }
    }

    function filterByPrice(order) {
        setSortOrder(order);
        let sortedCars = [...cars];

        if (order === 'lowToHigh') {
            sortedCars.sort((a, b) => a.rentperday - b.rentperday);
        } else if (order === 'highToLow') {
            sortedCars.sort((a, b) => b.rentperday - a.rentperday);
        }

        setcars(sortedCars);
    }

    return (
        <div className='container '>
<div 
  style={{
    backgroundColor: "red", 
    border: "3px solid black" // Adds a black border with 3px width
  }} 
  className="row mt-5 bs"
>                {/* Filters on the right side */}
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-3">
                            <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
                        </div>
                        <div className="col-md-3">
                            <input
                                type="text"
                                className='form-control'
                                placeholder='Search cars'
                                value={searchkey}
                                onChange={(e) => setsearchkey(e.target.value)}
                                onKeyUp={filterBySearch}
                            />
                        </div>
                        <div className="col-md-3">
                            <select
                                className='form-control'
                                value={type}
                                onChange={(e) => filterByType(e.target.value)}
                            >
                                <option value="all">All</option>
                                <option value="Automatic">Automatic</option>
                                <option value="Manual">Manual</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <select
                                className='form-control'
                                value={sortOrder}
                                onChange={(e) => filterByPrice(e.target.value)}
                            >
                                <option value="default">Sort by Price</option>
                                <option value="lowToHigh">Low to High</option>
                                <option value="highToLow">High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Image on the left side */}
                <div className="col-md-3">
                    <img
                        src="https://purepng.com/public/uploads/large/purepng.com-white-koenigsegg-one-1-carcarvehicletransportsports-carkoenigsegg-961524658934opafg.png"
                        alt="Filter"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
            </div>

            <div className='row justify-content-center mt-3 p-3' style={{ gap: '20px' }}>
                {loading ? (<Loader />) : (
                    cars.map((car) => (
                        <div className='col-md-3' key={car._id} style={{ marginBottom: '20px' }}>
                            <Car car={car} startDate={startDate} endDate={endDate} />
                        </div>
                    ))
                )}
            </div>

            {error && <p>An error occurred while fetching cars.</p>}
        </div>
    );
}

export default Homescreen;
