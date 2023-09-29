import React, { useState } from 'react';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signInResult, setSignInResult] = useState(null);
  const [staySignedIn, setStaySignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Added state to toggle password visibility

  const handleLogin = () => {
    setIsLoading(true); // Show loading spinner while waiting for the API response

    // Perform the sign-in using fetch
    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setIsLoading(false); // Hide loading spinner
        if (!json.error) {
          if (staySignedIn) {
            // Store the token only if staySignedIn is true
            localStorage.setItem('authToken', json.token); // Store the token in local storage
          }
          setSignInResult({ success: true });
          // Redirect the user to another page on successful sign-in (e.g., dashboard)
          // You can use React Router for this purpose
        } else {
          setSignInResult({ error: 'Sign-in failed. Please check your credentials.' });
        }
      })
      .catch((error) => {
        setIsLoading(false); // Hide loading spinner
        console.error('Sign-in error:', error);
        setSignInResult({ error: 'Sign-in failed. Please try again later.' });
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="sign-in-container mt-5">
            <h2>Sign In</h2>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <div className="password-input">
                <input
                  type={showPassword ? 'text' : 'password'} // Toggle password visibility
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="btn-toggle-password"
                  onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                >
                  {showPassword ? 'Hide' : 'Show'} {/* Toggle button text */}
                </button>
              </div>
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  checked={staySignedIn}
                  onChange={() => setStaySignedIn(!staySignedIn)}
                />
                Stay signed in
              </label>
            </div>
            <button
              onClick={handleLogin}
              className="btn btn-primary"
              disabled={isLoading} // Disable the button while loading
            >
              {isLoading ? 'Signing In...' : 'Sign In'} {/* Button text changes when loading */}
            </button>
            {signInResult && (
              <div className="login-result mt-3">
                {signInResult.success ? (
                  <p className="success-message">Sign-in successful</p>
                ) : (
                  <p className="error-message">{signInResult.error}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
