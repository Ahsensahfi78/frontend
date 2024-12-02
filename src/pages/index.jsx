import React,{useState} from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



function Index(){
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState('2');
  const [rooms, setRooms] = useState('1');
  const [availability,setAvailability] = useState(null);
  const [error,setError] = useState(null);


  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // try{
    //   const response = await axios.post('/api/check-availability',{
    //     checkInDate,
    //     checkOutDate,
    //     guests,
    //     rooms,
    //   });


    //   console.log(response);
    //   setAvailability(response.data);
    //   setError(null);
    
    // }catch (err) {
    //   setError('Error checking availability. Please try again.');
    //   setAvailability(null);
    // }
  };


  const frontimg = [
    { image: "../../assets/img/about/beachf.jpg" },
    { image: "../../assets/img/about/halfmoonfrv.jpg" },
    { image: "../../assets/img/blog/seabreezefront.jpg" }
  ];
   
  const heroSectionStyles = {
    position: 'relative',
    padding: '50px 0',
  };

  const imageSliderStyles = {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  };

  const slideItemStyles = {
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const containerStyles = {
    position: 'relative',
    zIndex: 10,
    padding: '50px',
  };

  const rowStyles = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const colLeftStyles = {
    width: '45%',
  };

  const colRightStyles = {
    width: '45%',
  };

  const heroTextStyles = {
    color: 'white',
    marginBottom: '20px',
  };

  const heroTextTitleStyles = {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#FFC107',
  };

  const heroTextParagraphStyles = {
    fontSize: '16px',
    margin: '15px 0',
    color: '#FFC107',
  };

  const buttonStyles = {
    padding: '10px 20px',
    backgroundColor: '#ff6f61',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    borderRadius: '5px',
  };

  const buttonHoverStyles = {
    backgroundColor: '#ff3b2e',
  };

  const bookingFormStyles = {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '8px',
  };

  const checkDateStyles = {
    marginBottom: '15px',
  };

  const inputStyles = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  };

  const errorStyles = {
    color: 'red',
    marginTop: '10px',
  };
  const roomData = [
    {
      id: 1,
      name: "Double Bad With Attach Bathroom",
      price: 36,
      image: "../../assets/img/room/room23.jpg",
      size: "30 ft",
      capacity: "Max person 5",
      bed: "King Beds",
      services: "Wifi, Television, Bathroom,..."
    },
    {
      id: 2,
      name: "Premium King Room",
      price: 36,
      image: "../../assets/img/room/poliroom.jpg",
      size: "30 ft",
      capacity: "Max person 5",
      bed: "King Beds",
      services: "Wifi, Television, Bathroom,..."
    },
    {
      id: 3,
      name: "Deluxe Room",
      price: 36,
      image: "../../assets/img/room/roomku4.jpg",
      size: "180 ft",
      capacity: "Max person 5",
      bed: "King Beds",
      services: "Wifi, Television, Bathroom,..."
    },
    {
      id: 4,
      name: "Family Room",
      price: 36,
      image: "../../assets/img/room/poliroom3.jpg",
      size: "30 ft",
      capacity: "Max person 5",
      bed: "King Beds",
      services: "Wifi, Television, Bathroom,..."
    }
  ];
  return (
    <div>
      
   {/* Hero Section */}
   <section style={heroSectionStyles}>
      <div style={imageSliderStyles}>
        <OwlCarousel className="custom-slider" items={1} autoplay loop nav>
          {frontimg.map((img, index) => (
            <div key={index} style={{ ...slideItemStyles, backgroundImage: `url(${img.image})` }}></div>
          ))}
        </OwlCarousel>
      </div>

      <div style={containerStyles}>
        <div style={rowStyles}>
          <div style={colLeftStyles}>
            <div style={heroTextStyles}>
              <h1 style={heroTextTitleStyles}>Seabreeze & Half Moon</h1>
              <p style={heroTextParagraphStyles}>
                Here are the best hotel booking sites, including recommendations for international
                travel and for finding low-priced hotel rooms.
              </p>
              <a href="/blog" style={buttonStyles}>Discover Now</a>
            </div>
          </div>
          <div style={colRightStyles}>
            <div style={bookingFormStyles}>
              <h3>Booking Your Room</h3>
              <form onSubmit={handleSubmit}>
                <div style={checkDateStyles}>
                  <label htmlFor="date-in">Check In:</label>
                  <input
                    type="date"
                    style={inputStyles}
                    id="date-in"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                  />
                </div>
                <div style={checkDateStyles}>
                  <label htmlFor="date-out">Check Out:</label>
                  <input
                    type="date"
                    style={inputStyles}
                    id="date-out"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                  />
                </div>
                <div style={checkDateStyles}>
                  <label htmlFor="guest">Guests:</label>
                  <select
                    id="guest"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    style={inputStyles}
                  >
                    <option value="2">2 Adults</option>
                    <option value="3">3 Adults</option>
                    <option value="4">4 Adults</option>
                  </select>
                </div>
                <div style={checkDateStyles}>
                  <label htmlFor="room">Room:</label>
                  <select
                    id="room"
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                    style={inputStyles}
                  >
                    <option value="1">1 Room</option>
                    <option value="2">2 Rooms</option>
                    <option value="3">3 Rooms</option>
                  </select>
                </div>
                <button type="submit" style={buttonStyles}>Check Availability</button>
              </form>

              {availability && (
                <div className="availability-results-custom">
                  <h4>Availability Results</h4>
                  {/* Display availability results here */}
                </div>
              )}
              {error && (
                <div style={errorStyles}>
                  <p>{error}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>


    {/* About Us Section Begin */}
    <section className="aboutus-section spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="about-text">
          <div className="section-title">
            <span>About Us</span>
            <h2>Intercontinental LA <br />Sea Breeze Hotel</h2>
          </div>
        
          <p className="s-para">
            At Sea Breeze Hotel in Sainthamaruthu, all rooms are equipped with modern air-conditioning units to ensure guests enjoy a cool and comfortable stay. The rooms are designed to offer a relaxing environment, with spacious interiors, cozy beds, and essential amenities such as:
            <ul>
              <li>Individual climate control for personalized comfort.</li>
              <li>Ensuite bathrooms with hot and cold water facilities.</li>
              <li>Complimentary Wi-Fi access.</li>
              <li>Television and in-room entertainment.</li>
              <li>Room service to enhance your stay.</li>
              <li>Sun Raises Morning View.</li>
              <li>Fishing Natural View.</li>
              <li>Structure Of Naturel Fabric Hand Cook.</li>
              <li>Children Park.</li>
            </ul>
            Whether you are traveling for leisure or business, Sea Breeze provides a peaceful retreat with the comfort of fully air-conditioned rooms, ensuring a restful experience amidst the tropical climate of Sainthamaruthu.
          </p>
          <a href="/blog" className="primary-btn about-btn">Read More</a>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="about-pic">
          <div className="row">
            <div className="col-sm-6">
              <img src="../../assets/img/about/beachf.jpg" alt="" style={{ height: '450px' , marginTop: '20px'}}/>
            </div>
            <div className="col-sm-6">
              <img src="../../assets/img/about/halfmoonfrv.jpg" alt="" style={{ height: '450px' , marginTop: '20px' , width: '30px'}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* About Us Section End */}

      

      {/* Services Section Begin */}
      <section className="services-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>What We Do</span>
                <h2>Discover Our Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <i className="flaticon-036-parking"></i>
                <h4>Travel Plan</h4>
                <p>Nestled along the pristine coastline, this stunning beachside destination offers a perfect blend of relaxation and adventure.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <i className="flaticon-033-dinner"></i>
                <h4>Catering Service</h4>
                <p>Our premium catering service is dedicated to delivering a delightful culinary experience for every occasion.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <i className="flaticon-026-bed"></i>
                <h4>Babysitting</h4>
                <p>Our trusted babysitting service offers a safe, fun, and caring environment for your children, providing peace of mind for parents. With experienced and certified caregivers, we prioritize your child’s safety, happiness, and development while you're away.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <i className="flaticon-024-towel"></i>
                <h4>Laundry</h4>
                <p>Our professional laundry service offers convenient and reliable care for your garments, ensuring they are cleaned to the highest standards.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <i className="flaticon-044-clock-1"></i>
                <h4>24 H Service</h4>
                <p>Open around the clock, our 24-hour restaurant offers delicious meals and exceptional service, no matter the time of day or night.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <i className="flaticon-012-cocktail"></i>
                <h4>Swiming & Freshment</h4>
                <p>Our swimming facility offers a refreshing and enjoyable experience for swimmers of all levels. Whether you're looking to relax, improve your technique, or simply have fun, we provide a welcoming environment equipped with modern amenities and top-notch safety features.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section End */}

      {/* Home Room Section Begin */}
      <section className="hp-room-section">
        <div className="container-fluid">
          <div className="hp-room-items">
            <div className="row">
              {roomData.map(room => (
                <div className="col-lg-3 col-md-6" key={room.id}>
                  <div className="hp-room-item set-bg" style={{ backgroundImage: `url(${room.image})` }}>
                    <div className="hr-text">
                      <h3>{room.name}</h3>
                      <h2>${room.price}<span>/Pernight</span></h2>
                      <table>
                        <tbody>
                          <tr>
                            <td className="r-o">Size:</td>
                            <td>{room.size}</td>
                          </tr>
                          <tr>
                            <td className="r-o">Capacity:</td>
                            <td>{room.capacity}</td>
                          </tr>
                          <tr>
                            <td className="r-o">Bed:</td>
                            <td>{room.bed}</td>
                          </tr>
                          <tr>
                            <td className="r-o">Services:</td>
                            <td>{room.services}</td>
                          </tr>
                        </tbody>
                      </table>
                      <a href="/rooms" className="primary-btn">More Details</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    

    {/* Services Section Begin */}
    <section className="services-section spad">
      <div className="container">
        <div className="section-title">
          <span>Our Services</span>
          <h2>What We Offer</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="services-item">
              <i className="fa fa-bed"></i>
              <h4>Comfortable Rooms</h4>
              <p>Enjoy a peaceful night's sleep in our luxurious and comfortable rooms.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="services-item">
              <i className="fa fa-utensils"></i>
              <h4>Delicious Meals</h4>
              <p>Indulge in a variety of mouth-watering dishes prepared by our expert chefs.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="services-item">
              <i className="fa fa-spa"></i>
              <h4>Spa & Wellness</h4>
              <p>Relax and rejuvenate with our exclusive spa and wellness treatments.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Services Section End */}

    {/* Hp Room Section Begin */}
    <section className="hp-room-section spad">
      <div className="container">
        <div className="section-title">
          <span>Our Rooms</span>
          <h2>Find Your Perfect Room</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="room-item">
              <img src="../../assets/img/room/halfmoonswimview.jpg" alt="Room" />
              <div className="room-text">
                <h4>Amazing Swim</h4>
                <p>A luxurious a stunning view and premium amenities.</p>
                <a href="#" className="primary-btn">Book Now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="room-item">
              <img src="../../assets/img/room/halfmoonroom.jpg" alt="Room" />
              <div className="room-text">
                <h4>Family Room</h4>
                <p>Perfect for families with ample space and comfortable beds.</p>
                <a href="#" className="primary-btn">Book Now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="room-item">
              <img src="../../assets/img/room/beachviiewre.jpg" alt="Room" />
              <div className="room-text">
                <h4>Nearest To Beach</h4>
                <p>Sun Raise Morning Gorgeous View.</p>
                <a href="#" className="primary-btn">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Hp Room Section End */}

   {/* Testimonial Section Begin */}
    <section className="testimonial-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <span>Testimonials</span>
                        <h2>What Customers Say?</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="testimonial-slider owl-carousel">
                        <div className="ts-item">
                            <p>After a construction project took longer than expected, my husband, my daughter, and I
                                needed a place to stay for a few nights. As Chicago residents, we know a lot about our
                                city, neighborhood, and the types of housing options available and absolutely loved our
                                vacation at Sona Hotel.</p>
                            <div className="ti-author">
                                <div className="rating">
                                    <i className="icon_star"></i>
                                    <i className="icon_star"></i>
                                    <i className="icon_star"></i>
                                    <i className="icon_star"></i>
                                    <i className="icon_star-half_alt"></i>
                                </div>
                                <h5> - Alexander Vasquez</h5>
                            </div>
                            <img src="../../assets/img/testimonial-logo.png" alt="Sona Hotel Logo" />
                        </div>
                        <div className="ts-item">
                            <p>After a construction project took longer than expected, my husband, my daughter, and I
                                needed a place to stay for a few nights. As Chicago residents, we know a lot about our
                                city, neighborhood, and the types of housing options available and absolutely loved our
                                vacation at Sona Hotel.</p>
                            <div className="ti-author">
                                <div className="rating">
                                    <i className="icon_star"></i>
                                    <i className="icon_star"></i>
                                    <i className="icon_star"></i>
                                    <i className="icon_star"></i>
                                    <i className="icon_star-half_alt"></i>
                                </div>
                                <h5> - Alexander Vasquez</h5>
                            </div>
                            <img src="../../assets/img/testimonial-logo.png" alt="Sona Hotel Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Testimonial Section End */}


    {/* Blog Section Begin */}
    <section className="blog-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <span>Hotel News</span>
                            <h2>Our Blog & Event</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="blog-item set-bg" style={{ backgroundImage: 'url(../../assets/img/blog/halfmoon2.jpg)' }}>
                            <div className="bi-text">
                                <span className="b-tag">Travel Trip</span>
                                <h4><a href="#">Tremblant In Srilanka</a></h4>
                                <div className="b-time"><i className="icon_clock_alt"></i> 15th April, 2019</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-item set-bg" style={{ backgroundImage: 'url(../../assets/img/blog/seabreezefront.jpg)' }}>
                            <div className="bi-text">
                                <span className="b-tag">Foods</span>
                                <h4><a href="#">Choosing A Dynamic Foods</a></h4>
                                <div className="b-time"><i className="icon_clock_alt"></i> 15th April, 2019</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-item set-bg" style={{ backgroundImage: 'url(../../assets/img/blog/charming.jpg)' }}>
                            <div className="bi-text">
                                <span className="b-tag">Rooms</span>
                                <h4><a href="#">Charming Rooms</a></h4>
                                <div className="b-time"><i className="icon_clock_alt"></i> 21st April, 2019</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="blog-item small-size set-bg" style={{ backgroundImage: 'url(../../assets/img/blog/swim.jpg)' }}>
                            <div className="bi-text">
                                <span className="b-tag">Swim</span>
                                <h4><a href="#">Trip To Iqaluit In Nunavut A Canadian Arctic City In HalfMoon</a></h4>
                                <div className="b-time"><i className="icon_clock_alt"></i> 08th April, 2019</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-item small-size set-bg" style={{ backgroundImage: 'url(../../assets/img/blog/firehall.jpg)' }}>
                            <div className="bi-text">
                                <span className="b-tag">Event</span>
                                <h4><a href="#">Traveling To Amazing Feel</a></h4>
                                <div className="b-time"><i className="icon_clock_alt"></i> 12th April, 2019</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    {/* Blog Section End */}

   
  </div>
);
}


export default Index;
