import React, { useState } from 'react';
import axios from 'axios';

const Booking = () => {
  const [parkingSpot, setParkingSpot] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleBooking = async (e) => {
    e.preventDefault();
    setError('');
    setPaymentProcessing(true);

    try {
      // Example amount in cents (e.g., $10)
      const amount = 1000;

      // Create payment intent
      const paymentIntentRes = await axios.post('http://localhost:5000/api/payment/create-payment-intent', {
        amount,
      });

      const clientSecret = paymentIntentRes.data.clientSecret;

      // Here you would integrate Stripe Elements or similar to complete payment
      // For simplicity, we simulate payment success

      // Simulate payment success
      setTimeout(() => {
        setPaymentProcessing(false);
        setPaymentSuccess(true);
      }, 2000);

      // TODO: Save booking details to backend after payment success

    } catch (err) {
      setError('Payment failed. Please try again.');
      setPaymentProcessing(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Book a Parking Spot</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {paymentSuccess ? (
          <p className="text-green-600 text-center font-semibold">Booking and payment successful!</p>
        ) : (
          <form onSubmit={handleBooking} className="space-y-5">
            <div>
              <label htmlFor="parkingSpot" className="block mb-1 font-semibold">Parking Spot</label>
              <input
                type="text"
                id="parkingSpot"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={parkingSpot}
                onChange={(e) => setParkingSpot(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="date" className="block mb-1 font-semibold">Date</label>
              <input
                type="date"
                id="date"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="time" className="block mb-1 font-semibold">Time</label>
              <input
                type="time"
                id="time"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              disabled={paymentProcessing}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
            >
              {paymentProcessing ? 'Processing...' : 'Book & Pay'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Booking;
