'use client'

import { useUIStore } from "@/store";
import Image from "next/image"
import Link from "next/link"

import { IoLogoReact, IoPersonAddOutline, IoFootballOutline, IoBagCheckOutline } from 'react-icons/io5';
import { NavbarTopItems } from './NavbarTopItems';


const menuItems = [
    {
        icon: <IoPersonAddOutline size={20} className="mx-1" />,
        title: 'Sobre mí',
        path: '/about'
    },
    {
        icon: <IoBagCheckOutline size={20} className="mx-1" />,
        title: 'Proyectos',
        path: '/projects'
    },
    {
        icon: <IoFootballOutline size={20} className="mx-1" />,
        title: 'Hobbies',
        path: '/hobbie'
    }

]

export const NavbarTop = () => {

    const openSideMenu = useUIStore(state => state.openSideMenu);

    return (
        <div className="w-full py-2 sticky">
            <nav className="flex px-4 justify-between  rounded-lg h-20 items-center">
                <div className="container-nav">
                    <Link href="/">
                        <div className="h-8 flex items-center text-green-100 hover:text-cyan-400 rounded-s-md transition duration-300 border-slate-300 bg-blend-luminosity sm:text-2xl">
                            <IoLogoReact size={35} className="mx-1" />
                            <p>AxelDevops</p>
                        </div>
                    </Link>
                </div>



                <div className="container-nav">
                    <ul className=" flex-colum gap-3 hidden sm:flex">
                    {
                        menuItems.map( item => (
                             <NavbarTopItems key={item.path} {...item} />
                        ) )
                    }
                       
                    </ul>

                </div>

                <button
                    onClick={openSideMenu}
                    className="m-2 p-2 flex rounded-md transition-all  items-center text-green-100 hover:text-cyan-400 rounded-s-md  duration-300 border-slate-300 sm:hidden">
                    Menú
                </button>

            </nav>
        </div>

    )
}
