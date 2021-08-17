import React, { useEffect } from "react";
import { fetchScience } from "../../store/actions/newsAction";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../../components/Article/NewsCard";
import Meta from "../../components/Meta/Meta";
import HeaderPage from "../../components/Helper/HeaderPage";
import Loader from "../../components/Loader";

function Science() {
    const dispatch = useDispatch();
    const science = useSelector(state => state.fetchnews.science);
    const loading = useSelector(state => state.miscloading.loading)

    useEffect(() => {
        dispatch(fetchScience());
    }, [dispatch]);
    return (
        <section>
            <Meta title="Google News - Science"
            image="https://lh6.ggpht.com/fJKuBX6iUFA_nPU2_2bIXcrTf3osSPhgBCL0sGqR2pZo-P6uZpiSmHW098W4I-CQHmsxZBd4=p-rw"
            description="Read full articles, browse thousand of titles and more on the Science topic with Google News" />
            <HeaderPage pageimage="https://lh6.ggpht.com/fJKuBX6iUFA_nPU2_2bIXcrTf3osSPhgBCL0sGqR2pZo-P6uZpiSmHW098W4I-CQHmsxZBd4=p-rw" pagetitle="Science" iconcolor="bg-science" />

            {science &&
                science.map((s, i) => {
                    const {
                        title,
                        image,
                        description,
                        publishedAt,
                        source = [],
                        url,
                        content,
                    } = s;
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

export default Science;