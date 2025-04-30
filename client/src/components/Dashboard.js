import React from 'react';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded shadow p-8">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">Welcome to ParkWise, {user?.username || 'User'}!</h1>
        <p className="text-gray-700 mb-6">
          This is your dashboard. Here you can manage your parking spots, view your bookings, and more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-blue-100 rounded shadow hover:bg-blue-200 transition cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Manage Parking Spots</h2>
            <p className="text-gray-600">Add, edit, or remove your parking spots.</p>
          </div>
          <div className="p-6 bg-green-100 rounded shadow hover:bg-green-200 transition cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">View Bookings</h2>
            <p className="text-gray-600">Check your current and past parking bookings.</p>
          </div>
          <div className="p-6 bg-yellow-100 rounded shadow hover:bg-yellow-200 transition cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Payment History</h2>
            <p className="text-gray-600">Review your payment transactions.</p>
          </div>
          <div className="p-6 bg-purple-100 rounded shadow hover:bg-purple-200 transition cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Account Settings</h2>
            <p className="text-gray-600">Update your profile and preferences.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
