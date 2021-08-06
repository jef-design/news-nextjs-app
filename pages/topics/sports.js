import React, { useEffect } from "react";
import { fetchSports } from "../../store/actions/newsAction";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../../components/Article/NewsCard";
import Head from "next/head";
import HeaderPage from "../../components/Helper/HeaderPage";

function Sports() {
    const dispatch = useDispatch();
    const sports = useSelector(state => state.fetchnews.sports);

    useEffect(() => {
        dispatch(fetchSports());
    }, []);
    return (
        <section>
            <Head>
                <title>Google News - Sports</title>
            </Head>
            <HeaderPage pageimage="https://lh4.ggpht.com/NyQryeBboxLw72N3_3mAHBYMuWlMaZ1RJHGRdF30RDICgv2-9Jupc2GzY2XeVdgaV3nbNaXb=p-rw" pagetitle="Sports" iconcolor="bg-sports" />
            {sports &&
                sports.map((sport, i) => {
                    const {
                        title,
                        urlToImage,
                        description,
                        publishedAt,
                        source = [],
                        url,
                        content,
                    } = sport;
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

export default Sports;
