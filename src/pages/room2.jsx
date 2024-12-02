import React, { useState } from "react";
import { Link } from "react-router-dom";

// Example room data
const rooms = [
  { id: 1, img: '/assets/img/room/hfroom.jpg', title: 'Premium King Room', price: '18$', size: '120 ft', capacity: 'Max person 3', bed: 'King Beds', services: 'Wifi, Television, Bathroom,...', type: 'SeaBreeze' },
  { id: 2, img: '/assets/img/room/hfroom2.jpg', title: 'Deluxe Room', price: '18$', size: '120 ft', capacity: 'Max person 5', bed: 'King Beds', services: 'Wifi, Television, Bathroom,...', type: 'SeaBreeze' },
  { id: 3, img: '/assets/img/room/room-3.jpg', title: 'Double Room', price: '18$', size: '120 ft', capacity: 'Max person 2', bed: 'King Beds', services: 'Wifi, Television, Bathroom,...', type: 'SeaBreeze' },
  { id: 4, img: '/assets/img/room/room-4.jpg', title: 'Luxury Room', price: '18$', size: '120 ft', capacity: 'Max person 1', bed: 'King Beds', services: 'Wifi, Television, Bathroom,...', type: 'SeaBreeze' },
 
];

const Rooms2 = () => {
  // State to manage the selected filter option
  const [selectedType, setSelectedType] = useState('');

  // Handle dropdown change
  const handleDropdownChange = (e) => {
    setSelectedType(e.target.value);
  };

  // Filter rooms based on selected type
  const filteredRooms = selectedType
    ? rooms.filter(room => room.type === selectedType)
    : rooms;

  return (
    <div className="container">
      <div style={{ textAlign: 'center' }}>
        <select
          value={selectedType}
          onChange={handleDropdownChange}
          style={{ margin: '20px auto' }}
        >
          <option value="">Select an Resturent</option>
          <option value="SeaBreeze">SeaBreeze</option>
          <option value="Half Moon">Half Moon</option>
          <option value="Luxury">Luxury</option>
        </select>
      </div>

      {/* Breadcrumb Section */}
      <div className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>Our Rooms</h2>
                <div className="bt-option">
                  <Link to="/">Home</Link>
                  <span>Rooms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rooms Section */}
      <section className="rooms-section spad">
        <div className="container">
          <div className="row">
            {filteredRooms.map((room) => (
              <div className="col-lg-4 col-md-6" key={room.id}>
                <div className="room-item">
                  <img src={room.img} alt={room.title} style={{ width: '100%', height: 'auto' }} />
                  <div className="ri-text">
                    <h4>{room.title}</h4>
                    <h3>{room.price}<span>/Per Day</span></h3>
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
                    <Link to={`/${room.id}`}>
                      <button className="btn btn-primary">Book Now</button>
                    </Link>
                    <a href="#" className="primary-btn" style={{ marginLeft: '15px' }}>More Details</a>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-lg-12">
              <div className="room-pagination">
                <a href="/rooms">1</a>
                <a href="/room2">2</a>
                <a href="#">Next <i className="fa fa-long-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms2;
