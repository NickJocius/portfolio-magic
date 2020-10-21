import React, { Fragment } from 'react';

const Contact = () => {
    return (
        <Fragment>
            <section className="container-fluid h-100 d-flex justify-content-center" id="contact">


                <div className="d-flex  w-75 flex-row align-content-center justify-content-around Contacts m-5">
                    <a href="https://github.com/NickJocius"><i className="fab fa-github"></i></a>
                    <a href="https://twitter.com/Nick_Jocius"><i className="fab fa-twitter-square"></i></a>
                    <a href="https://linkedin.com/in/nicholas-jocius"><i className="fab fa-linkedin"></i></a>
                </div>

            </section>

        </Fragment>
    )
}

export default Contact;
