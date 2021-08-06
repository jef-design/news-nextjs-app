import { getSession } from "next-auth/client";
import Head from "next/head";
import News from "../components/Article/News";
import Header from "../components/Header";
import Layout from "../components/Layout/Layout";
import Login from "../components/Login/Login";
import Sidebar from "../components/Sidebar/Sidebar";

function Home({ session }) {
    if (!session) return <Login />;
    return (
        <div className="home">
            <Head>
                <title>Google News</title>
                <meta name="description" content="Google News" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
 
            <News />

            
        </div>
    );
}

export default Home;

export async function getServerSideProps(context) {
    const session = await getSession(context);

    return {
        props: {
            session,
        },
    };
}
