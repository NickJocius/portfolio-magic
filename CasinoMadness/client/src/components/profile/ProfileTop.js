import React from 'react';
// import PropTypes from 'prop-types';
import CasionChip from '../../images/casinochip.png';

const ProfileTop = ({

  status,
  bio,
  location

}) => {
  return (
    <div className='profile-top p-4 d-flex flex-column flex-sm-row align-items-center justify-content-around'>
      <img className='img-fluid' src={CasionChip} alt='' />
      <div>
        <h1 className='text-danger'>Bio</h1>
        <p className='lead text-white'>...."
          {bio && <span> {bio}</span>}"
        </p>
      </div>
      <div>
        <h2 className="text-danger">Location</h2>
        <p className="lead text-white">{location && <span>{location}</span>}</p>
      </div>
      <div>
        <h2 className="text-danger">Status</h2>
        <p className="lead text-white">"...{status && <span>{status}</span>}"</p>
      </div>
    </div>
  );
};

/* ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,

}; */

export default ProfileTop;