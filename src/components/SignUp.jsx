import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle user registration with formData
    console.log(formData); // Replace with actual registration logic
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields here */}
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
      {/* Add a Link to the Sign-In page */}
      <p>
        Already have an account? <Link to="/sign-in">Sign In</Link>
      </p>
    </div>
  );
}

export default SignUp;
