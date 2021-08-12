import React, { useEffect } from "react";
import { fetchBusiness } from "../../store/actions/newsAction";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../../components/Article/NewsCard";
import Head from "next/head";
import HeaderPage from "../../components/Helper/HeaderPage";

function Business() {
    const dispatch = useDispatch();
    const business = useSelector(state => state.fetchnews.business);


    useEffect(() => {
        dispatch(fetchBusiness());
    }, [dispatch]);
    return (
        <section>
            <Head>
                <title>Google News - Business</title>
            </Head>
            <HeaderPage pageimage="https://lh4.ggpht.com/A0UiqrMFOJnh5R_g7xhIrslGxotNEcyK5V15p5yJkUlrXMBGqGw3TkU0x06Yb0Q-72QXK9N9=p-rw"  pagetitle="Business" iconcolor="bg-business" />

            {business &&
                business.map((b, i) => {
                    const {
                        title,
                        urlToImage,
                        description,
                        publishedAt,
                        source = [],
                        url,
                        content,
                    } = b;
                    return (
                        <NewsCard
                            key={i}
                            title={title}
                            urlToImage={urlToImage}
                            description={description}
                            url={url}
                            publishedAt={publishedAt}
                            source={source}
                            content={content}
                        />
                    );
                })}
        </section>
    );
}

export default Business;
