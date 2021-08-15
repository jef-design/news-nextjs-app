import React,{ useEffect,useRef } from 'react'
import {
    GlobeAltIcon,
    StarIcon,
    SearchIcon,
    ThumbUpIcon,
} from "@heroicons/react/outline";
import {
    GlobeIcon,
    LocationMarkerIcon,
    BriefcaseIcon,
    ChipIcon,
    SupportIcon,
    BeakerIcon,
    HeartIcon,
    FilmIcon
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";
import Link from "next/link";
import { useRouter } from 'next/router';

function Sidebar({ isOpen, toggle,setIsOpen }) {
    const router = useRouter();
    let refMenu = useRef();

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
      }, [setIsOpen]);

      useEffect(() => {
        let handler = (event) => {
           if(!refMenu.current.contains(event.target)) {
               setIsOpen(false);
           }
       }

       document.addEventListener("mousedown", handler);

       return () => {
           document.addEventListener("mousedown", handler)
       }
   }, [setIsOpen])
    
    return (
        <div
        ref={refMenu}
            isOpen={isOpen}
            onClick={toggle}
            className="transition-all ease-linear duration-200 min-w-[260px] h-screen bg-white fixed left-0 top-0 text-gray-500 lg:shadow-2xl lg:z-20 lg:left-[-350px]"
            style={{ left: isOpen ? "0px" : "-350px" }}
        >
            <Link href="/" passHref={true}>
                <div className="flex items-center mb-8 px-6 py-1 mt-3">
                    <span className="text-xl cursor-pointer before:content-[url(https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg)]  h-5 w-20 inline-block"></span>
                    <span className="text-xl">News</span>
                </div>
            </Link>
            <SidebarRow
            // className={router.pathname == "/" ? "active" : ""}
                Icon={GlobeAltIcon}
                name="Top stories"
                href="/"
            />
            <SidebarRow Icon={ThumbUpIcon} name="For you" href="/foryou" />
            <SidebarRow Icon={StarIcon} name="Following" href="/my/following" />
            <SidebarRow
                Icon={SearchIcon}
                name="Saved searches"
                href="/my/searches"
            />
            {/* <SidebarRow Icon={SearchIcon} name="COVID-19"  href="/" /> */}
            <SidebarRow Icon={GlobeIcon} name="World" href="/topics/world" />
            <SidebarRow
                Icon={LocationMarkerIcon}
                name="Your local news"
                href="/topics/nation"
            />
            <SidebarRow
                Icon={BriefcaseIcon}
                name="Business"
                href="/topics/business"
            />
            <SidebarRow
                Icon={ChipIcon}
                name="Technology"
                href="/topics/technology"
            />
            <SidebarRow
                Icon={FilmIcon}
                name="Entertainment"
                href="/topics/entertainment"
            />
            <SidebarRow
                Icon={SupportIcon}
                name="Sports"
                href="/topics/sports"
            />
            <SidebarRow
                Icon={BeakerIcon}
                name="Science"
                href="/topics/science"
            />
            <SidebarRow Icon={HeartIcon} name="Health" href="/topics/health" />
            {/* <p>Language & region</p>
       <p>Settings</p>
       <p>Get the Andriod app</p>
       <p>Get the iOS app</p>
       <p>Send feedbacl</p>
       <p>Help</p> */}
        </div>
    );
}

export default Sidebar;
