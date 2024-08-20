const FeatureSection2 = () => {
    return (
        <section className="px-3 py-12 flex flex-col gap-12 tablet:px-4 tablet:py-16 tablet:gap-16 desktop:px-24 desktop:py-24 desktop:gap-16">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    <p className="text-base font-semibold text-brand text-center">
                        High quality images
                    </p>
                    <h3 className="text-3xl tablet:text-5xl desktop:text-5xl font-semibold text-center text-primary">
                        For designers, by designers
                    </h3>
                </div>
                <p className="text-lg tablet:text-xl desktop:tablet:xl max-w-[896px] mx-auto text-secondary text-center">
                    Unleash boundless creativity with a large repository of images optimized for designers
                </p>
            </div>
            <div className="flex flex-col gap-12 desktop:flex-row desktop:items-center desktop:gap-8">
                <ul className="flex flex-col gap-10">
                    <li className="flex gap-5 items-start">
                        <img
                            className="w-12 h-12 shrink-0"
                            src="/featureSection/21.png"
                        />
                        <div className="py-2.5 flex flex-col gap-2">
                            <h6 className="text-lg text-primary font-semibold">5K resolution support</h6>
                            <p className="text-base text-secondary">
                                All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-5 items-start">
                        <img
                            className="w-12 h-12 shrink-0"
                            src="/featureSection/22.png"
                        />
                        <div className="py-2.5 flex flex-col gap-2">
                            <h6 className="text-lg text-primary font-semibold">From water to glass</h6>
                            <p className="text-base text-secondary">
                                We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles including 3D and vector.
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-5 items-start">
                        <img
                            className="w-12 h-12 shrink-0"
                            src="/featureSection/23.png"
                        />
                        <div className="py-2.5 flex flex-col gap-2">
                            <h6 className="text-lg text-primary font-semibold">Portrait or landscape</h6>
                            <p className="text-base text-secondary">
                                Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories.
                            </p>
                        </div>
                    </li>
                </ul>
                <img
                    src="/featureSection/24.png"
                    className="w-full rounded-lg desktop:w-[592px]"
                />
            </div>
        </section>
    )
}

export default FeatureSection2;