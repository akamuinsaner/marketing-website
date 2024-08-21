const Footer = () => {
    return (
        <footer className="px-8 py-12 tablet:py-16 desktop:py-24">
            <div className="flex flex-col gap-8 w-[280px] mx-auto">
                <div className="flex font-medium justify-between text-sm text-secondary">
                    <a>Features</a>
                    <a>Pricing</a>
                    <a>About us</a>
                    <a>Contact</a>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <div className="flex justify-around w-full">
                        <a className="w-6 h-6">
                            <img
                                className="w-full h-full"
                                src="/youtube-line.png"
                            />
                        </a>
                        <a className="w-6 h-6">
                            <img
                                className="w-full h-full"
                                src="/instagram-line.png"
                            />
                        </a>
                        <a className="w-6 h-6">
                            <img
                                className="w-full h-full"
                                src="/facebook-box-line.png"
                            />
                        </a>
                        <a className="w-6 h-6">
                            <img
                                className="w-full h-full"
                                src="/github-line.png"
                            />
                        </a>
                        <a className="w-6 h-6">
                            <img
                                className="w-full h-full"
                                src="/twitter-x-line.png"
                            />
                        </a>
                    </div>
                    <p className="text-sm text-primary whitespace-nowrap">
                        © 2024 Abstractly, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;