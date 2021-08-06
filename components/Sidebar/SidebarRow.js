import Link from 'next/link'

function SidebarRow({Icon,name,href,active}) {
    return (
        <Link href={href} >
        <div className={`flex items-center mb-2 px-6 py-2 space-x-4 hover:text-blue-600 cursor-pointer ${active && "text-blue-600 bg-blue-100 rounded-r-3xl"}`}>
            <Icon className="`w-5 h-7 `" />
            <p className="text-[15px]">{name}</p>
        </div>
        </Link>
    )
}

export default SidebarRow
