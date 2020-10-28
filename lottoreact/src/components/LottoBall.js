import React, { Component, Fragment } from 'react';
import '../css/LottoBall.css';

export default class LottoBall extends Component {

    render() {
        let randInt = Math.floor(Math.random() * (6 - 1) + 1)
        let bounce = `bouncing${randInt}`;
        return (
            <Fragment>
                <section class="stage">
                    <figure class={`ball ${this.props.generate ? 'bouncing' + randInt : ''}`}><span class="shadow" ></span><span className="number">{this.props.num}</span></figure>
                </section>
            </Fragment>
        )
    }
}
