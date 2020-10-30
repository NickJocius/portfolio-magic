import React, { Fragment } from 'react';
import Carousel from './Carousel';

const Works = () => {

    const propsData = {
        casino: ['casino1', 'casino2', 'casino3', 'casino4', 'casino5'],
        beyond: ['beyond1', 'beyond2', 'beyond3', 'beyond4'],
        covid: ['covidTracker1', 'covidTracker2', 'covidTracker3'],
        lotto: ['lotto1', 'lotto2', 'lotto3', 'lotto4'],
        scene: ['buildscene1', 'buildscene2', 'buildscene3', 'buildscene4', 'buildscene5', 'buildscene6', 'buildscene7', 'buildscene8']
    };


    return (

        <Fragment>
            <section className="Works container-fluid py-5">
                <Carousel images={propsData.casino} />
                <div className="Works-space"></div>
                <Carousel images={propsData.beyond} />
                <div className="Works-space"></div>
                <Carousel images={propsData.covid} />
                <div className="Works-space"></div>
                <Carousel images={propsData.scene} />
                <div className="Works-space"></div>
                <Carousel images={propsData.lotto} />
            </section>
        </Fragment>

    )
}

export default Works;
