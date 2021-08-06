import React,{ useState } from 'react';
import Header from "../Header";
import SideBar from "../Sidebar/Sidebar";

export default function Layout({ children}) {
   
    const [isOpen,setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
        // console.log(isOpen)
    }
    return (
        <div>
            <Header toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            <main className="main max-w-[1023px] mx-auto p-4 mt-20 ml-64 lg:ml-0">
                {children}
            </main>
        </div>
    );
}
