
const SubscribeSection = () => {
    return (
        <section className="px-3 tablet:px-4 desktop:px-24 py-8 tablet:py-16 desktop:py-24 flex flex-col desktop:flex-row desktop:items-center gap-4 tablet:gap-16 desktop:gap-8">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-8">
                    <h6 className="font-semibold text-3xl tablet:text-5xl text-primary">
                        Get the finest curated abstracts delivered weekly to your inbox
                    </h6>
                    <ul className="flex flex-col gap-5">
                        <li className="flex items-center gap-3">
                            <img src="/check-fill.png" className="w-6 h-6 shrink-0" />
                            <p className="text-base text-secondary ">Exclusive access to new abstract images and collections</p>
                        </li>
                        <li className="flex items-center gap-3">
                            <img src="/check-fill.png" className="w-6 h-6 shrink-0" />
                            <p className="text-base text-secondary ">Unlock special promotions only for subscribers</p>
                        </li>
                        <li className="flex items-center gap-3">
                            <img src="/check-fill.png" className="w-6 h-6 shrink-0" />
                            <p className="text-base text-secondary ">Regular doses of artistic inspiration</p>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col tablet:flex-row tablet:items-start gap-4">
                    <div className="flex flex-col gap-3">
                        <input
                            className="w-full rounded px-[14px] py-[10px] border border-solid border-primary bg-primary-hover text-sm placeholder:text-tertiary outline-none"
                            placeholder="Enter your email"
                        />
                        <p
                            className="text-base text-secondary"
                        >
                            We only send you the best! No spam.
                        </p>
                    </div>
                    <a className="w-full tablet:w-auto py-[10px] px-[14px] rounded bg-brand-primary text-primary-invert text-center shadow text-sm font-medium cursor-pointer hover:bg-brand-primary-emphasize">
                        Subscribe
                    </a>
                </div>
            </div>
            <img
                className="w-full desktop:w-[592px]"
                src="/subscribe.png"
            />
        </section>
    )
}

export default SubscribeSection;
