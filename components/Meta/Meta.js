import Head from "next/head";

function Meta({ title, keywords, description,image }) {
    return (
        <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta name="keywords" content={keywords} />
                <meta name="og:image" content={image}/>
                <meta name="description" content={description} />
                {/* <link rel="icon" href="/favicon.ico" /> */}
                <title>{title}</title>
        </Head>
    );
}
Meta.defaultProps = {
    title: "Google News",
    keywords: "Google. Google News",
    description: "Comprehensive, up-to-date news coverage, aggregated from sources all over the world by Google News.",
    image: "https://olhardigital.com.br/wp-content/uploads/2020/10/20201001121812.jpg"
};

export default Meta;
