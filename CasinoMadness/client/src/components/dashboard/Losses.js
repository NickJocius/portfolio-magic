import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Losses = ({ losses }) => {
    const loss = Object.entries(losses);
    return (
        <Fragment>
            <h2 className="text-light">Total Game Losses</h2>
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th>Game</th>
                        <th className="">Losses</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{loss[0][0]}</td>
                        <td>{loss[0][1]}</td>
                    </tr>
                    <tr>
                        <td>{loss[1][0]}</td>
                        <td>{loss[1][1]}</td>
                    </tr>
                    <tr>
                        <td>{loss[2][0]}</td>
                        <td>{loss[2][1]}</td>
                    </tr>
                    <tr>
                        <td>{loss[3][0]}</td>
                        <td>{loss[3][1]}</td>
                    </tr>
                    <tr>
                        <td>{loss[4][0]}</td>
                        <td>{loss[4][1]}</td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    );
};

Losses.propTypes = {
    losses: PropTypes.object,
};

export default Losses;