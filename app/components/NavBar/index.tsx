'use client'
import Image from "next/image";
import Drawer from "../Drawer";
import { useState } from 'react';

const Navs = [
    {
        name: 'Home'
    },
    {
        name: 'Features'
    },
    {
        name: 'Pricing'
    },
    {
        name: 'about us'
    },
    {
        name: 'Contact'
    }
];

const NavBar = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <header className="w-full h-nav-bar absolute pt-4 bg-white flex items-center px-4 tablet:px-8 desktop:px-28">
            <div className="flex items-center cursor-pointer">
                <div className="h-8 w-8 relative">
                    <Image
                        alt="logo"
                        src="/logo.png"
                        fill={true}
                    />
                </div>
                <span className="font-bold text-base text-primary">Abstractly</span>
            </div>
            <ul className="hidden desktop:flex p-0 m-0 ml-24 mr-auto items-center gap-8 text-secondary text-medium">
                {Navs.map(nav => {
                    return (
                        <li
                            key={nav.name}
                            className="cursor-pointer"
                        >{nav.name}</li>
                    )
                })}
            </ul>
            <div className="hidden desktop:flex items-center gap-4">
                <a
                    className="py-[10px] px-4 bg-primary hover:bg-primary-hover border border-solid border-primary shadow text-primary text-base text-medium cursor-pointer rounded"
                >Learn more</a>
                <a
                    className="py-[10px] px-4 bg-brand-primary hover:bg-brand-primary-emphasize shadow text-primary-invert text-base text-medium cursor-pointer rounded"
                >See pricing</a>
            </div>
            <div
                className="h-5 w-5 relative ml-auto cursor-pointer desktop:hidden"
                onClick={() => setOpen(true)}
            >
                <Image
                    alt="menu"
                    src="/menu-fill.png"
                    fill={true}
                />
            </div>
            <Drawer
                open={open}
                className="w-[375px] px-4 pt-8 pb-4 flex flex-col gap-6"
            >
                <div className="flex items-center">
                    <div className="flex items-center cursor-pointer">
                        <div className="h-8 w-8 relative">
                            <Image
                                alt="logo"
                                src="/logo.png"
                                fill={true}
                            />
                        </div>
                        <span className="font-bold text-base text-primary">Abstractly</span>
                    </div>
                    <div
                        className="h-5 w-5 relative ml-auto cursor-pointer desktop:hidden"
                        onClick={() => setOpen(false)}
                    >
                        <Image
                            alt="close"
                            src="/close.png"
                            fill={true}

                        />
                    </div>
                </div>
                <ul className="flex flex-col gap-2 text-primary text-sm flex-1">
                    {Navs.map(nav => {
                        return (
                            <li
                                key={nav.name}
                                className="cursor-pointer h-9 leading-9 pl-3"
                            >{nav.name}</li>
                        )
                    })}
                </ul>
                <div className="flex flex-col gap-4">
                    <a
                        className="py-[10px] w-full bg-primary hover:bg-primary-hover border border-solid border-primary shadow text-primary text-base text-medium cursor-pointer rounded text-center"
                    >Learn more</a>
                    <a
                        className="py-[10px] w-full bg-brand-primary hover:bg-brand-primary-emphasize shadow text-primary-invert text-base text-medium cursor-pointer rounded text-center"
                    >Try it out</a>
                </div>
            </Drawer>
        </header>
    )
}

export default NavBar;