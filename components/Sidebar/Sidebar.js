import {
    GlobeAltIcon,
    StarIcon,
    SearchIcon,
    GlobeIcon,
    LocationMarkerIcon,
    BriefcaseIcon,
    ChipIcon,
    SupportIcon,
    BeakerIcon,
    HeartIcon,
    FilmIcon,
    ThumbUpIcon
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";
import Link from 'next/link';

function Sidebar({isOpen,toggle}) {
    console.log(isOpen)
    return <div isOpen={isOpen} onClick={toggle} className="transition-all ease-linear duration-200 min-w-[260px] bg-white fixed left-0 top-0 text-gray-500 lg:left-[-350px] border-r-2 z-10"
    style={{left: isOpen ? "0px" : "-350px"}} >
        <Link href="/">
                    <div className="flex items-center mb-8 px-6 py-1 mt-3">
                        <span className="text-xl cursor-pointer before:content-[url(https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg)]  h-5 w-20 inline-block"></span>
                        <span className="text-xl">News</span>
                    </div>
                </Link>
        <SidebarRow active Icon={GlobeAltIcon} name="Top stories" href="/" />
        <SidebarRow Icon={ThumbUpIcon} name="For you" href="/foryou" />
        <SidebarRow Icon={StarIcon} name="Following" href="/my/following" />
        <SidebarRow Icon={SearchIcon} name="Saved searches"  href="/my/searches" />
        {/* <SidebarRow Icon={SearchIcon} name="COVID-19"  href="/" /> */}
        <SidebarRow Icon={GlobeIcon} name="World"   href="/" />
        <SidebarRow Icon={LocationMarkerIcon} name="Your local news"  href="/" />
        <SidebarRow Icon={BriefcaseIcon} name="Business"  href="/topics/business" />
        <SidebarRow Icon={ChipIcon} name="Technology"  href="/topics/technology" />
        <SidebarRow Icon={FilmIcon} name="Entertainment"  href="/topics/entertainment" />
        <SidebarRow Icon={SupportIcon} name="Sports"  href="/topics/sports" />
        <SidebarRow Icon={BeakerIcon} name="Science"  href="/topics/science" />
        <SidebarRow Icon={HeartIcon} name="Health"  href="/topics/health" />
       {/* <p>Language & region</p>
       <p>Settings</p>
       <p>Get the Andriod app</p>
       <p>Get the iOS app</p>
       <p>Send feedbacl</p>
       <p>Help</p> */}
    </div>;
}

export default Sidebar;
