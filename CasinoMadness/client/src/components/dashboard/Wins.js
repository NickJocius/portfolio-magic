import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Wins = ({ wins }) => {
    const winss = Object.entries(wins);
    return (
        <Fragment>
            <h2 className="text-light">Total Game Wins</h2>
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th>Game</th>
                        <th className="">Wins</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{winss[0][0]}</td>
                        <td>{winss[0][1]}</td>
                    </tr>
                    <tr>
                        <td>{winss[1][0]}</td>
                        <td>{winss[1][1]}</td>
                    </tr>
                    <tr>
                        <td>{winss[2][0]}</td>
                        <td>{winss[2][1]}</td>
                    </tr>
                    <tr>
                        <td>{winss[3][0]}</td>
                        <td>{winss[3][1]}</td>
                    </tr>
                    <tr>
                        <td>{winss[4][0]}</td>
                        <td>{winss[4][1]}</td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    );
};

Wins.propTypes = {
    wins: PropTypes.object,

};

export default Wins;