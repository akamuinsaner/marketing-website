const LogoSection = () => {
    return (
        <section className='py-12 tablet:py-16 desktop:py-24'>
            <div className='flex flex-col gap-8 px-4 desktop:px-24'>
                <p className='text-center text-base font-medium text-secondary'>
                    Used by teams that you love
                </p>
                <ul className='overflow-x-scroll flex w-[218px] mx-auto scroll-smooth snap-x snap-mandatory scrollbar-none mobile:w-full'>
                    {new Array(8).fill(0).map((item, index) => {
                        return (
                            <li
                                key={index}
                                className='w-[218px] shrink-0 snap-center'
                            >
                                <img
                                    alt=''
                                    src={`/logoSection/${index + 1}.png`}
                                    className='w-[218px] h-[96px]'
                                    draggable={false}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default LogoSection;
