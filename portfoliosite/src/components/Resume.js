import React, { Fragment } from 'react';
import Computer from '../images/computer.png';

const Resume = () => {
    return (
        <Fragment>
            <section className="container-fluid h-100 Resume d-flex align-items-center justify-content-center">
                <div className="row grid-columns m-0 info flex-shrink-1">
                    <div className="col-md-4 Bio d-flex flex-column align-items-center justify-content-center bg-light p-2">
                        <h1 className="text-center">Nicholas Jocius</h1>
                        <img src={Computer} alt="code brackets" className="img-fluid bioImage" />
                        <p>Full-Stack Web Developer</p>
                        <p>Austin, TX</p>
                    </div>
                    <div className="col-md-8 d-flex flex-column flex-grow-1 experience p-4">
                        <h3>Profile</h3>
                        <p>Creative full-stack web developer dedicated to intelligently designing, building,
                        testing, and optimizing mobile-first websites and web applications in all stages of development and integration.
                         </p>
                        <h3>Objective</h3>
                        <p>To obtain a position as a Full Stack Developer.</p>
                        <h3>Education</h3>
                        <h5>AUSTIN COMMUNITY COLLEGE</h5>
                        <ul>
                            <li>Associates of Applied Science – Computer Programming – Web Specialization - Completion Aug. 2021</li>
                            <li>Occupational Skills Award - Computer Programming - May 17, 2020</li>
                            <li>Certification - Web Developer Specialist Level 1 - Completion Dec. 2020</li>
                        </ul>
                        <h5>Related Coursework</h5>
                        <ul>
                            <li>Web Development: Front-end/back-end design and development, JavaScript, MySQL, PHP</li>
                            <li>Computer Programming: Java, C++, OOP</li>
                            <li>Windows OS, UNIX/LINUX</li>
                        </ul>
                        <h3>Skills &#38; Abilities</h3>
                        <h5>Programming/Web Overview</h5>
                        <ul>
                            <li>Experience building full-stack websites and applications from inception through deployment using JavaScript,
                            React, Node.js, Express.js, and Mongoose.
                            </li>
                            <li>Experience with Object Oriented Programming in both JavaScript and Java.</li>
                            <li>Experience with version control using Git.</li>
                            <li>Database experience includes MongoDB and MySQL.</li>
                            <li>Experience building RESTful API’s with JavaScript using Express.</li>
                            <li>Expertise in HTML and CSS as well as the framework Bootstrap.</li>
                            <li>Experience in building mobile-first responsive websites.</li>
                        </ul>
                        <h5>Communication/Teamwork</h5>
                        <ul>
                            <li>Over 12+ years in manager/supervisory positions leading diverse teams.</li>
                            <li>Proven effective communicator and efficient problem solver. </li>
                            <li>Thrive on fast-paced, deadline based team projects in a collaborative environment.</li>
                        </ul>
                        <h4>Work Experience</h4>
                        <h5>Freelance Web Developer&#124;Self-employed&#124;2019-Current</h5>
                        <ul>
                            <li>Self-employed full-stack web developer</li>
                        </ul>
                        <h5>Fresh-Made Supervisor&#124;Randalls&#124;2015-Current</h5>
                        <ul>
                            <li>Manage daily operations for one of the top grossing fresh-made departments in district.  Leading a team of 4-5 employees.</li>
                        </ul>
                        <h5>Owner/Personal Trainer&#124;Amplified Fitness&#124;2014-2015</h5>
                        <ul>
                            <li>Owner of personal training business Amplified Fitness</li>
                        </ul>
                        <h5>Deli/Food Service Manager&#124;Randalls&#124;2007-2015</h5>
                        <ul>
                            <li>Management of daily operations for multiple Randall's Delis, leading a team of up to 8 employees.</li>
                        </ul>
                    </div>
                </div>
            </section>

        </Fragment>
    )
}

export default Resume;
