'use client'
import Image from "next/image";
import Drawer from "../Drawer";
import { useState } from 'react';

const Navs = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'Features',
        href: '/features'
    },
    {
        name: 'Pricing',
        href: '/pricing'
    },
    {
        name: 'about us',
        href: '/about',
    },
    {
        name: 'Contact',
        href: '/contact'
    }
];

const NavBar = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <header className="w-full h-nav-bar fixed pt-4 bg-white flex items-center px-4 tablet:px-8 desktop:px-28 top-0 inset-x-0">
            <a
                role="button"
                className="flex items-center cursor-pointer outline-none focus:ring-4 focus:ring-focus/[.12] rounded"
                href="/"
            >
                <img src="/logo.png" className="h-8 w-8 relative" />
                <span className="font-bold text-base text-primary">Abstractly</span>
            </a>
            <ul
                className="hidden desktop:flex p-0 m-0 ml-24 mr-auto items-center gap-8 text-secondary font-medium text-base"
                role="navigation"
            >
                {Navs.map(nav => {
                    return (
                        <li
                            key={nav.name}
                        >
                            <a
                                href={nav.href}
                                className="hover:text-primary focus:text-primary focus:ring-4 focus:ring-focus/[.12] rounded outline-none"
                            >
                                {nav.name}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <div className="hidden desktop:flex items-center gap-4">
                <a
                    href="#"
                    role="button"
                    className=" outline-none py-[10px] px-4 bg-primary hover:bg-primary-hover focus:bg-primary-hover border border-solid border-primary shadow text-primary text-base font-medium cursor-pointer rounded focus:ring-4 focus:ring-focus/[.12]"
                >Learn more</a>
                <a
                    href="#"
                    role="button"
                    className=" outline-none py-[10px] px-4 bg-brand-primary hover:bg-brand-primary-emphasize focus:bg-brand-primary-emphasize shadow text-primary-invert text-base font-medium cursor-pointer rounded focus:ring-4 focus:ring-focus/[.12]"
                >See pricing</a>
            </div>
            <button
                type="button"
                tabIndex={0}
                className="outline-none relative ml-auto cursor-pointer desktop:hidden focus:ring-4 focus:ring-focus/[.12] rounded"
                onClick={() => setOpen(true)}
                aria-expanded={open}
                aria-controls="nav-drawer"
                aria-label="open navigation drawer"
            >
                <img
                    src="/menu-fill.png"
                    className="h-5 w-5"
                />
            </button>
            <Drawer
                open={open}
                className="w-[375px] px-4 pt-8 pb-4 flex flex-col gap-6"
                id="nav-drawer"
            >
                <div className="flex items-center">
                    <a
                        className="outline-none flex items-center cursor-pointer focus:ring-4 focus:ring-focus/[.12] rounded"
                        href="/"
                        role="button"
                    >
                        <div className="h-8 w-8 relative">
                            <Image
                                alt="logo"
                                src="/logo.png"
                                fill={true}
                            />
                        </div>
                        <span className="font-bold text-base text-primary">Abstractly</span>
                    </a>
                    <button
                        type="button"
                        tabIndex={0}
                        className="outline-none relative ml-auto cursor-pointer desktop:hidden focus:ring-4 focus:ring-focus/[.12] rounded"
                        onClick={() => setOpen(false)}
                        role="button"
                        aria-label="close navigation drawer"
                    >
                        <img
                            alt="close"
                            src="/close.png"
                            className="h-5 w-5"

                        />
                    </button>
                </div>
                <ul
                    className="flex flex-col gap-2 text-primary text-sm flex-1"
                    role="navigation"
                >
                    {Navs.map(nav => {
                        return (
                            <li
                                key={nav.name}
                                className=""
                            >
                                <a
                                    href={nav.href}
                                    className="outline-none block w-full h-9 leading-9 pl-3 focus:ring-4 focus:ring-focus/[.12] rounded"
                                >
                                    {nav.name}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <div className="flex flex-col gap-4">
                    <a
                        href="#"
                        role="button"
                        className="outline-none py-[10px] w-full bg-primary hover:bg-primary-hover focus:bg-primary-hover border border-solid border-primary shadow text-primary text-base font-medium cursor-pointer rounded text-center focus:ring-4 focus:ring-focus/[.12]"
                    >Learn more</a>
                    <a
                        href="#"
                        role="button"
                        className="outline-none py-[10px] w-full bg-brand-primary hover:bg-brand-primary-emphasize focus:bg-brand-primary-emphasize focus:bg-brand-primary-emphasize shadow text-primary-invert text-base font-medium rounded text-center focus:ring-4 focus:ring-focus/[.12]"
                    >Try it out</a>
                </div>
            </Drawer>
        </header>
    )
}

export default NavBar;