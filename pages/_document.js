import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                {/* <meta property="og:description" content="Comprehensive, up-to-date news coverage, aggregated from sources all over the world by Google News."/>
                <meta property="twitter:description" content="Comprehensive, up-to-date news coverage, aggregated from sources all over the world by Google News."></meta>
                <meta name="description" content="Comprehensive, up-to-date news coverage, aggregated from sources all over the world by Google News" /> */}
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="font-sans">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;

{/* <meta name="description" description="Read full articles, browse thousand of titles and more on the world topic with Google News" /> */}
