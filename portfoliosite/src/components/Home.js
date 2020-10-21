import React, { Fragment } from 'react';
import Contact from './Contact';

const Home = (props) => {

    return (
        <Fragment>
            <section className="container-fluid Home h-100 p-0 m-0">
                <div className="row grid-columns container-fluid">
                    <div className='col-lg-8 HomePhoto p-0 d-flex align-items-center'>
                        <div className=" m-auto imageDiv d-flex align-items-center">
                            <ul className="p-5  m-5">
                                <li><i className="fas fa-paint-brush text-white mr-2"></i>UX/UI Design and Integration</li><hr />
                                <li><i className="fas fa-lock text-white mr-2"></i>Secure sever-side development, security and encryption methods bringing peace-of-mind to my clients</li><hr />
                                <li><i className="fas fa-pencil-ruler text-white mr-2"></i>Modern, visually appealing front-end design to bring in customers and clientele </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 homeInfo d-flex flex-column align-items-center justify-content-center p-5">
                        <h2 className="text-white m-auto h2">FUll-Stack Web Developer</h2>
                        <p className="text-white text-center p-2">My name is Nick Jocius, I am a full-stack web developer and designer.  I specialize in designing, testing and deploying
                        complete mobile friendly and visually stunning websites from the ground up.  I have expertise in both server-side programming and client-side U/I development.  I
                    employ the latest and greates techniques within the javascript programming language utilizing the MERN stack.</p>
                        <button onClick={() => props.history.push("/contact")} className="btn btn-outline-light contactBtn">Contact Me</button>
                    </div>
                </div>
                <Contact />
            </section>

        </Fragment>
    )
}

export default Home;
