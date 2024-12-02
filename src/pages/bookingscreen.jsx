import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Sample data - adjust path as necessary
const roomDetails = [
  { id: 1, img: '/assets/img/room/hfroom.jpg', title: 'Premium King Room', price: '18$', size: '180 ft', capacity: 'Max person 3', bed: 'King Beds', services: 'Wifi, Television, Bathroom,...', type: 'Half Moon', soldOut: false },
  { id: 2, img: '/assets/img/room/hfroom2.jpg', title: 'Deluxe Room', price: '18$', size: '180 ft', capacity: 'Max person 5', bed: 'King Beds', services: 'Wifi, Television, Bathroom,...', type: 'Half Moon', soldOut: false },
  { id: 3, img: '/assets/img/room/room23.jpg', title: 'Double Room', price: '18$', size: '180 ft', capacity: 'Max person 2', bed: 'King Beds', services: 'Wifi, Television, Bathroom,...', type: 'Sea Breeze', soldOut: false },
  { id: 4, img: '/assets/img/room/room234.jpg', title: 'Luxury Room', price: '18$', size: '180 ft', capacity: 'Max person 1', bed: 'King Beds', services: 'Wifi, Television, Bathroom,...', type: 'Half Moon', soldOut: false },
  { id: 5, img: '/assets/img/room/roomku4.jpg', title: 'Room With View', price: '18$', size: '30 ft', capacity: 'Max person 1', bed: 'King Beds', services: 'Wifi, Television, Bathroom,...', type: 'SeaBreeze', soldOut: false },
  { id: 6, img: '/assets/img/room/room.jpg', title: 'Small View', price: '18$', size: '30 ft', capacity: 'Max person 2', bed: 'King Beds', services: 'Wifi, Television, Bathroom,...', type: 'SeaBreeze', soldOut: false }
];

const BookingScreen = () => {
  const { roomid } = useParams();
  const room = roomDetails.find(r => r.id === parseInt(roomid));

  const [booking, setBooking] = useState({
    checkin: '',
    checkout: '',
    guests: '',
    customerName: '',
    customerEmail: '',
    phoneNumber: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!booking.checkin || !booking.checkout || !booking.guests || !booking.customerName || !booking.customerEmail) {
      setError('Please fill out all fields.');
      return;
    }
  
    if (new Date(booking.checkin) >= new Date(booking.checkout)) {
      setError('Check-out date must be after check-in date.');
      return;
    }
  
    setError(''); // Clear any previous errors
  
    try {
      // Create FormData object and append booking details
      const formData = new FormData();
      formData.append('checkin', booking.checkin);
      formData.append('checkout', booking.checkout);
      formData.append('guests', booking.guests);
      formData.append('customerName', booking.customerName);
      formData.append('customerEmail', booking.customerEmail);
      formData.append('phoneNumber', booking.phoneNumber); // Fixed name for phone number
      formData.append('roomDetails', room ? `${room.title}: ${room.services}` : '');
  
      // Add your Web3Forms access key here
      formData.append('access_key', 'f13f87a4-e10c-4d21-be5b-0c2f99a01643');
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
  
      if (data.success) {
        setMessage('Booking Confirmed Successfully');
        setBooking({
          checkin: '',
          checkout: '',
          guests: '',
          customerName: '',
          customerEmail: '',
          phoneNumber: '',
          roomDetails: room ? `${room.title}: ${room.services}` : '',
        });
      } else {
        setError(data.message || 'Failed to confirm booking. Please try again.');
      }
    } catch (error) {
      setError('Failed to confirm booking. Please try again.');
    }
  };
  

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Room Booking</h1>
      <div className="room-details" style={{ marginBottom: '30px' }}>
        {room ? (
          <div className="room-info" style={{ textAlign: 'center' }}>
            <img
              src={room.img}
              alt={room.title}
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '600px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                marginBottom: '15px'
              }}
            />
            <h2 style={{ margin: '0', fontSize: '24px' }}>{room.title}</h2>
            <p style={{ fontSize: '18px', margin: '10px 0' }}><strong>Price:</strong> {room.price}</p>
            <p style={{ fontSize: '18px', margin: '10px 0' }}><strong>Size:</strong> {room.size}</p>
            <p style={{ fontSize: '18px', margin: '10px 0' }}><strong>Capacity:</strong> {room.capacity}</p>
            <p style={{ fontSize: '18px', margin: '10px 0' }}><strong>Bed:</strong> {room.bed}</p>
            <p style={{ fontSize: '18px', margin: '10px 0' }}><strong>Services:</strong> {room.services}</p>
          </div>
        ) : (
          <p style={{ textAlign: 'center' }}>Room details not found.</p>
        )}
      </div>
      <div className="contact-form" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: '#f9f9f9' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Book This Room</h3>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <label style={{ display: 'flex', flexDirection: 'column', fontSize: '16px' }}>
            Check-in Date:
            <input
              type="date"
              name="checkin"
              value={booking.checkin}
              onChange={handleChange}
              required
              style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', fontSize: '16px' }}>
            Check-out Date:
            <input
              type="date"
              name="checkout"
              value={booking.checkout}
              onChange={handleChange}
              required
              style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', fontSize: '16px' }}>
            Number of Guests:
            <input
              type="number"
              name="guests"
              min="1"
              value={booking.guests}
              onChange={handleChange}
              required
              style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', fontSize: '16px' }}>
            Customer Name:
            <input
              type="text"
              name="customerName"
              value={booking.customerName}
              onChange={handleChange}
              required
              style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', fontSize: '16px' }}>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={booking.phoneNumber}
              onChange={handleChange}
              required
              style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', fontSize: '16px' }}>
            Customer Email:
            <input
              type="email"
              name="customerEmail"
              value={booking.customerEmail}
              onChange={handleChange}
              required
              style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
            />
          </label>
          <button
            type="submit"
            style={{
              padding: '10px 15px',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: '#007bff',
              color: '#fff',
              fontSize: '16px',
              cursor: 'pointer',
              alignSelf: 'center'
            }}
          >
            Confirm Booking
          </button>
        </form>
        {error && <p style={{ textAlign: 'center', color: 'red', marginTop: '20px' }}>{error}</p>}
        {message && <p style={{ textAlign: 'center', marginTop: '20px' }}>{message}</p>}
      </div>
    </div>
  );
};

export default BookingScreen;
