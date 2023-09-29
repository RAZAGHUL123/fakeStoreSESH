import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, user, ...rest }) => {
  // Check if the user is authenticated (based on your authentication logic)
  const isAuthenticated = !!user && !!user.token;

  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? (
          <Element />
        ) : (
          // Redirect to the login page if the user is not authenticated
          <Navigate to="/sign-in" replace />
        )
      }
    />
  );
};

export default PrivateRoute;
