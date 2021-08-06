import "../styles/globals.css";
import { Provider as ReduxProvider } from "react-redux";
import Layout from "../components/Layout/Layout";
import configStore from "../store/configStore";
import { Provider } from "next-auth/client";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import ru from "javascript-time-ago/locale/ru";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

function MyApp({ Component, pageProps }) {
    return (
     
        <ReduxProvider store={configStore}>
            
                <Provider session={pageProps.session}>
                  <Layout>
                  <Component {...pageProps} />
                  </Layout>
                   
                </Provider>
          
        </ReduxProvider>
       
    );
}

export default MyApp;
