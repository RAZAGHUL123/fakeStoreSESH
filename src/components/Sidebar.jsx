import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    // Simulate authentication success for this example
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    // Simulate user log-out
    setIsAuthenticated(false);
  };

  return (
    <div className="card card-body">
      <ul className="list-group">
        {!isAuthenticated ? (
          <>
            <li className="list-group-item">
              <Link to="/sign-up">Sign Up</Link>
            </li>
            <li className="list-group-item">
              <Link to="/sign-in" onClick={handleSignIn}>Sign In</Link>
            </li>
          </>
        ) : (
          <li className="list-group-item">
            <Link to="/sign-out" onClick={handleSignOut}>Sign Out</Link>
          </li>
        )}
      </ul>
      {isAuthenticated && (
        <div className="mt-3">
          {/* Display user-related content when authenticated */}
          <p>Welcome, User!</p>
          {/* Add additional user-related content here */}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
