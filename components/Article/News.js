import React,{useEffect} from "react";
import {fetchTopHeadlines} from '../../store/actions/newsAction';
import {useDispatch,useSelector} from 'react-redux'
import Image from 'next/image'
import NewsCard from "./NewsCard";
import { ChevronRightIcon } from '@heroicons/react/solid';
import {useSession,signOut} from 'next-auth/client'
import Link from 'next/link'



function News() {
    const [session] = useSession();
    const topheadlines = useSelector(state => state.fetchnews.topheadline)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTopHeadlines())
    }, [dispatch])
    return (
        <section className="ml-5 md:ml-0">
            <div className="flex justify-between items-center"><h2 className="mb-2 font-medium text-xl font-sans">Headlines</h2>
            <p className="text-xs text-blue-600 font-medium cursor-pointer">More Headlines</p></div>
            <Link href="/topics/covid">
            <div className="px-3 py-4 border border-gray-300 rounded-lg mb-5 hover:shadow ease-in-out cursor-pointer" >
               <div className="flex justify-between items-center">
               <p ><span className="text-blue-600 font-bold">COVID-19 news:</span> See the latest coverage of the coronavirus</p>
            <ChevronRightIcon className="h-5" />
               </div>
            </div>
            </Link>
            <div className="mb-5">
                <h2 className="font-medium text-xl">Good day, {session.user.name}</h2>
                <p>Here&apos;s what you need to know.</p>
            </div>
            {topheadlines && topheadlines.map((headlines, i) => {
                const {title,image,description,publishedAt,source=[],url,content} = headlines;
                return(
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

                )
            })}
        </section>
    )
}

export default News
