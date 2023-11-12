'use client'

import { useUIStore } from "@/store";
import Image from "next/image"
import Link from "next/link"

import { IoLogoReact, IoPersonAddOutline, IoFootballOutline, IoBagCheckOutline } from 'react-icons/io5';

export const NavbarTop = () => {

    const openSideMenu = useUIStore( state => state.openSideMenu );
    
    return (
        <div className="w-full px-5 py-2 sticky">
            <nav className="flex px-4 justify-between bg-gradient-to-r from-blue-900 to-indigo-800 rounded-lg h-10 items-center">
                <div className="container-nav">
                    <Link href="/">
                        <div className="h-8 flex items-center text-green-100 hover:text-cyan-400 rounded-s-md transition duration-300 border-slate-300">
                            <IoLogoReact size={25} className="mx-1" />
                            <p>Mi mundo programado</p>
                        </div>
                    </Link>
                </div>

                <div className="container-nav">
                    <ul className=" flex-colum gap-3 hidden sm:flex">
                        <li>
                            <Link href="/about">
                                <div className="h-8 flex items-center text-green-100 hover:text-cyan-400 rounded-s-md transition duration-300 border-slate-300">
                                    <IoPersonAddOutline size={15} className="mx-1" />
                                    <p>Sobre mí</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects">
                                <div className="h-8 flex items-center text-green-100 hover:text-cyan-400 rounded-s-md transition duration-300 border-slate-300">
                                    <IoBagCheckOutline size={15} className="mx-1" />
                                    <p>Proyectos</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/hobbie">
                                <div className="h-8 flex items-center text-green-100 hover:text-cyan-400 rounded-s-md transition duration-300 border-slate-300">
                                    <IoFootballOutline size={15} className="mx-1" />
                                    <p>Hobbies</p>
                                </div>
                            </Link>
                        </li>
                    </ul>

                </div>

                <button
                    onClick={ openSideMenu }
                    className="m-2 p-2 flex rounded-md transition-all  items-center text-green-100 hover:text-cyan-400 rounded-s-md  duration-300 border-slate-300 sm:hidden">
                    Menú
                </button>

            </nav>
        </div>

    )
}
