import React from 'react';
import PropTypes from 'prop-types';

function UserProfile({ userData }) {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Age: {userData.age}</p> {/* Will show undefined */}
    </div>
  );
}

UserProfile.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired, // This will cause a prop-type warning
  }).isRequired,
};

export default UserProfile;
