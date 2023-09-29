import React from 'react';

const SignOut = ({ user, onSignOut }) => {
  return (
    <div className="container">
      <h2>Welcome, {user ? user.email : 'Guest'}</h2>
      {user && (
        <button className="btn btn-danger" onClick={onSignOut}>
          Sign Out
        </button>
      )}
    </div>
  );
};

export default SignOut;
