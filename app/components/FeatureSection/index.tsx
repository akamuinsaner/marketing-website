const FEATURES = [
    {
        icon: '/featureSection/1.png',
        title: 'Infinite Download',
        desc: "Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more."
    },
    {
        icon: '/featureSection/2.png',
        title: 'Purely Handcrafted',
        desc: " No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust."
    },
    {
        icon: '/featureSection/3.png',
        title: 'All Are Under licensed',
        desc: "The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper)."
    },
    {
        icon: '/featureSection/4.png',
        title: 'Cancel Anytime',
        desc: "Subscribe at your own pace, and cancel when you feel it's enough."
    },
    {
        icon: '/featureSection/5.png',
        title: 'Empowering For Team',
        desc: "We support multiple seats at once, requiring only a single payment."
    },
    {
        icon: '/featureSection/6.png',
        title: 'No Limitations',
        desc: "Use as many as you want, from Dribbble presentations to PowerPoint presentations."
    },
]

const FeatureSection = () => {
    return (
        <section className="flex flex-col gap-12 tablet:gap-16 px-3 py-12 tablet:px-4 tablet:py-16 desktop:px-24 desktop:py-24">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    <p className="text-base font-semibold text-brand text-center">
                        Premium abstract images
                    </p>
                    <h3 className="text-3xl tablet:text-5xl desktop:text-5xl font-semibold text-center text-primary">Easy access to top quality images</h3>
                </div>
                <p className="text-lg tablet:text-xl desktop:tablet:xl max-w-[896px] mx-auto text-secondary text-center">
                    In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentation excellence.
                </p>
            </div>
            <ul className="grid gap-x-8 gap-y-8 desktop:gap-y-12 grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3">
                {FEATURES.map((feature, index) => {
                    return (
                        <li className="flex flex-col items-center">
                            <img
                                src={feature.icon}
                                className="w-12 h-12 mb-5"
                            />
                            <h6 className="text-xl text-primary font-semibold mb-2">{feature.title}</h6>
                            <p className="text-base text-center text-secondary">{feature.desc}</p>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default FeatureSection;