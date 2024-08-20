import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="flex flex-col desktop:flex-row desktop:items-center gap-12 tablet:gap-8 px-3 tablet:px-4 desktop:px-24 py-12 tablet:py-16 desktop:py-24">
            <div className="flex flex-col gap-8 tablet:gap-16">
                <div className="flex flex-col gap-4 tablet:gap-6">
                    <h4 className="text-4xl tablet:text-5xl desktop:text-6xl font-semibold text-primary">Well crafted abstract gradient</h4>
                    <p className="text-lg tablet:text-xl text-secondary">High quality abstract images for your projects, wallpaper and presentations.</p>
                </div>
                <div className="flex items-center gap-4">
                    <a className="w-[152px] tablet:w-[213px] desktop:w-[175px] h-[48px] tablet:h-[60px] leading-[48px] tablet:leading-[60px] desktop:leading-[60px] text-center bg-primary hover:bg-primary-hover border border-solid border-primary shadow text-primary text-base tablet:text-lg desktop:text-lg text-medium cursor-pointer rounded">
                       Learn more 
                    </a>
                    <a className="w-[152px] tablet:w-[213px] desktop:w-[175px] h-[48px] tablet:h-[60px] leading-[48px] tablet:leading-[60px] desktop:leading-[60px] text-center bg-brand-primary hover:bg-brand-primary-emphasize shadow text-primary-invert text-base tablet:text-lg desktop:text-lg text-medium cursor-pointer rounded">
                        See pricing
                    </a>
                </div>
            </div>
            <img
                alt="hero"
                src="/hero-image.png"
                className="w-full desktop:w-[670px]"
            />
        </section>
    )
}

export default HeroSection;