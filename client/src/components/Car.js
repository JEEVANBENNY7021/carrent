import React, { useState } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Car({ car, startDate, endDate }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="card p-3 shadow">
            <div className="d-flex flex-column align-items-center">
                <img src={car.imageurls[0]} className="img-fluid rounded" style={{ maxHeight: '200px', objectFit: 'cover' }} alt={car.name} />

                <div className="text-center mt-3">
                    <h4 style={{ color: "red" }}>{car.name}</h4>
                    <b>
                        <p>Rent per day: {car.rentperday}</p>
                        <p>Type: {car.type}</p>
                    </b>

                    <div className="mt-2">
                        {startDate && endDate && (
                            <Link to={`/book/${car._id}/${startDate}/${endDate}`}>
                                <button
                                    className="m-2"
                                    style={{
                                        backgroundColor: 'red',
                                        color: 'white',
                                       
                                        height: '40px', // Adjusted for better appearance
                                        padding: '8px 20px',
                                        border: '1px solid black', // Fixed the border style typo
                                        borderRadius: '5px',
                                        fontSize: '16px',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = '#cc0000'}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = 'red'}
                                >
                                    Book Now
                                </button>
                            </Link>
                        )}
                        <button className="btn btn-secondary" onClick={handleShow}>View Details</button>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header>
                    <Modal.Title>{car.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex">
                        {/* Left side: Carousel with images */}
                        <div className="flex-shrink-0" style={{ width: '40%' }}>
                            <Carousel>
                                {car.imageurls.map((url, index) => (
                                    <Carousel.Item key={index}>
                                        <img className="d-block w-100 rounded" src={url} alt={`${car.name} - Slide ${index + 1}`} />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>

                        {/* Right side: Car details */}
                        <div className="flex-grow-1 ml-4">
                            <h5>Car Details</h5>
                            <hr />
                            <p><strong>Type: </strong>{car.type}</p>
                            <p><strong>Description: </strong>{car.description}</p>
                            <p><strong>Price: </strong>{car.rentperday} per day</p>
                            <p><strong>Max Count: </strong>{car.maxcount}</p>
                            <p><strong>Phone: </strong>{car.phonenumber}</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Car;
