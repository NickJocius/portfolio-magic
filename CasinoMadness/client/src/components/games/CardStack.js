import React, { Fragment } from 'react';
import Cards from '../../images/cardstack.png';

const CardStack = () => {
    return (
        <Fragment>
            <div class="p-3 align-self-start">
                <img src={Cards} alt="" id="cardstack" class="img-fluid" />
            </div>
        </Fragment>
    )
}

export default CardStack;
