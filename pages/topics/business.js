import React, { useEffect } from "react";
import { fetchBusiness } from "../../store/actions/newsAction";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../../components/Article/NewsCard";
import HeaderPage from "../../components/Helper/HeaderPage";
import Meta from "../../components/Meta/Meta";
import Loader from "../../components/Loader";

function Business() {
    const dispatch = useDispatch();
    const business = useSelector(state => state.fetchnews.business);
    const loading = useSelector(state => state.miscloading.loading)


    useEffect(() => {
        dispatch(fetchBusiness());
    }, [dispatch]);
    return (
        <section>
            <Meta title="Google News - Business" 
            image="https://lh4.ggpht.com/A0UiqrMFOJnh5R_g7xhIrslGxotNEcyK5V15p5yJkUlrXMBGqGw3TkU0x06Yb0Q-72QXK9N9=p-rw"
            description="Read full articles, browse thousand of titles and more on the Business topic with Google News"
             />
            <HeaderPage pageimage="https://lh4.ggpht.com/A0UiqrMFOJnh5R_g7xhIrslGxotNEcyK5V15p5yJkUlrXMBGqGw3TkU0x06Yb0Q-72QXK9N9=p-rw"  pagetitle="Business" iconcolor="bg-business" />

            {business &&
                business.map((b, i) => {
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

export default Business;
