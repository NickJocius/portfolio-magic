import React, { Fragment, useState } from 'react';
import '../assets/css/Carousel.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const Carousel = ({ images }) => {

    const [sources, setSources] = useState([...images]);

    const shiftLeft = () => {
        const newOrder = [];

        sources.forEach((src, index) => {
            const newIndex = --index < 0 ? sources.length - 1 : index;
            newOrder[newIndex] = src;
        })
        console.log('left clicked');
        setSources(newOrder);
    }

    const shiftRight = () => {
        const newOrder = [];

        sources.forEach((src, index) => {
            const newIndex = ++index >= sources.length ? 0 : index;
            newOrder[newIndex] = src;
        })

        setSources(newOrder);
    }


    return (

        <Fragment>
            <div className="Carousel container-fluid d-flex justify-content-center align-items-center p-lg-4 my-5">
                <div className="Carousel-arrow">
                    <FaArrowLeft onClick={shiftLeft} size="42" />
                </div>

                {sources.map((i, index) =>
                    <div key={index} className="containers container " id={`cont${index}`}>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/${i}.png`} className="img-fluid" alt={i} id={`pic${index}`} />
                    </div>
                )}


                <div className="Carousel-arrow">
                    <FaArrowRight onClick={shiftRight} size="42" />
                </div>
            </div>
        </Fragment>
    )
}

export default Carousel;

