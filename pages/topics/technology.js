import React, { useEffect } from "react";
import { fetchTechnology } from "../../store/actions/newsAction";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../../components/Article/NewsCard";
import Meta from "../../components/Meta/Meta";
import HeaderPage from "../../components/Helper/HeaderPage";
import Loader from "../../components/Loader";

function Technology() {
    const dispatch = useDispatch();
    const technology = useSelector(state => state.fetchnews.technology);
    const loading = useSelector(state => state.miscloading.loading)

    useEffect(() => {
        dispatch(fetchTechnology());
    }, [dispatch]);
    return (
        <section>
            <Meta title="Google News - Technology"
            image="https://lh4.ggpht.com/0JsT7seg_L1MnpCuWZvJ6CJCHpkCawqEMdOr8Iw_NWjNUyTqWZJZNDbfa6kUGg-q1KN4FiUPaw=p-rw"
            description="Read full articles, browse thousand of titles and more on the Technology topic with Google News" />
            <HeaderPage pageimage="https://lh4.ggpht.com/0JsT7seg_L1MnpCuWZvJ6CJCHpkCawqEMdOr8Iw_NWjNUyTqWZJZNDbfa6kUGg-q1KN4FiUPaw=p-rw" pagetitle="Technology" iconcolor="bg-technology" />

            {technology &&
                technology.map((tech, i) => {
                    const {
                        title,
                        image,
                        description,
                        publishedAt,
                        source = [],
                        url,
                        content,
                    } = tech;
                    return (
                        <>
                        {loading ? <Loader/> : 
                        <NewsCard
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

export default Technology;