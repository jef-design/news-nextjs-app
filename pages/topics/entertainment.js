import React, { useEffect } from "react";
import { fetchEntertainment } from "../../store/actions/newsAction";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../../components/Article/NewsCard";
import Head from "next/head";
import Image from "next/image";
import HeaderPage from "../../components/Helper/HeaderPage";

function Business() {
    const dispatch = useDispatch();
    const entertainment = useSelector(state => state.fetchnews.entertainment);

    useEffect(() => {
        dispatch(fetchEntertainment());
    }, [dispatch]);
    return (
        <section>
            <Head>
                <title>Google News - Entertainment</title>
            </Head>
           <HeaderPage pageimage="https://lh6.ggpht.com/M-7V3aFj1BEw9EYBVHdLFmjCerci3j2MvsB43zu6-9iu-znG_WuOYrz5urJlStV5n59mW0WY5Q=p-rw" pagetitle="Entertainment" iconcolor="bg-entertainment" />

            {entertainment &&
                entertainment.map((b, i) => {
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