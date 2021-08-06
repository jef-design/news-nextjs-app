import React, { useEffect } from "react";
import { fetchTechnology } from "../../store/actions/newsAction";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../../components/Article/NewsCard";
import Head from "next/head";
import { StarIcon } from '@heroicons/react/outline'
import { ShareIcon } from '@heroicons/react/solid'
import HeaderPage from "../../components/Helper/HeaderPage";

function Technology() {
    const dispatch = useDispatch();
    const technology = useSelector(state => state.fetchnews.technology);

    useEffect(() => {
        dispatch(fetchTechnology());
    }, []);
    return (
        <section>
            <Head>
                <title>Google News - Technology</title>
            </Head>
            <HeaderPage pageimage="https://lh4.ggpht.com/0JsT7seg_L1MnpCuWZvJ6CJCHpkCawqEMdOr8Iw_NWjNUyTqWZJZNDbfa6kUGg-q1KN4FiUPaw=p-rw" pagetitle="Technology" iconcolor="bg-technology" />

            {technology &&
                technology.map((tech, i) => {
                    const {
                        title,
                        urlToImage,
                        description,
                        publishedAt,
                        source = [],
                        url,
                        content,
                    } = tech;
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

export default Technology;