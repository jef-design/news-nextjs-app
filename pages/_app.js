import { useEffect, useState } from 'react';
import "../styles/index.css";
import { Provider as ReduxProvider } from "react-redux";
import Layout from "../components/Layout/Layout";
import configStore from "../store/configStore";
import { Provider } from "next-auth/client";
import Router from "next/router";
import Loader from '../components/Loader/index';
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import ru from "javascript-time-ago/locale/ru";
TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);



function MyApp({ Component, pageProps }) {
  const [loading, SetLoading] = useState(false);

    useEffect(() => {
        Router.events.on('routeChangeStart', (url) => {
        SetLoading(true);
    });

    Router.events.on('routeChangeComplete', (url) => {
        SetLoading(false);
    });
}, []);
    return (
        <>
            <ReduxProvider store={configStore}>
                <Provider session={pageProps.session}>
                {loading && <Loader />}
                    <Layout>
                        <Component {...pageProps}/>
                    </Layout>
                </Provider>
            </ReduxProvider>
        </>
    );
}

export default MyApp;
