import React,{useRef,useState} from 'react'
import Link from "next/link";
import { MenuIcon, SearchIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/client";
import ReactTooltip from "react-tooltip";
import Search from '../Search';
import Account from '../Account/Account';
import Image from 'next/image'

const Header = ({toggle}) => {
    const [session] = useSession();
    const [isOpen,setIsOpen] = useState(false)
    const [isSearch,setIsSearch] = useState(false)
    const inputRef = useRef("")

    const setSearchfunc = () => {
        setIsSearch(!isSearch)
    }
    const handleFocus = () => {
        // inputRef.current.focus();
      }

   
    return (
        <header className="border-b-2 px-4 py-2 text-gray-500 shadow-lg fixed top-0 left-0 right-0 z-20 bg-white">
            <div className="flex justify-between items-center relative">
            <div style={{display: isSearch ? 'none' : ""}} className="flex items-center space-x-3">
                <div className="h-8 w-8 hover:bg-gray-100 rounded-full p-1">
                    <MenuIcon onClick={toggle} className="h-5 w-5 cursor-pointer" />
                </div>

                <Link href="/" passHref={true}>
                    <div className="flex items-center cursor-pointer">
                        <span className="text-xl before:content-[url(https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg)]  h-5 w-20 inline-block"></span>
                        <span className="text-xl">News</span>
                    </div>
                </Link>
            </div>
       
            <Search inputRef={inputRef} isSearch={isSearch} setIsSearch={setIsSearch}/>
         
            <div className="flex items-center space-x-2">
                <div className="hover:bg-gray-100 rounded-full p-2 cursor-pointer">
                <SearchIcon style={{display: isSearch ? 'none' : ""}} onClick={()=>{setSearchfunc(); handleFocus();}} className="w-6 h-6 hidden sm:block" />
                </div>

                <div
                    data-background-color="gray"
                    data-tip
                    data-for="googleAppTip"
                    className="cursor-pointer hover:bg-gray-100 rounded-full p-2"
                >
                    <svg
                        className="h-6 w-6"
                        focusable="false"
                        viewBox="0 0 24 24"
                    >
                        <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                    </svg>
                </div>
                <div className="cursor-pointer">
                    <div
                        data-background-color="gray"
                        data-tip
                        data-for="googleTip"
                        className="hover:bg-gray-100 rounded-full p-2"
                    >
                        <div className="bg-gray-500 h-7 w-7 rounded-full">
                        {!session ? (
                    <Image
                        
                        src="/"
                        alt=""
                        height={28}
                        width={28}
                        className="rounded-full h-20 w-20 mb-6"
                        
                    />
                ) : (
                    <Image
                    onClick={()=>{setIsOpen(!isOpen)}}
                        src={session.user.image}
                        alt="User image"
                        height={28}
                        width={28}
                        className="rounded-full h-20 w-20 mb-6"
                    />
                )}
                        </div>
                    </div>
                </div>

                <ReactTooltip id="googleTip" place="left" effect="solid">
                    <p>Google Account</p>
                    {!session ? <p>name</p> : <p className="text-gray-400">{session.user.name}</p>}
                    {!session ? <p>email</p> : <p className="text-gray-400">{session.user.email}</p>}
                </ReactTooltip>
                <ReactTooltip id="googleAppTip" place="left" effect="solid">
                    <p>Google Apps</p>
                </ReactTooltip>
            </div>
            <Account isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </header>
    );
};

export default Header;
