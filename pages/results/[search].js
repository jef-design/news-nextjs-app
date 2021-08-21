import React, { useEffect } from "react";
import { fetchSearch } from "../../store/actions/searchAction";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../../components/Article/NewsCard";
import Head from "next/head";
import Loader from "../../components/Loader";

function SearchResult() {
    const dispatch = useDispatch();
    const query = useSelector(state => state.search.query);
    const search = useSelector(state => state.search.searchnews);
    const loading = useSelector(state => state.miscloading.loading);

    useEffect(() => {
        dispatch(fetchSearch(query));
    }, [dispatch, query]);
    return (
        <section>
            <Head>
                <title>Google News - Search - {query}</title>
            </Head>

            {search &&
                search.map((b, i) => {
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
                            {loading ? (
                                <Loader />
                            ) : (
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
                            )}
                        </>
                    );
                })}
        </section>
    );
}

export default SearchResult;
