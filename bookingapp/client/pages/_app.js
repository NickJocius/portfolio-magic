// pages/_app.js
import Nav from '../components/Nav';
import { Provider } from '../context';
import 'bootstrap/dist/css/bootstrap.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider>
            <Nav />
            <Component {...pageProps} />
        </Provider>
    )

};

