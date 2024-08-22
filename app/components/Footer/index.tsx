const Footer = () => {
    return (
        <footer className='px-8 py-12 tablet:py-16 desktop:py-24'>
            <div className='flex flex-col gap-8 w-[280px] mx-auto'>
                <div className='flex font-medium justify-between text-sm text-secondary'>
                    <a
                        href='/features'
                        className='hover:text-primary focus:text-primary focus:ring-4 focus:ring-focus/[.12] rounded outline-none'
                    >
                        Features
                    </a>
                    <a
                        href='/pricing'
                        className='hover:text-primary focus:text-primary focus:ring-4 focus:ring-focus/[.12] rounded outline-none'
                    >
                        Pricing
                    </a>
                    <a
                        href='/about'
                        className='hover:text-primary focus:text-primary focus:ring-4 focus:ring-focus/[.12] rounded outline-none'
                    >
                        About us
                    </a>
                    <a
                        href='/contact'
                        className='hover:text-primary focus:text-primary focus:ring-4 focus:ring-focus/[.12] rounded outline-none'
                    >
                        Contact
                    </a>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <div className='flex justify-around w-full'>
                        <a
                            className='w-6 h-6 flex items-center cursor-pointer outline-none focus:ring-4 focus:ring-focus/[.12] rounded'
                            href='#'
                        >
                            <img
                                className='w-full h-full'
                                src='/youtube-line.png'
                                alt='youtube'
                            />
                        </a>
                        <a
                            className='w-6 h-6 flex items-center cursor-pointer outline-none focus:ring-4 focus:ring-focus/[.12] rounded'
                            href='#'
                        >
                            <img
                                className='w-full h-full'
                                src='/instagram-line.png'
                                alt='instagram'
                            />
                        </a>
                        <a
                            className='w-6 h-6 flex items-center cursor-pointer outline-none focus:ring-4 focus:ring-focus/[.12] rounded'
                            href='#'
                        >
                            <img
                                className='w-full h-full'
                                src='/facebook-box-line.png'
                                alt='facebook'
                            />
                        </a>
                        <a
                            className='w-6 h-6 flex items-center cursor-pointer outline-none focus:ring-4 focus:ring-focus/[.12] rounded'
                            href='#'
                        >
                            <img
                                className='w-full h-full'
                                src='/github-line.png'
                                alt='github'
                            />
                        </a>
                        <a
                            className='w-6 h-6 flex items-center cursor-pointer outline-none focus:ring-4 focus:ring-focus/[.12] rounded'
                            href='#'
                        >
                            <img
                                className='w-full h-full'
                                src='/twitter-x-line.png'
                                alt='twitter'
                            />
                        </a>
                    </div>
                    <p className='text-sm text-primary whitespace-nowrap'>
                        © 2024 Abstractly, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
