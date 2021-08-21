import React, { useState,useEffect } from "react";
import Header from "../Header";
import SideBar from "../Sidebar/Sidebar";
import Login from "../Login/Login";
import Meta from "../Meta/Meta";
import { useSession } from "next-auth/client";
import Home from "../../pages";

export default function Layout({ children }) {
 
    const [session] = useSession()
    const [sideBarOpen, setsideBarOpen] = useState(true);

    const toggle = () => {
        setsideBarOpen(!sideBarOpen);
     
    };

    useEffect(() => {
        const resizeHandler = () =>{
            if (window.innerWidth < 768) {
                setsideBarOpen(false)
              }
              else if(window.innerWidth > 768){
                setsideBarOpen(true)
              }
        };
        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
      }, []);
    // if(!session) return <Home/>
    return (
        <>
        <Meta />
            <div>
                <Header toggle={toggle} />
                <SideBar
                    sideBarOpen={sideBarOpen}
                    setsideBarOpen={setsideBarOpen}
                    toggle={toggle}  
                />
                <main className="main max-w-[1023px] mx-auto p-4 mt-20 ml-72 lg:ml-0">
                    {children}
                </main>
            </div>
        </>
    );
}
