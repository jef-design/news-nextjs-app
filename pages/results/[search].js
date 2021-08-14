import React, { useEffect } from "react";
import { fetchSearch } from "../../store/actions/searchAction";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../../components/Article/NewsCard";
import Head from 'next/head'

function SearchResult() {
    const dispatch = useDispatch();
    const query = useSelector(state => state.search.query)
    const search = useSelector(state => state.search.searchnews);


    useEffect(() => {
        dispatch(fetchSearch(query));
    }, [dispatch,query]);
    return (
        <section>
            <Head>
                <title>Google News - Search - {query}</title>
            </Head>

            {search &&
                search.map((b, i) => {
                    const {
                        title,
                        urlToImage,
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
    )
}

export default SearchResult
