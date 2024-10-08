const SubscribeSection = () => {
    return (
        <section className='px-3 tablet:px-4 desktop:px-24 py-8 tablet:py-16 desktop:py-24 flex flex-col desktop:flex-row desktop:items-center gap-4 tablet:gap-16 desktop:gap-8'>
            <div className='flex flex-col gap-12'>
                <div className='flex flex-col gap-8'>
                    <h3 className='font-semibold text-3xl tablet:text-5xl text-primary'>
                        Get the finest curated abstracts delivered weekly to
                        your inbox
                    </h3>
                    <ul className='flex flex-col gap-5'>
                        <li className='flex items-center gap-3'>
                            <img
                                src='/check-fill.png'
                                className='w-6 h-6 shrink-0'
                                alt=''
                            />
                            <p className='text-base text-secondary '>
                                Exclusive access to new abstract images and
                                collections
                            </p>
                        </li>
                        <li className='flex items-center gap-3'>
                            <img
                                src='/check-fill.png'
                                className='w-6 h-6 shrink-0'
                                alt=''
                            />
                            <p className='text-base text-secondary '>
                                Unlock special promotions only for subscribers
                            </p>
                        </li>
                        <li className='flex items-center gap-3'>
                            <img
                                src='/check-fill.png'
                                className='w-6 h-6 shrink-0'
                                alt=''
                            />
                            <p className='text-base text-secondary '>
                                Regular doses of artistic inspiration
                            </p>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col tablet:flex-row tablet:items-start gap-4'>
                    <div className='flex flex-col gap-3'>
                        <input
                            className='w-full rounded px-[14px] py-[10px] border border-solid border-primary bg-primary-hover text-sm placeholder:text-tertiary outline-none focus:border-[#444ce7] outline-none focus:ring-4 focus:ring-focus/[.12]'
                            placeholder='Enter your email'
                        />
                        <p className='text-base text-secondary'>
                            We only send you the best! No spam.
                        </p>
                    </div>
                    <button
                        type='button'
                        tabIndex={0}
                        className='w-full tablet:w-auto py-[10px] px-[14px] rounded bg-brand-primary text-primary-invert text-center shadow text-sm font-medium cursor-pointer hover:bg-brand-primary-emphasize outline-none focus:bg-brand-primary-emphasize focus:ring-4 focus:ring-focus/[.12]'
                        aria-label='subscribe'
                    >
                        Subscribe
                    </button>
                </div>
            </div>
            <img
                className='w-full desktop:w-[592px]'
                src='/subscribe.webp'
                alt='subscribe'
                loading='lazy'
            />
        </section>
    );
};

export default SubscribeSection;
