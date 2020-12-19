import React from 'react';
import UserNav from '../../components/nav/UserNav';

const Wishlist = () => {
    return (
        <div className="container-fluid">
            <div class="row">
                <div className="col-md-2">
                    <UserNav />
                </div>
                <div className="col">user wishlist</div>
            </div>
        </div>
    )
}

export default Wishlist;
