import React, { useEffect } from "react";
import { fetchNation } from "../../store/actions/newsAction";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../../components/Article/NewsCard";
import Meta from "../../components/Meta/Meta";
import HeaderPage from "../../components/Helper/HeaderPage";

function Nation() {
    const dispatch = useDispatch();
    const nation = useSelector(state => state.fetchnews.nation);

    useEffect(() => {
        dispatch(fetchNation());
    }, [dispatch]);
    return (
        <section>
           <Meta title="Google News - Nation"
            image="https://lh3.googleusercontent.com/proxy/sNEGkuBnnFMGXpdk3R0U5_cXyLenzaUW1xT688HJLvr5OuYUChtcXWUha4kACeC2oiFGwXdmG33Ui_6rIY2f7yh5NTMfHNg5FVXnMHbm2SvCb078LuEsuGLO6zokwrO-u8DtID25KNhcbQWihrJ1PXDXm2DKK7-qKLz0JFTBaMquyyc=rw-p"
            description="Read full articles, browse thousand of titles and more on the Nation topic with Google News" />
            <HeaderPage pageimage="https://lh3.googleusercontent.com/proxy/sNEGkuBnnFMGXpdk3R0U5_cXyLenzaUW1xT688HJLvr5OuYUChtcXWUha4kACeC2oiFGwXdmG33Ui_6rIY2f7yh5NTMfHNg5FVXnMHbm2SvCb078LuEsuGLO6zokwrO-u8DtID25KNhcbQWihrJ1PXDXm2DKK7-qKLz0JFTBaMquyyc=rw-p" pagetitle="Nation" iconcolor="bg-nation" />
            {nation &&
                nation.map((nations, i) => {
                    const {
                        title,
                        image,
                        description,
                        publishedAt,
                        source = [],
                        url,
                        content,
                    } = nations;
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

export default Nation;
