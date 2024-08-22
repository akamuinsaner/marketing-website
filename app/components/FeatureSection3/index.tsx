const FeatureSection3 = () => {
    return (
        <section className='px-3 py-12 flex flex-col gap-12 tablet:px-4 tablet:py-16 tablet:gap-16 desktop:px-24 desktop:py-24 desktop:gap-16'>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-3'>
                    <p className='text-base font-semibold text-brand text-center'>
                        Best-in-class support
                    </p>
                    <h3 className='text-3xl tablet:text-5xl desktop:text-5xl font-semibold text-center text-primary'>
                        Convenience and licensing that empowers
                    </h3>
                </div>
                <p className='text-lg tablet:text-xl desktop:tablet:xl max-w-[896px] mx-auto text-secondary text-center'>
                    In a world where storytelling constantly evolves, don't let
                    licensing and poor support hold you down.
                </p>
            </div>
            <div className='flex flex-col-reverse gap-12 desktop:flex-row-reverse desktop:gap-8'>
                <ul className='flex flex-col gap-10'>
                    <li className='flex gap-5 items-start'>
                        <img
                            className='w-12 h-12 shrink-0'
                            src='/featureSection/31.png'
                            alt=''
                        />
                        <div className='py-2.5 flex flex-col gap-2'>
                            <h3 className='text-lg text-primary font-semibold'>
                                Faster downloads
                            </h3>
                            <p className='text-base text-secondary'>
                                Our robust servers are primed to deliver the
                                highest resolution images swiftly, ensuring a
                                smooth download experience
                            </p>
                        </div>
                    </li>
                    <li className='flex gap-5 items-start'>
                        <img
                            className='w-12 h-12 shrink-0'
                            src='/featureSection/32.png'
                            alt=''
                        />
                        <div className='py-2.5 flex flex-col gap-2'>
                            <h3 className='text-lg text-primary font-semibold'>
                                Convenience for teams
                            </h3>
                            <p className='text-base text-secondary'>
                                Your single account can accommodate multiple
                                users simultaneously downloading without any
                                disruptions, streamlining teamwork and
                                productivity.
                            </p>
                        </div>
                    </li>
                    <li className='flex gap-5 items-start'>
                        <img
                            className='w-12 h-12 shrink-0'
                            src='/featureSection/33.png'
                            alt=''
                        />
                        <div className='py-2.5 flex flex-col gap-2'>
                            <h3 className='text-lg text-primary font-semibold'>
                                Royalty-free licensing
                            </h3>
                            <p className='text-base text-secondary'>
                                Our straightforward, royalty-free licensing
                                means your chosen images are yours to innovate
                                with, without the hassle of negotiating usage
                                rights for every new project.
                            </p>
                        </div>
                    </li>
                </ul>
                <img
                    src='/featureSection/34.webp'
                    className='w-full rounded-lg desktop:w-[592px]'
                    loading='lazy'
                    alt='feature'
                />
            </div>
        </section>
    );
};

export default FeatureSection3;
