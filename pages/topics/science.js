import React, { useEffect } from "react";
import { fetchScience } from "../../store/actions/newsAction";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../../components/Article/NewsCard";
import Head from "next/head";
import HeaderPage from "../../components/Helper/HeaderPage";

function Science() {
    const dispatch = useDispatch();
    const science = useSelector(state => state.fetchnews.science);

    useEffect(() => {
        dispatch(fetchScience());
    }, []);
    return (
        <section>
            <Head>
                <title>Google News - Science</title>
            </Head>
            <HeaderPage pageimage="https://lh6.ggpht.com/fJKuBX6iUFA_nPU2_2bIXcrTf3osSPhgBCL0sGqR2pZo-P6uZpiSmHW098W4I-CQHmsxZBd4=p-rw" pagetitle="Science" iconcolor="bg-science" />

            {science &&
                science.map((s, i) => {
                    const {
                        title,
                        urlToImage,
                        description,
                        publishedAt,
                        source = [],
                        url,
                        content,
                    } = s;
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

export default Science;