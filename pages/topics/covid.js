import React, { useEffect } from "react";
import { fetchHealth } from "../../store/actions/newsAction";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../../components/Article/NewsCard";
import Meta from "../../components/Meta/Meta";
import HeaderPage from "../../components/Helper/HeaderPage";
import Loader from "../../components/Loader";

function Covid() {
    const dispatch = useDispatch();
    const covid = useSelector(state => state.fetchnews.health);
    const loading = useSelector(state => state.miscloading.loading)

    useEffect(() => {
        dispatch(fetchHealth());
    }, [dispatch]);
    return (
        <section>
            <Meta title="Google News - Coronavirus"
            image="https://lh3.googleusercontent.com/8aWM-xG1nGxpeskK1E8QYfLxPZwPEvuwGfsMVcT4OvpvlYfXrWmvncUjJ4fMY1BT6yaz2U8lyA=rw-p"
            description="Read full articles, browse thousand of titles and more on the Coronavirus topic with Google News" />
            <HeaderPage pageimage="https://lh3.googleusercontent.com/8aWM-xG1nGxpeskK1E8QYfLxPZwPEvuwGfsMVcT4OvpvlYfXrWmvncUjJ4fMY1BT6yaz2U8lyA=rw-p" pagetitle="Coronavirus" iconcolor="bg-nation" />

            {covid &&
                covid.map((h, i) => {
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
                        <>
                         
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
                        
                       </>
                    );
                })}
        </section>
    );
}

export default Covid;