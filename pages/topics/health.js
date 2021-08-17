import React, { useEffect } from "react";
import { fetchHealth } from "../../store/actions/newsAction";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../../components/Article/NewsCard";
import Meta from "../../components/Meta/Meta";
import HeaderPage from "../../components/Helper/HeaderPage";

function Health() {
    const dispatch = useDispatch();
    const health = useSelector(state => state.fetchnews.health);

    useEffect(() => {
        dispatch(fetchHealth());
    }, [dispatch]);
    return (
        <section>
            <Meta title="Google News - Health"
            image="https://lh3.ggpht.com/r4EKXwEo49BFQUa3OVZ8FC3j6teq_hUrmGcO4fI8BqoBgWSVJyu6D-vvXs9wGO7e_BKMbeqo4dk=p-rw"
            description="Read full articles, browse thousand of titles and more on the Health topic with Google News" />
            <HeaderPage pageimage="https://lh3.ggpht.com/r4EKXwEo49BFQUa3OVZ8FC3j6teq_hUrmGcO4fI8BqoBgWSVJyu6D-vvXs9wGO7e_BKMbeqo4dk=p-rw" pagetitle="Health" iconcolor="bg-health" />

            {health &&
                health.map((h, i) => {
                    const {
                        title,
                        image,
                        description,
                        publishedAt,
                        source = [],
                        url,
                        content,
                    } = h;
                    return (
                        <NewsCard
                            key={i}
                            title={title}
                            image={image}
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

export default Health;