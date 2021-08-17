function Loader() {
    return (
        <div className="w-full h-full z-40 absolute top-0 left-0 right-0 bottom-0 opacity-60 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border border-gray-200">
            <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                    <div
                        style={{ width: "30%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default Loader;
