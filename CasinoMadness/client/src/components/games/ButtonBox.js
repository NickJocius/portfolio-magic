import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
const ButtonBox = ({ profile: { profile } }) => {


    return (
        <Fragment>
            <div className="container mx-auto mb-5" id="btns">
                <button type="button" id="dealB" value="Deal" className="pokerButton btn-sm btn btn-light">Deal</button>
                <button type="button" id="drawB" value="Draw" className="pokerButton btn-sm btn btn-light"
                    disabled="disabled">Draw</button>

                <button type="button" id="standB" value="Stand" className="pokerButton btn-sm btn btn-light"
                    disabled="disabled">Stand</button>

                <button type="button" id="resetB" value="Reset" className="pokerButton btn-sm btn btn-light">Reset</button>

                <label id="betLabel" for="bet" className="align-self-center">BET</label>
                <select id="bet" name="bet" >
                    <option value="25">$25</option>
                    <option value="50">$50</option>
                    <option value="75">$75</option>
                    <option value="100">$100</option>
                </select>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    profile: state.profile
});

export default connect(mapStateToProps)(ButtonBox);
