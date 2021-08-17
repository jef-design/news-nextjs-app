function Loader() {
    return (
        <div className="w-full h-full z-40 overflow-hidden absolute top-0 left-0 right-0 bottom-0 bg-gray-200 bg-clip-padding backdrop-filter bg-opacity-60 border border-gray-200">
            <div className="relative">
                <div className="overflow-hidden animate-shimmer w-3/4 absolute top-0 left-0 right-0 h-[3px] mb-4 text-xs flex rounded bg-indigo-500">
                </div>
            </div>
        </div>
    );
}

export default Loader;
