// pages/index.js

import { Context } from '../context';
import { useContext } from 'react';

const Home = () => {

    // to use context
    const { state } = useContext(Context);

    return (
        <div>
            <h3>Home page</h3>
            {JSON.stringify(state)}
        </div>
    );
};

export default Home;