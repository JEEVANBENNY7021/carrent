import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { FaCarSide } from "react-icons/fa";
function Landingscreen() {
  return (
    <div>
      <div style={{ width: "100%", height: "100vh" }} className="container-fluid landing justify-content-center">
        {/* Main Car Rental Section */}
        <div
          className="d-flex justify-content-center align-items-center text-center py-3" // Reduced padding to decrease gap
          style={{
            borderRight: "9px solid white",
            width: "100vw", // Set to 100% of the viewport width
            height: "100vh", // Set to 100% of the viewport height for vertical centering
            marginTop: "-90px", // Reduced the top margin to decrease gap further (adjust as needed)
          }}
        >
          <div className="col-md-8 col-9 mt-5"> {/* Reduced margin-top to decrease gap */}
            <img
              src="https://img.pikbest.com/wp/202409/sleek-futuristic-midengine-sports-car-on-black-background-3d-rendering_9829294.jpg!bw700"
              alt="Car Rental Logo"
              className="img-fluid"
              style={{ width: "70%", height: "50%" }}
            />
            <div className="inline-block">
              <h2 style={{ fontSize: "70px", fontFamily: "initial" }} className="text-white text-4xl sm:text-6xl md:text-8xl lg:text-9xl">
                RENT <span style={{ color: "red" }}> ROVER</span>
              </h2>
              <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                "Drive Your Dreams"
              </h1>
            </div>

            <Link 
  to="/home" 
  style={{ 
    display: 'flex', 
    alignItems: 'center', 
    marginLeft: '90px', 
    textDecoration: 'none',  // Removes the underline
    flexDirection: 'row', // Ensures content stays in a row layout
    justifyContent: 'center', // Centers the content horizontally
  }}
>
  <span
    style={{
      fontSize: '40px',
      fontFamily: "initial",
      color: 'white',
      
     
    }}
  >
    Book Your Ride
  </span>
  <img
    src="https://i.pinimg.com/originals/27/2a/74/272a7442662ceedd242ac93a9f6eecb5.gif"
    width="230px"
    height="200px"
    alt="Ride animation"
    style={{
      maxWidth: '100%', // Ensures the image scales responsively
      height: 'auto', // Maintains aspect ratio
    }}
  />
</Link>

{/* Responsive Design using inline style */}
<div style={{ 
  '@media screen and (max-width: 768px)': {
    fontSize: '24px', // Adjusts text size for smaller screens
    paddingLeft: '30px', // Reduces padding on small screens
    width: '150px', // Reduces image size for smaller screens
  } 
}} />



          </div>
        </div>
      </div>

      {/* About Us Section with white background */}
      <Container className="my-3" style={{ backgroundColor: "white", padding: "40px 0" }}>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle"></h4>
              <h2 className="section__title">Welcome to our RENT <span style={{ color: "red" }}>ROVER</span>  Service</h2>
              <p className="section__description">
                At Rover Car Rental, we are dedicated to providing a seamless and exceptional car rental experience. Whether you're planning a short trip or a long journey, our fleet of well-maintained vehicles is here to cater to all your travel needs. We offer a wide range of cars, from compact sedans to spacious SUVs, all designed to provide you with comfort, safety, and reliability. <br></br>

                Our team works diligently to ensure that your car rental process is as smooth and hassle-free as possible. With flexible rental plans, competitive pricing, and 24/7 customer support, we strive to be your trusted partner in travel. Let us help you drive with confidence, knowing that your transportation needs are in good hands. We believe in providing top-notch service, allowing you to focus on enjoying your trip while we take care of the rest.

              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <FaCarSide style={{ color: "red", fontSize: "25px" }} /> Variety of cars for all needs.
                </p>

                <p className="section__description d-flex align-items-center gap-2 ml-5">
                  <FaCarSide style={{ color: "red", fontSize: "25px" }} /> Affordable pricing and flexible terms.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center ">
                <p className="section__description d-flex align-items-center gap-2">
                  <FaCarSide style={{ color: "red", fontSize: "25px" }} /> Convenient pick-up and drop-off.
                </p>

                <p className="section__description d-flex align-items-center gap-2 ml-5">
                  <FaCarSide style={{ color: "red", fontSize: "25px" }} />24/7 customer support.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="5" md="5">
            <div className="about__img">
              <img
                src="https://file.aiquickdraw.com/imgcompressed/img/compressed_62ff4d002cc4a008d9db29defd68fcd1.webp"
                alt="Car Rental"
                className="w-100 mt-4"
              />
            </div>
          </Col>
        </Row>
      </Container>



      {/* hot offer */}
      <Container className="my-5" style={{ textAlign: "center" }}>
        <h2 className="mb-4" style={{ fontSize: "3rem", fontWeight: "bold" }}>
          Hot Offers
        </h2>
        <Row>
          <Col lg="4" md="6" sm="12" className="mb-4">
            <div
              className="car-item"
              style={{
                border: "5px solid black",
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src="https://file.aiquickdraw.com/imgcompressed/img/compressed_fb7c95b9bcda3fa4920063715b1f478a.webp"
                alt="Car 1"
                className="img-fluid"
                style={{ borderRadius: "8px", width: "80%" }}
              />
              <h5
                className="mt-2"
                style={{ fontSize: "1.2rem", fontWeight: "bold", marginTop: "10px" }}
              >
                Lamborghini Aventador
              </h5>
              <p style={{ color: "#333", fontSize: "1rem" }}>
                <span style={{ textDecoration: "line-through", marginRight: "5px" }}>5000/day</span>
                <span style={{ color: "#d9534f", fontWeight: "bold" }}>3600/day</span>
              </p>

            </div>
          </Col>

          <Col lg="4" md="6" sm="12" className="mb-4">
            <div
              className="car-item"
              style={{
                border: "5px solid black",
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src="https://file.aiquickdraw.com/imgcompressed/img/compressed_06a6d16cacd71da09d588f345b14bf61.webp"
                alt="Car 2"
                className="img-fluid"
                style={{ borderRadius: "8px", width: "80%" }}
              />
              <h5
                className="mt-2"
                style={{ fontSize: "1.2rem", fontWeight: "bold", marginTop: "10px" }}
              >
                Audi RS7
              </h5>
              <p style={{ color: "#333", fontSize: "1rem" }}>
                <span style={{ textDecoration: "line-through", marginRight: "5px" }}>4000/day</span>
                <span style={{ color: "#d9534f", fontWeight: "bold" }}>2400/day</span>
              </p>
            </div>
          </Col>

          <Col lg="4" md="6" sm="12" className="mb-4">
            <div
              className="car-item"
              style={{
                border: "5px solid black",
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src="https://file.aiquickdraw.com/imgcompressed/img/compressed_a9cfd0941a082ee4597261a035a8c523.webp"
                alt="Car 3"
                className="img-fluid"
                style={{ borderRadius: "8px", width: "80%" }}
              />
              <h5
                className="mt-2"
                style={{ fontSize: "1.2rem", fontWeight: "bold", marginTop: "10px" }}
              >
                Porsche Boxster
              </h5>
              <p style={{ color: "#333", fontSize: "1rem" }}>
                <span style={{ textDecoration: "line-through", marginRight: "5px" }}>7000/day</span>
                <span style={{ color: "#d9534f", fontWeight: "bold" }}>5700/day</span>
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg="4" md="6" sm="12" className="mb-4">
            <div
              className="car-item"
              style={{
                border: "5px solid black",
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src="https://file.aiquickdraw.com/imgcompressed/img/compressed_3292111e6b36ce8ef2049ce64d3fddee.webp"
                alt="Car 4"
                className="img-fluid"
                style={{ borderRadius: "8px", width: "80%" }}
              />
              <h5
                className="mt-2"
                style={{ fontSize: "1.2rem", fontWeight: "bold", marginTop: "10px" }}
              >
                Bentley Flying Spur
              </h5>
              <p style={{ color: "#333", fontSize: "1rem" }}>
                <span style={{ textDecoration: "line-through", marginRight: "5px" }}>4600/day</span>
                <span style={{ color: "#d9534f", fontWeight: "bold" }}>3200/day</span>
              </p>
            </div>
          </Col>

          <Col lg="4" md="6" sm="12" className="mb-4">
            <div
              className="car-item"
              style={{
                border: "5px solid black",
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src="https://file.aiquickdraw.com/imgcompressed/img/compressed_f82a1a43546bab8cdce60da8489ca44c.webp"
                alt="Car 5"
                className="img-fluid"
                style={{ borderRadius: "8px", width: "80%" }}
              />
              <h5
                className="mt-2"
                style={{ fontSize: "1.2rem", fontWeight: "bold", marginTop: "10px" }}
              >
                Porsche 718 Cayman GTS
              </h5>
              <p style={{ color: "#333", fontSize: "1rem" }}>
                <span style={{ textDecoration: "line-through", marginRight: "5px" }}>6600/day</span>
                <span style={{ color: "#d9534f", fontWeight: "bold" }}>4800/day</span>
              </p>
            </div>
          </Col>

          <Col lg="4" md="6" sm="12" className="mb-4">
            <div
              className="car-item"
              style={{
                border: "5px solid black",
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src="https://file.aiquickdraw.com/imgcompressed/img/compressed_dffbc12ab66c3f89aac2d3172e5fc396.webp"
                alt="Car 6"
                className="img-fluid"
                style={{ borderRadius: "8px", width: "80%" }}
              />
              <h5
                className="mt-2"
                style={{ fontSize: "1.2rem", fontWeight: "bold", marginTop: "10px" }}
              >
                BMW 4 series
              </h5>
              <p style={{ color: "#333", fontSize: "1rem" }}>
                <span style={{ textDecoration: "line-through", marginRight: "5px" }}>4300/day</span>
                <span style={{ color: "#d9534f", fontWeight: "bold" }}>2100/day</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>


      <Container>
        <h2 style={{ fontSize: "3rem", fontWeight: "bold" }} className="text-center my-3">Our Partner Brands</h2>
        <div className="marquee-container overflow-hidden bg-white shadow-sm p-3">
          <div className="marquee-content d-flex align-items-center">
            <div className="marquee-item px-4 py-2 mx-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1015px-BMW.svg.png"
                alt="BMW Logo"
                className="img-fluid"
                style={{ maxHeight: "150px" }}
              />
            </div>
            <div className="marquee-item px-4 py-2 mx-3">
              <img
                src="https://pngimg.com/d/bentley_PNG20.png"
                alt="Bentley Logo"
                className="img-fluid"
                style={{ maxHeight: "150px" }}
              />
            </div>
            <div className="marquee-item px-4 py-2 mx-3">
              <img
                src="https://purepng.com/public/uploads/large/purepng.com-audi-car-logologocar-brand-logoscarsaudi-1701527428038cl0rr.png"
                alt="Audi Logo"
                className="img-fluid"
                style={{ maxHeight: "150px" }}
              />
            </div>
            <div className="marquee-item px-4 py-2 mx-3">
              <img
                src="https://freepngimg.com/thumb/logo/85369-jaguar-cars-design-automotive-red-car.png"
                alt="Jaguar Logo"
                className="img-fluid"
                style={{ maxHeight: "150px" }}
              />
            </div>
            <div className="marquee-item px-4 py-2 mx-3">
              <img
                src="https://pngimg.com/d/car_logo_PNG1655.png"
                alt="Car Logo"
                className="img-fluid"
                style={{ maxHeight: "150px" }}
              />
            </div>
            <div className="marquee-item px-4 py-2 mx-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRGEvuGxRNkRzpSmbMENugVAYFGFMwvv6AtA&s"
                alt="Car Logo"
                className="img-fluid"
                style={{ maxHeight: "150px" }}
              />
            </div>
            <div className="marquee-item px-4 py-2 mx-3">
              <img
                src="https://i.pinimg.com/736x/24/1b/b4/241bb4f688cc7a81e95793ced27aa8a9.jpg"
                alt="Car Logo"
                className="img-fluid"
                style={{ maxHeight: "150px" }}
              />
            </div>
            <div className="marquee-item px-4 py-2 mx-3">
              <img
                src="https://pngimg.com/d/tesla_logo_PNG12.png"
                alt="Car Logo"
                className="img-fluid"
                style={{ maxHeight: "150px" }}
              />
            </div>
          </div>
        </div>
      </Container>


      <Container>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",

            fontSize: "3rem",
            fontWeight: "bold",
            color: "black",
            paddingTop: "40px"
          }}
        >
          What Our Customers Say
        </h2>

        <div
          className="d-flex flex-wrap justify-content-center gap-4"
          style={{ rowGap: "20px" }}
        >
          {/* Testimonial 1 */}
          <div
            className="testimonial py-4 px-3"
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "10px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              width: "400px",
              textAlign: "center",
            }}
          >
            <p
              className="section__description"
              style={{ fontSize: "1rem", color: "white", lineHeight: "1.6" }}
            >
              "The car rental process was seamless! The booking was quick, and the vehicle was in perfect condition. The staff was friendly and made the experience stress-free. Highly recommend for anyone looking for a reliable rental service!"
            </p>

            <div className="mt-3 d-flex flex-column align-items-center ">
              <img
                src="https://media.istockphoto.com/id/1311957094/photo/handsome-smiling-young-man-with-crossed-arms-portrait.jpg?s=612x612&w=0&k=20&c=zALF0xV8gL-W9IooXcbEE95aejQhYYkBslwjPMqlUxA="
                alt="Customer 1"
                style={{ width: "80px", height: "80px", borderRadius: "8px" }}
              />

              <div>
                <h6
                  className="mb-0 mt-3"
                  style={{ fontSize: "1.1rem", color: "white" }}
                >
                  Jhon Doe  ⭐⭐⭐⭐
                </h6>
                <p
                  className="section__description"
                  style={{ fontSize: "0.9rem", color: "#777" }}
                >
                  Customer
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div
            className="testimonial py-4 px-3"
            style={{
              backgroundColor: "black",
              borderRadius: "10px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              width: "400px",
              textAlign: "center",
            }}
          >
            <p
              className="section__description"
              style={{ fontSize: "1rem", color: "white", lineHeight: "1.6" }}
            >
              "Excellent service! The car was clean and well-maintained, and the pick-up and drop-off process was smooth. The team was professional, ensuring all my needs were met. Will definitely rent again!"
            </p>

            <div className="mt-3 d-flex flex-column align-items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg"
                alt="Customer 2"
                style={{ width: "80px", height: "80px", borderRadius: "8px" }}
              />

              <div>
                <h6
                  className="mb-0 mt-3"
                  style={{ fontSize: "1.1rem", color: "white" }}
                >
                  Jane Smith ⭐⭐⭐⭐⭐
                </h6>
                <p
                  className="section__description"
                  style={{ fontSize: "0.9rem", color: "#777" }}
                >
                  Happy Client
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div
            className="testimonial py-4 px-3"
            style={{
              backgroundColor: "black",
              borderRadius: "10px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              width: "400px",
              textAlign: "center",
            }}
          >
            <p
              className="section__description"
              style={{ fontSize: "1rem", color: "white", lineHeight: "1.6" }}
            >"This was my best car rental experience so far! The vehicle was fuel-efficient, and the pricing was reasonable. Customer support was responsive and helpful. A trustworthy service!"
            </p>

            <div className="mt-3 d-flex flex-column align-items-center">
              <img
                src="https://static.vecteezy.com/system/resources/previews/043/210/041/non_2x/portrait-of-a-confident-young-black-man-for-lifestyle-or-fashion-marketing-free-photo.jpeg"
                alt="Customer 3"
                style={{ width: "80px", height: "80px", borderRadius: "8px" }}
              />

              <div>
                <h6
                  className="mb-0 mt-3"
                  style={{ fontSize: "1.1rem", color: "white" }}
                >
                  Emily Johnson  ⭐⭐⭐⭐⭐
                </h6>
                <p
                  className="section__description"
                  style={{ fontSize: "0.9rem", color: "#777" }}
                >
                  Verified Buyer
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>


      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          width: "100vw",
          padding: "40px 20px",
          textAlign: "center",
          marginTop: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap"
        }}
      >
        {/* Left Side - Image */}
        <div style={{ flex: "1", textAlign: "left" }}>
          <img
            src="https://www.pngplay.com/wp-content/uploads/8/Red-Sports-Car-Download-Free-PNG.png" // Replace with your image URL
            alt="Car Rental Logo"
            style={{ width: "100%", height: "auto", borderRadius: "8px", paddingLeft: "40px" }}
          />
        </div>

        {/* Right Side - Content */}
        <div style={{ flex: "2", textAlign: "center" }}>
          <h3 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>RENT <span style={{ color: "red" }}> ROVER</span>  </h3>
          <p style={{ fontSize: "1rem", color: "#bbb", maxWidth: "600px", margin: "0 auto" }}>
            Providing reliable and affordable car <br></br> rental services for your perfect journey.
          </p>

          <div
            className="d-flex justify-content-center gap-4"
            style={{ marginTop: "20px", fontSize: "1.2rem" }}
          >
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Home</a>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Booking</a>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Services</a>
           
          </div>

          <div style={{ marginTop: "20px" }}>
            <p style={{ fontSize: "2px", color: "#bbb" }}>
              © 2025 RentRover.Com Allrights reserved.
            </p>
          </div>

          {/* Social Media Icons */}
          <div style={{ marginTop: "20px" }}>
            <a href="#" style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}>
              <i className="fab fa-facebook-f"></i> {/* Facebook Icon */}
            </a>
            <a href="#" style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}>
              <i className="fab fa-twitter"></i> {/* Twitter Icon */}
            </a>
            <a href="#" style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}>
              <i className="fab fa-instagram"></i> {/* Instagram Icon */}
            </a>
            <a href="#" style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}>
              <i className="fab fa-linkedin-in"></i> {/* LinkedIn Icon */}
            </a>
          </div>
        </div>
      </div>








    </div>
  );
}

export default Landingscreen;
