import ContactForm from './ContactForm';

const ContactSection = () => {
    return (
        <section className='flex flex-col desktop:flex-row desktop:items-center px-3 tablet:px-4 desktop:px-24 py-12 tablet:py-16 desktop:py-24 gap-12 tablet:gap-16 desktop:gap-8'>
            <div className='flex flex-col gap-12 flex-1'>
                <div className='flex flex-col gap-5'>
                    <h3 className='font-semibold text-4xl tablet:text-5xl desktop:text-6xl text-primary'>
                        Talk to our team
                    </h3>
                    <p className='text-lg text-secondary tablet:text-xl'>
                        We're committed to delivering the support you require to
                        make your experience as smooth as possible.
                    </p>
                </div>
                <ul className='flex flex-col gap-6'>
                    <li className='flex items-center gap-3'>
                        <img className='w-12 h-12' src='/address.png' />
                        <p className='text-base text-secondary font-medium'>
                            123 Maple Street, Springfield, IL, USA
                        </p>
                    </li>
                    <li className='flex items-center gap-3'>
                        <img className='w-12 h-12' src='/phone.png' />
                        <p className='text-base text-secondary font-medium'>
                            +1 (650) 555-0198
                        </p>
                    </li>
                    <li className='flex items-center gap-3'>
                        <img className='w-12 h-12' src='/email.png' />
                        <p className='text-base text-secondary font-medium'>
                            hello@abstractly.com
                        </p>
                    </li>
                </ul>
            </div>
            <ContactForm />
        </section>
    );
};

export default ContactSection;
