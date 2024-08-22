'use client';
import { useEffect, useState } from 'react';

type TQA = {
    id: number;
    question: string;
    answer: string;
};

const QAList: TQA[] = [
    {
        id: 1,
        question: 'What types of images are available on your platform?',
        answer: 'Our platform offers a diverse range of abstract images to suit various preferences and needs. From vibrant geometric patterns to soothing landscapes, we strive to provide a wide selection to cater to different tastes.',
    },
    {
        id: 2,
        question: 'How can I access and download images from your platform?',
        answer: 'Accessing and downloading images from our platform is simple. Upon signing up and logging in, users can browse through our curated collection and download their chosen images directly to their devices with just a few clicks.',
    },
    {
        id: 3,
        question:
            'Do you offer free images, or is there a subscription required?',
        answer: 'We provide both free and premium images on our platform. Users can explore a selection of free images without any subscription. For access to our entire library and additional features, we offer subscription plans tailored to different user needs.',
    },
    {
        id: 4,
        question: 'What payment methods do you accept for subscriptions?',
        answer: 'We accept a variety of payment methods, including credit/debit cards and online payment gateways, to make the subscription process convenient for our users.',
    },
    {
        id: 5,
        question: 'Can I cancel or modify my subscription at any time?',
        answer: 'Yes, absolutely. You have the flexibility to cancel or modify your subscription at any time through your account settings. Changes will take effect immediately, ensuring you have full control over your subscription preferences.',
    },
    {
        id: 6,
        question: 'How frequently do you update your image collection?',
        answer: "We regularly update our image collection with fresh and captivating content to keep our users inspired and engaged. New images are added consistently to ensure there's always something new to discover on our platform.",
    },
];

const FAQSection = () => {
    const [qaList, setQAList] = useState<TQA[]>([]);
    const [openQA, setOpenQA] = useState<number[]>([]);

    useEffect(() => {
        setQAList(QAList);
    }, []);

    useEffect(() => {
        if (qaList) setOpenQA(qaList.map(qa => qa.id));
    }, [qaList]);

    const toggleOpening = (id: number) => {
        if (openQA.includes(id)) {
            setOpenQA(openQA.filter(item => item !== id));
        } else {
            setOpenQA([...openQA, id]);
        }
    };

    return (
        <section className='flex flex-col gap-12 tablet:gap-16 desktop:gap-16 px-3 tablet:px-4 desktop:px-24 py-12 tablet:py-16 desktop:py-24'>
            <div className='flex flex-col gap-5 text-center'>
                <h3 className='text-3xl text-primary font-semibold tablet:text-5xl'>
                    Frequently asked questions
                </h3>
                <p className='text-lg text-secondary tablet:text-xl'>
                    Choose any questions you need
                </p>
            </div>
            <div>
                <ul className='flex flex-col'>
                    {qaList.map(qa => {
                        const isOpening = openQA.includes(qa.id);
                        return (
                            <li
                                key={qa.id}
                                className='flex gap-4 py-7 border-b border-solid border-primary first:pt-0 last:border-none'
                            >
                                <div className='flex flex-col flex-1'>
                                    <h3 className='text-lg font-medium text-primary'>
                                        {qa.question}
                                    </h3>
                                    <p
                                        id={`${qa.id}`}
                                        role='region'
                                        hidden={!isOpening}
                                        className='text-base text-secondary mt-2'
                                    >
                                        {qa.answer}
                                    </p>
                                </div>
                                <button
                                    type='button'
                                    tabIndex={0}
                                    className='outline-none w-6 h-6 shrink-0 cursor-pointer focus:ring-4 focus:ring-focus/[.12] rounded'
                                    onClick={() => toggleOpening(qa.id)}
                                    aria-expanded={isOpening}
                                    aria-controls={`${qa.id}`}
                                    aria-label={qa.question}
                                >
                                    <img
                                        className='w-full h-full'
                                        src={
                                            isOpening
                                                ? '/indeterminate-circle-line.png'
                                                : '/add-circle-line.png'
                                        }
                                        alt=''
                                    />
                                </button>
                            </li>
                        );
                    })}
                </ul>
                <div className='flex items-center flex-col tablet:flex-row p-4 tablet:p-8 gap-4 border border-solid border-primary rounded-lg shadow-md'>
                    <div className='flex flex-col gap-2 flex-1'>
                        <h3 className='font-semibold text-primary text-xl'>
                            Can’t find the answer you’re looking for?
                        </h3>
                        <p className='text-base text-secondary'>
                            Reach out to our{' '}
                            <a className='text-brand' href='#'>
                                customer support
                            </a>{' '}
                            team.
                        </p>
                    </div>
                    <a
                        role='button'
                        href='#'
                        className='w-full tablet:w-auto py-3 px-5 rounded bg-brand-primary text-primary-invert text-center shadow text-base font-medium cursor-pointer hover:bg-brand-primary-emphasize outline-none focus:bg-brand-primary-emphasize focus:ring-4 focus:ring-focus/[.12]'
                    >
                        Get in touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
