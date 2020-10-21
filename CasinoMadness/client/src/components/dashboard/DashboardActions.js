import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
    return (
        <div className='d-flex flex-column flex-sm-row justify-content-between m-auto w-75'>
            <Link to='/edit-profile' className='btn btn-outline-danger'>
                <i className='fas fa-user-circle text-white' /> Edit Profile
            </Link>
            <Link to='/add-experience' className='btn btn-outline-danger'>
                <i className='fab fa-black-tie text-white' /> Edit Bio
            </Link>
            <Link to='/add-education' className='btn btn-outline-danger'>
                <i className='fas fa-graduation-cap text-white' /> Edit Status
            </Link>
        </div>
    );
};

export default DashboardActions;