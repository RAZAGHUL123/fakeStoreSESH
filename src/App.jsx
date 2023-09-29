import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';
import Footer from './components/Footer';
import LogIn from './components/LogIn';
import SignOut from './components/SignOut';
import Sidebar from './components/Sidebar';
import SignUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard'; // Import the Dashboard component

function App() {
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Check for a stored token when the app loads
  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');

    if (storedToken) {
      // Here, you would perform token validation on the server-side
      // If the token is valid, you can fetch user data based on the token
      // For this example, we'll assume the token is valid
      setUser({ token: storedToken });
    }
  }, []);

  const handleSignIn = (userData) => {
    // Store the token in localStorage when the user signs in
    localStorage.setItem('authToken', userData.token);
    setUser(userData);
  };

  const handleSignOut = () => {
    // Clear the stored token when the user signs out
    localStorage.removeItem('authToken');
    setUser(null);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <CartProvider>
      <Router>
        <Navbar toggleSidebar={toggleSidebar} />
        {isSidebarOpen && <Sidebar />}
        <div className="container">
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
            <Route
              path="/sign-in"
              element={user ? <Navigate to="/" /> : <LogIn onSignIn={handleSignIn} />}
            />
            <PrivateRoute
              path="/"
              element={user ? <Home /> : <Navigate to="/sign-in" />}
            />
            <PrivateRoute path="/about" element={<About />} />
            <PrivateRoute path="/contact" element={<Contact />} />
            <PrivateRoute path="/cart" element={<Cart />} />
            <PrivateRoute
              path="/dashboard"
              element={<Dashboard user={user} />} // Use the Dashboard component
            />
            <Route
              path="/sign-out"
              element={<SignOut user={user} onSignOut={handleSignOut} />}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
