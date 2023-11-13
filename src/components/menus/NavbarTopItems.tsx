'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";
import { IoPersonAddOutline } from 'react-icons/io5';

interface Props{
    icon:  React.ReactNode;
    path:  string;
    title: string;
}


export const NavbarTopItems = ({ icon, title, path }:Props) => {

    const pathname = usePathname()

    return (
        <li>
            <Link href={ path }>
                <div 
                    className={`h-10 px-2    flex items-center text-green-100 hover:text-white hover:bg-blue-400 rounded transition duration-300 border-slate-300 text-lg shadow-black
                    ${
                        path == pathname ? ' bg-blue-400': ''
                    }    
                    `}
                >
                    {icon}
                    <p>{title}</p>
                </div>
            </Link>
        </li>
    )
}
