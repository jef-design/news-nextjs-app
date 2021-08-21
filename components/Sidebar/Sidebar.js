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
    FilmIcon,
    CubeTransparentIcon
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";
import Link from "next/link";
import { useRouter } from 'next/router';

function Sidebar({ toggle,sideBarOpen,setsideBarOpen }) {
    const router = useRouter();
    let refMenu = useRef();


      useEffect(() => {
        if (window.innerWidth < 768) {
            setsideBarOpen(false)
          }
        let handler = (event) => {
           if(!refMenu.current.contains(event.target)) {
            setsideBarOpen(false);
           }
       }

       document.addEventListener("mousedown", handler);

       return () => {
           document.addEventListener("mousedown", handler)
       }
   }, [setsideBarOpen])
    
    return (
        <div
        ref={refMenu}
            // isOpen={isOpen}
            onClick={toggle}
            className="side-bar lg:shadow-2xl lg:z-20 lg:left-[-350px]"
            style={{ left: sideBarOpen ? "0" : "-350px" }}
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
            <div className="border-t border-b py-2 ml">
            <SidebarRow Icon={CubeTransparentIcon} name="COVID-19"  href="/topics/covid" />
            </div>
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
            <div className="space-y-5 px-6 py-2">
            <p>Language & region</p>
            <p>Settings</p>
            <p>Get the Andriod app</p>
            <p>Get the iOS app</p>
            <p>Send feedback</p>
            <p>Help</p>
            </div>
        </div>
    );
}

export default Sidebar;
