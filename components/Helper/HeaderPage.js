import Image from 'next/image'
import { StarIcon } from '@heroicons/react/outline'
import { ShareIcon } from '@heroicons/react/solid'

function HeaderPage({pagetitle,pageimage,iconcolor}) {
    return (
        <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
                   <Image
                    src={pageimage}
                    alt="header image"
                    height={60}
                    width={60}
                    className={`rounded-full ${iconcolor}`}
                    />
                <h2 className="font-medium text-3xl md:text-2xl">
                    {pagetitle}</h2>
                   </div>
                <div className="flex space-x-2">
                    <div className="shadow-lg px-3 py-1 border rounded-2xl flex items-center cursor-pointer sm:rounded-full"><StarIcon className="w-4 text-blue-600 mr-1" />
                    <p className="sm:hidden">Follow</p></div>
                    <div className="shadow-lg px-3 py-1 border rounded-2xl flex items-center cursor-pointer sm:rounded-full"><ShareIcon className="w-4 text-blue-600 mr-1"/>
                    <p className="sm:hidden">Share</p></div>
                </div>
            </div>
    )
}

export default HeaderPage
