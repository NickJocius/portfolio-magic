import React from 'react';

const Footer = () => {


    const date = new Date().getFullYear();


    return (
        <footer className="footer justify-content-end m-auto">
            <p className="d-flex flex-row justify-content-center p-4">
                Casino Madness &copy; {date} All Rights Reserved
            </p>
        </footer>
    )
}

export default Footer;
