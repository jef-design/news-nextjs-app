import React, { useEffect } from "react";
import { fetchEntertainment } from "../../store/actions/newsAction";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../../components/Article/NewsCard";
import Head from "next/head";
import Image from "next/image";
import HeaderPage from "../../components/Helper/HeaderPage";
import Meta from "../../components/Meta/Meta";

function Business() {
    const dispatch = useDispatch();
    const entertainment = useSelector(state => state.fetchnews.entertainment);

    useEffect(() => {
        dispatch(fetchEntertainment());
    }, [dispatch]);
    return (
        <section>
            <Meta title="Google News - Entertainment"
            image="https://lh6.ggpht.com/M-7V3aFj1BEw9EYBVHdLFmjCerci3j2MvsB43zu6-9iu-znG_WuOYrz5urJlStV5n59mW0WY5Q=p-rw"
            description="Read full articles, browse thousand of titles and more on the Entertainment topic with Google News" />
           <HeaderPage pageimage="https://lh6.ggpht.com/M-7V3aFj1BEw9EYBVHdLFmjCerci3j2MvsB43zu6-9iu-znG_WuOYrz5urJlStV5n59mW0WY5Q=p-rw" pagetitle="Entertainment" iconcolor="bg-entertainment" />

            {entertainment &&
                entertainment.map((b, i) => {
                    const {
                        title,
                        image,
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

export default Business;