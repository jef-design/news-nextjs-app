import Link from "next/link";
import ReactTimeAgo from "react-time-ago";
import Image from "next/image";
import Head from "next/head";

function NewsCard({
    urlToImage,
    title,
    url,
    publishedAt,
    source = [],
    description,
    content,
}) {
    return (
        <>
            <Link href={url}>
                <div className="p-3 border border-gray-300 rounded-lg cursor-pointer mb-6 group sm:text-sm">
                    <div className="flex justify-between">
                        <div className="pr-3 peer">
                            <h3 className="text-xl text-left font-medium sm:text-lg group-hover:underline">
                                {title}
                            </h3>
                            <div className="flex text-gray-400 text-xs mt-2 mb-2">
                                {source &&
                                    [source].map((s, i) => {
                                        return (
                                            <p key={i} className="mr-3">
                                                {s.name}
                                            </p>
                                        );
                                    })}

                                <p>
                                    <ReactTimeAgo date={publishedAt} />
                                </p>
                            </div>
                        </div>
                        <div className="pl-2 text max-w-[200px] sm:max-w-[120px]">
                            {/* <img
                                src={urlToImage}
                                alt=""
                                className="w-full rounded-lg"
                            /> */}
                        </div>
                    </div>
                    <div className="my-2">
                        <p>{description}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default NewsCard;
