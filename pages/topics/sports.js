import React, { useEffect } from "react";
import { fetchSports } from "../../store/actions/newsAction";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../../components/Article/NewsCard";
import Meta from "../../components/Meta/Meta";
import HeaderPage from "../../components/Helper/HeaderPage";

function Sports() {
    const dispatch = useDispatch();
    const sports = useSelector(state => state.fetchnews.sports);

    useEffect(() => {
        dispatch(fetchSports());
    }, [dispatch]);
    return (
        <section>
            <Meta title="Google News - Sports"
            image="https://lh4.ggpht.com/NyQryeBboxLw72N3_3mAHBYMuWlMaZ1RJHGRdF30RDICgv2-9Jupc2GzY2XeVdgaV3nbNaXb=p-rw"
            description="Read full articles, browse thousand of titles and more on the Sports topic with Google News" />
            <HeaderPage pageimage="https://lh4.ggpht.com/NyQryeBboxLw72N3_3mAHBYMuWlMaZ1RJHGRdF30RDICgv2-9Jupc2GzY2XeVdgaV3nbNaXb=p-rw" pagetitle="Sports" iconcolor="bg-sports" />
            {sports &&
                sports.map((sport, i) => {
                    const {
                        title,
                        image,
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

export default Sports;
