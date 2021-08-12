import Head from "next/head";

function Meta({ title, keywords, description }) {
    return (
        <Head>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
                {/* <link rel="icon" href="/favicon.ico" /> */}
                <title>{title}</title>
            </Head>
        </Head>
    );
}
Meta.defaulProps = {
    title: "Google News",
    keywords: "Google. Google News",
    description: "A google news",
};

export default Meta;
