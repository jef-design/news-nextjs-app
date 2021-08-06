import Link from "next/link";
import { MenuIcon, SearchIcon } from "@heroicons/react/solid";
import { useSession, signOut,signIn } from "next-auth/client";
import ReactTooltip from "react-tooltip";

const Header = ({toggle}) => {
    const [session] = useSession();
   

    return (
        <header className="border-b-2 px-4 py-2 text-gray-500 shadow-lg flex justify-between items-center fixed top-0 left-0 right-0 z-20 bg-white">
            <div className="flex items-center space-x-3">
                <MenuIcon onClick={toggle} className="h-5 w-7 mr-2 cursor-pointer" />

                <Link href="/">
                    <div className="flex items-center">
                        <span className="text-xl cursor-pointer before:content-[url(https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg)]  h-5 w-20 inline-block"></span>
                        <span className="text-xl">News</span>
                    </div>
                </Link>
            </div>
            <form action="" className="w-full flex justify-center ml-2 mr-1 sm:hidden">
                <div className="flex items-center border rounded-lg p-3 w-full max-w-2xl bg-gray-100">
                    <SearchIcon className="w-7 h-6" />
                    <input
                        placeholder="Search for topics,location & sources"
                        className="w-full ml-3 outline-none bg-transparent"
                    />
                </div>
            </form>
            <div className="flex items-center space-x-3">
                <SearchIcon className="w-6 h-6 hidden sm:block" />
                {/* {!session && (
                    <div className="flex items-center space-x-3">
                        <p className="text-xs whitespace-nowrap md:hidden">Not signed in </p>
                        <p className="cursor-pointer text-sm bg-blue-600 text-white px-4 py-1 rounded-lg whitespace-nowrap hover:bg-blue-500" onClick={() => signIn()}>Sign in</p>
                    </div>
                )} */}
                {session && (
                    <div className="flex items-center space-x-3 md:hidden">
                        {/* <p className="text-xs lg:hidden">Signed in as {session.user.email}</p> */}
                        <p className="cursor-pointer text-sm bg-blue-600 text-white px-4 py-1 rounded-lg whitespace-nowrap hover:bg-blue-500" onClick={() => signOut()}>Sign out</p>
                    </div>
                )}
                <div
                    data-background-color="gray"
                    data-tip
                    data-for="googleAppTip"
                    className="hover:bg-gray-100 rounded-full p-2"
                >
                    <svg
                        className="h-6 w-6"
                        focusable="false"
                        viewBox="0 0 24 24"
                    >
                        <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                    </svg>
                </div>
                <div className="">
                    <div
                        data-background-color="gray"
                        data-tip
                        data-for="googleTip"
                        className="hover:bg-gray-100 rounded-full p-2"
                    >
                        <div className="bg-gray-500 h-7 w-7 rounded-full">
                            {!session ? <img
                                src=""
                                alt=""
                                className="rounded-full"
                            />:
                            <img
                                onClick={signOut}
                                src={session.user.image}
                                alt=""
                                className="rounded-full"
                            />}
                        </div>
                    </div>
                </div>

                <ReactTooltip id="googleTip" place="left" effect="solid">
                    <p>Google Account</p>
                    {/* <p className="text-gray-400">{session.user.name}</p>
                    <p className="text-gray-400">{session.user.email}</p> */}
                </ReactTooltip>
                <ReactTooltip id="googleAppTip" place="left" effect="solid">
                    <p>Google Apps</p>
                </ReactTooltip>
            </div>
        </header>
    );
};

export default Header;
