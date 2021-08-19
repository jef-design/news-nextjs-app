import React, { useState,useEffect } from "react";
import { useSession } from "next-auth/client";
import Header from "../Header";
import SideBar from "../Sidebar/Sidebar";
import Login from "../Login/Login";
import Meta from "../Meta/Meta";

export default function Layout({ children }) {
    // const [session] = useSession();

    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => {
        setIsOpen(!isOpen);
        // console.log(isOpen)
    };
    // if (!session) return <Login />;
    useEffect(() => {
        const resizeHandler = () =>{
            if (window.innerWidth < 768) {
                setIsOpen(false)
              }
              else if(window.innerWidth > 768){
                  setIsOpen(true)
              }
        };
        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
      }, []);
    return (
        <>
        <Meta />
            <div>
                <Header toggle={toggle} />
                <SideBar
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    toggle={toggle}  
                />
                <main className="main max-w-[1023px] mx-auto p-4 mt-20 ml-64 lg:ml-0">
                    {children}
                </main>
            </div>
        </>
    );
}
