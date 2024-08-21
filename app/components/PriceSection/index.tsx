const PriceSection = () => {
    return (
        <section className="px-3 py-12 flex flex-col gap-12 tablet:px-4 tablet:py-16 tablet:gap-16 desktop:px-24 desktop:py-24 desktop:gap-16">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3">
                        <p className="text-base font-semibold text-brand text-center">
                            Pricing Tiers
                        </p>
                        <h3 className="text-3xl tablet:text-5xl desktop:text-5xl font-semibold text-center text-primary">
                            Fit for all your needs
                        </h3>
                    </div>
                    <p className="text-lg tablet:text-xl desktop:tablet:xl max-w-[896px] mx-auto text-secondary text-center">
                        Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out.
                    </p>
                </div>
                <div className="flex items-center w-full mx-auto justify-center gap-4 tablet:gap-8">
                    <a
                        className="text-center w-[150px] h-[44px] leading-[44px] text-base font-medium text-primary border border-solid border-primary shadow bg-primary hover:bg-primary-hover cursor-pointer"
                    >Monthly</a>
                    <a
                        className="text-center w-[150px] h-[44px] leading-[44px] text-base font-medium text-primary cursor-pointer"
                    >Annually</a>
                </div>
            </div>
            <ul className="flex flex-col gap-8 desktop:flex-row">
                <li className="rounded-lg border flex flex-col border-solid border-primary shadow-sm tablet:min-h-[532px] flex-1 overflow-hidden">
                    <div className="flex flex-col gap-8 p-4 tablet:p-8 flex-1">
                        <div className="flex flex-col gap-2">
                            <h6 className="text-2xl text-primary font-semibold">Basic Plan</h6>
                            <p className="text-base text-secondary">
                                Access to a curated selection of abstract images
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-end">
                                <span className="font-semibold text-5xl text-primary">$9.99</span>
                                <span className="text-base text-primary ">/ month</span>
                            </div>
                            <p className="text-base text-secondary">Billed monthly</p>
                        </div>
                        <ul className="flex flex-col gap-5">
                            <li className="flex items-center gap-3">
                                <img src="/check-fill.png" className="w-6 h-6 shrink-0" />
                                <p className="text-base text-secondary ">Standard quality images</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <img src="/check-fill.png" className="w-6 h-6 shrink-0" />
                                <p className="text-base text-secondary ">Limited to personal use</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <img src="/check-fill.png" className="w-6 h-6 shrink-0" />
                                <p className="text-base text-secondary ">Email support</p>
                            </li>
                        </ul>
                        <a className="text-center rounded border border-solid border-primary shadow w-full py-3 text-base text-primary font-medium bg-primary hover:bg-primary-hover cursor-pointer tablet:mt-auto">
                            Buy now
                        </a>
                    </div>
                </li>
                <li className="rounded-lg flex flex-col border border-solid border-brand-solid shadow-2xl tablet:min-h-[532px] flex-1 overflow-hidden">
                    <div
                        className="w-full text-center py-4 bg-brand-subtle font-bold text-brand text-xl"
                    >Most Popular</div>
                    <div className="flex flex-col p-4 gap-8 tablet:p-8">
                        <div className="flex flex-col gap-2">
                            <h6 className="text-2xl text-primary font-semibold">Standard Plan</h6>
                            <p className="text-base text-secondary">
                                Next-level Integrations, priced economically
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-end text-brand">
                                <span className="font-semibold text-5xl">$19.99</span>
                                <span className="text-base">/ month</span>
                            </div>
                            <p className="text-base text-secondary">Prices in USD</p>
                        </div>
                        <ul className="flex flex-col gap-5">
                            <li className="flex items-center gap-3">
                                <img src="/check-fill.png" className="w-6 h-6 shrink-0" />
                                <p className="text-base text-secondary ">Expanded library with more diverse abstract images</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <img src="/check-fill.png" className="w-6 h-6 shrink-0" />
                                <p className="text-base text-secondary ">High-resolution images available</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <img src="/check-fill.png" className="w-6 h-6 shrink-0" />
                                <p className="text-base text-secondary ">Suitable for commercial use</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <img src="/check-fill.png" className="w-6 h-6 shrink-0" />
                                <p className="text-base text-secondary ">Priority email support</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <img src="/check-fill.png" className="w-6 h-6 shrink-0" />
                                <p className="text-base text-secondary ">Advanced analytics</p>
                            </li>
                        </ul>
                        <a className="text-center rounded shadow w-full py-3 text-base text-primary-invert font-medium bg-brand-primary hover:bg-brand-primary-emphasize cursor-pointer tablet:mt-auto">
                            Buy now
                        </a>
                    </div>

                </li>
                <li className="rounded-lg flex flex-col border border-solid border-primary shadow-sm tablet:min-h-[532px] flex-1 overflow-hidden">
                    <div className="flex flex-col gap-8 p-4 tablet:p-8 flex-1">
                        <div className="flex flex-col gap-2">
                            <h6 className="text-2xl text-primary font-semibold">Premium Plan</h6>
                            <p className="text-base text-secondary">
                                Experience limitless living for power users
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-end">
                                <span className="font-semibold text-5xl text-primary">$29.99</span>
                                <span className="text-base text-primary ">/ month</span>
                            </div>
                            <p className="text-base text-secondary">Billed monthly</p>
                        </div>
                        <ul className="flex flex-col gap-5">
                            <li className="flex items-center gap-3">
                                <img src="/check-fill.png" className="w-6 h-6 shrink-0" />
                                <p className="text-base text-secondary ">Full access to the entire image library, including exclusive content</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <img src="/check-fill.png" className="w-6 h-6 shrink-0" />
                                <p className="text-base text-secondary ">Highest quality images, including premium collections</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <img src="/check-fill.png" className="w-6 h-6 shrink-0" />
                                <p className="text-base text-secondary ">Commercial and resale rights</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <img src="/check-fill.png" className="w-6 h-6 shrink-0" />
                                <p className="text-base text-secondary ">Dedicated customer support line</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <img src="/check-fill.png" className="w-6 h-6 shrink-0" />
                                <p className="text-base text-secondary ">24/7 support response time</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <img src="/check-fill.png" className="w-6 h-6 shrink-0" />
                                <p className="text-base text-secondary ">Advanced analytics and insights</p>
                            </li>
                        </ul>
                        <a className="text-center rounded border border-solid border-primary shadow w-full py-3 text-base text-primary font-medium bg-primary hover:bg-primary-hover cursor-pointer tablet:mt-auto">
                            Buy now
                        </a>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default PriceSection;
