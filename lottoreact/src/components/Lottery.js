import React, { Component } from 'react';
import LottoBall from '../components/LottoBall';
import '../css/Lottery.css';

export default class Lottery extends Component {

    static defaultProps = {
        title: 'Lotto',
        maxBalls: 6,
        maxNum: 40
    }

    constructor(props) {
        super(props);
        this.state = { nums: Array.from({ length: this.props.maxBalls }), generating: false };
    }

    generate() {

        this.setState({ generating: true });

        setTimeout(() => {
            this.setState(curState => ({
                generating: false, nums: curState.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1)
            }));
        }, 4000)

    }

    handleClick = () => {
        this.generate();
    }



    render() {

        return (
            <section className="Lottery">
                <h1 className="Lottery-title">{this.props.title}</h1>
                <div className="Lottery-balls">
                    {this.state.nums.map(n => <LottoBall num={n} generate={this.state.generating} />)}
                </div>
                <button onClick={this.handleClick} className="Lottery-btn" disabled={this.state.generating}>
                    {this.state.generating ? 'Generating Balls...' : 'Generate Balls'}
                </button>
            </section>
        )
    }
}
