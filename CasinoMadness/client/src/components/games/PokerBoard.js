import React, { Fragment } from 'react';
import CardStack from './CardStack';
import CardConatainer from './CardContainer';
import ButtonBox from './ButtonBox';

const PokerBoard = () => {
    return (
        <Fragment>
            <CardStack />
            <div className="row cardrow align-items-stretch justify-content-md-center">
                <CardConatainer />
                <CardConatainer />
                <CardConatainer />
                <CardConatainer />
                <CardConatainer />
            </div>
            <ButtonBox />
        </Fragment>
    )
}

export default PokerBoard;
