
const ContactSection = () => {
    return (
        <section className="flex flex-col desktop:flex-row desktop:items-center px-3 tablet:px-4 desktop:px-24 py-12 tablet:py-16 desktop:py-24 gap-12 tablet:gap-16 desktop:gap-8">
            <div className="flex flex-col gap-12 flex-1">
                <div className="flex flex-col gap-5">
                    <h3 className="font-semibold text-4xl tablet:text-5xl desktop:text-6xl text-primary">
                        Talk to our team
                    </h3>
                    <p className="text-lg text-secondary tablet:text-xl">
                        We're committed to delivering the support you require to make your experience as smooth as possible.
                    </p>
                </div>
                <ul className="flex flex-col gap-6">
                    <li className="flex items-center gap-3">
                        <img
                            className="w-12 h-12"
                            src="/address.png"
                        />
                        <p className="text-base text-secondary font-medium">
                            123 Maple Street, Springfield, IL, USA
                        </p>
                    </li>
                    <li className="flex items-center gap-3">
                        <img
                            className="w-12 h-12"
                            src="/phone.png"
                        />
                        <p className="text-base text-secondary font-medium">
                            +1 (650) 555-0198
                        </p>
                    </li>
                    <li className="flex items-center gap-3">
                        <img
                            className="w-12 h-12"
                            src="/email.png"
                        />
                        <p className="text-base text-secondary font-medium">
                            hello@abstractly.com
                        </p>
                    </li>
                </ul>
            </div>
            <div className="border border-solid border-primary rounded-lg shadow-lg flex-1">
                <div className="flex flex-col p-4 tablet:p-8 gap-10">
                    <div className="flex flex-col  gap-6">
                        <div className="flex flex-col gap-6 tablet:flex-row tablet:gap-8">
                            <div className="flex flex-col gap-3 flex-1">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-medium text-secondary"
                                    aria-label="name"
                                >Name</label>
                                <input
                                    id="name"
                                    aria-labelledby="name"
                                    placeholder="Your name"
                                    className="w-full rounded px-[14px] py-[10px] border border-solid border-primary bg-primary-hover text-sm placeholder:text-tertiary outline-none focus:border-[#444ce7] outline-none focus:ring-4 focus:ring-focus/[.12]"
                                />
                            </div>
                            <div className="flex flex-col gap-3 flex-1">
                                <label
                                    htmlFor="email"
                                    aria-label="email"
                                    className="text-sm font-medium text-secondary"
                                >Email</label>
                                <input
                                    id="email"
                                    aria-labelledby="email"
                                    placeholder="example@example.com"
                                    className="w-full rounded px-[14px] py-[10px] border border-solid border-primary bg-primary-hover text-sm placeholder:text-tertiary outline-none focus:border-[#444ce7] outline-none focus:ring-4 focus:ring-focus/[.12]"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label
                                htmlFor="message"
                                aria-label="message"
                                className="text-sm font-medium text-secondary"
                            >Message</label>
                            <textarea
                                id="message"
                                aria-labelledby="message"
                                placeholder="Write your message..."
                                className="w-full rounded px-[14px] py-3 h-[108px] border border-solid border-primary bg-primary-hover text-sm placeholder:text-tertiary outline-none focus:border-[#444ce7] outline-none focus:ring-4 focus:ring-focus/[.12]"
                            ></textarea>
                        </div>
                    </div>
                    <button
                        type="button"
                        tabIndex={0}
                        aria-label="submit"
                        className="w-full tablet:w-auto py-[10px] px-[16px] rounded bg-brand-primary text-primary-invert text-center shadow text-sm font-medium cursor-pointer hover:bg-brand-primary-emphasize outline-none focus:bg-brand-primary-emphasize focus:ring-4 focus:ring-focus/[.12]"
                    >
                        Submit
                    </button>
                </div>

            </div>
        </section>
    )
}

export default ContactSection;
