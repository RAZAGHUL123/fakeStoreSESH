import React from 'react';

function Dashboard({ user }) {
  // Ensure that the user object is available before rendering
  if (!user) {
    return (
      <div>
        <h2>Dashboard</h2>
        <p>Please sign in to access the dashboard.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      <p>Hello, {user.username}!</p>
      {/* Add your dashboard content here */}
    </div>
  );
}

export default Dashboard;
