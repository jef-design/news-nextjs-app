import { getSession } from "next-auth/client";
import Head from "next/head";
import News from "../components/Article/News";
import Header from "../components/Header";
import Layout from "../components/Layout/Layout";
import Login from "../components/Login/Login";
import Meta from "../components/Meta/Meta";
import Sidebar from "../components/Sidebar/Sidebar";

function Home({ session }) {
    if (!session) return <Login />;
    return (
        <>
        <Meta />
            <div className="home">
                <News />
            </div>
        </>
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
