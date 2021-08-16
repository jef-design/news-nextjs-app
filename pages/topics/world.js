import React, { useEffect } from "react";
import { fetchWorld } from "../../store/actions/newsAction";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../../components/Article/NewsCard";
import Head from "next/head";
import HeaderPage from "../../components/Helper/HeaderPage";
import Loader from "../../components/Loader";

function World() {
    const dispatch = useDispatch();
    const world = useSelector(state => state.fetchnews.world);
    const loading = useSelector(state => state.miscloading.loading)
    useEffect(() => {
        dispatch(fetchWorld());
    }, [dispatch]);
    return (
        <section>
            <Head>
                <title>Google News - World</title>
            </Head>
            <HeaderPage pageimage="https://lh3.ggpht.com/MMoPETUaDbUB1bO3KAi3cKQ_lzssju3VEp9ZPauGIamgSniMr4nV2SVkVvG-rKUJSLQJP84q7EA=rw-p" pagetitle="World" iconcolor="bg-world" />
            {world &&
                world.map((worlds, i) => {
                    const {
                        title,
                        image,
                        description,
                        publishedAt,
                        source = [],
                        url,
                        content,
                    } = worlds;
                    return (
                       <>
                         {loading ? <Loader/> : <NewsCard
                            key={i}
                            title={title}
                            image={image}
                            description={description}
                            url={url}
                            publishedAt={publishedAt}
                            source={source}
                            content={content}
                        />}
                       </>
                    );
                })}
        </section>
    );
}

export default World;
