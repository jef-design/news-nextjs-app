import "../styles/index.css";
import { Provider as ReduxProvider } from "react-redux";
import Layout from "../components/Layout/Layout";
import configStore from "../store/configStore";
import { Provider, useSession } from "next-auth/client";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import ru from "javascript-time-ago/locale/ru";
import NProgress from "nprogress";
import Head from "next/head";
import Router from "next/router";
TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

function MyApp({ Component, pageProps }) {
  NProgress.configure({showSpinner: false});
  Router.onRouteChangeStart = url => {
    NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                />
            </Head>
            <ReduxProvider store={configStore}>
                <Provider session={pageProps.session}>
                    <Layout>
                        <Component {...pageProps}/>
                    </Layout>
                </Provider>
            </ReduxProvider>
        </>
    );
}

export default MyApp;
