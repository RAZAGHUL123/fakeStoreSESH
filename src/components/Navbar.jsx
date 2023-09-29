import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

function Navbar() {
  const { cart } = useCart();
  const cartCount = cart.length;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleSignIn = () => {
    // Simulate authentication success for this example
    const userData = { username: 'User' }; // Replace with actual user data
    setIsAuthenticated(true);
    setUser(userData);
  };

  const handleLogOut = () => {
    // Simulate user log-out
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Home</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart ({cartCount})</Link>
          </li>
        </ul>
      </div>
      <div className="d-flex">
        <button className="btn btn-primary" data-toggle="collapse" href="#sidebar" role="button">
          Sidebar
        </button>
      </div>
      <div className="collapse" id="sidebar">
        <div className="card card-body">
          {isAuthenticated ? (
            <>
              <p>Welcome, {user && user.username}!</p>
              <button className="btn btn-danger" onClick={handleLogOut}>Log Out</button>
            </>
          ) : (
            <>
              <button className="btn btn-success" onClick={handleSignIn}>Sign In</button>
              <Link to="/sign-up" className="btn btn-info ml-2">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
