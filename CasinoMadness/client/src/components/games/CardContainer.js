import React, { Fragment } from 'react';
import trans from '../../images/trans.gif';

const CardContainer = () => {
    return (
        <Fragment>
            <div className="col cardCol">
                <img id="card2" className="cardImg img-fluid" src={trans} />
            </div>
        </Fragment>
    )
}

export default CardContainer;
