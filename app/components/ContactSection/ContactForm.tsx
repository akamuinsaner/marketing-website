'use client';

import { message as Message, MessageProvider } from '../Message';
import { FormEventHandler, useState } from 'react';

type TErrors = {
    name?: string;
    email?: string;
    message?: string;
};

const ContactForm = () => {
    const [errors, setErrors] = useState<TErrors>({});
    const [success, setSuccess] = useState<boolean>(false);

    const onSubmit: FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();
        const name = (e.target as any)[0].value;
        const email = (e.target as any)[1].value;
        const message = (e.target as any)[2].value;
        let errorCount = 0;
        let curErrors: TErrors = {};
        if (!name) {
            curErrors.name = 'name is required';
            errorCount += 1;
        } else {
            curErrors.name = '';
        }
        if (!email) {
            curErrors.email = 'email is required';
            errorCount += 1;
        } else if (!/^\w+(-+.\w+)*@\w+(-.\w+)*.\w+(-.\w+)*$/.test(email)) {
            curErrors.email = 'invalid email format';
            errorCount += 1;
        } else {
            curErrors.email = '';
        }
        if (!message) {
            curErrors.message = 'message is required';
            errorCount += 1;
        } else {
            curErrors.message = '';
        }
        if (errorCount) {
            setErrors(curErrors);
            return;
        }
        setErrors({});
        new Promise((resolve, reject) => {
            const random = Math.random();
            if (random < 0.5) resolve(true);
            else reject('qwewqr eqweqwe wqewqq wewqreq weqwew');
        }).then(
            () => {
                (e.target as any).reset();
                setSuccess(true);
            },
            reason => {
                Message.danger(reason);
                setSuccess(false);
            },
        );
    };

    return (
        <MessageProvider>
            <div
                className='border border-solid border-primary rounded-lg shadow-lg flex-1'
                hidden={success}
            >
                <form
                    className='flex flex-col p-4 tablet:p-8 gap-10'
                    aria-label='Contact information'
                    onSubmit={onSubmit}
                >
                    <div className='flex flex-col  gap-6'>
                        <div className='flex flex-col gap-6 tablet:flex-row tablet:gap-8'>
                            <div className='flex flex-col gap-[6px] flex-1'>
                                <label
                                    htmlFor='name'
                                    className='text-sm font-medium text-secondary'
                                    aria-label='name'
                                >
                                    Name
                                </label>
                                <input
                                    id='name'
                                    name='name'
                                    aria-labelledby='name'
                                    placeholder='Your name'
                                    className='w-full rounded px-[14px] py-[10px] border border-solid border-primary bg-primary-hover text-sm placeholder:text-tertiary outline-none focus:border-[#444ce7] outline-none focus:ring-4 focus:ring-focus/[.12]'
                                />
                                <p
                                    className='text-error text-sm'
                                    hidden={!errors.name}
                                >
                                    {errors.name}
                                </p>
                            </div>
                            <div className='flex flex-col gap-[6px] flex-1'>
                                <label
                                    htmlFor='email'
                                    aria-label='email'
                                    className='text-sm font-medium text-secondary'
                                >
                                    Email
                                </label>
                                <input
                                    id='email'
                                    aria-labelledby='email'
                                    name='email'
                                    placeholder='example@example.com'
                                    className='w-full rounded px-[14px] py-[10px] border border-solid border-primary bg-primary-hover text-sm placeholder:text-tertiary outline-none focus:border-[#444ce7] outline-none focus:ring-4 focus:ring-focus/[.12]'
                                />
                                <p
                                    className='text-error text-sm'
                                    hidden={!errors.email}
                                >
                                    {errors.email}
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[6px]'>
                            <label
                                htmlFor='message'
                                aria-label='message'
                                className='text-sm font-medium text-secondary'
                            >
                                Message
                            </label>
                            <textarea
                                id='message'
                                aria-labelledby='message'
                                name='message'
                                placeholder='Write your message...'
                                className='w-full rounded px-[14px] py-3 h-[108px] border border-solid border-primary bg-primary-hover text-sm placeholder:text-tertiary outline-none focus:border-[#444ce7] outline-none focus:ring-4 focus:ring-focus/[.12]'
                            ></textarea>
                            <p
                                className='text-error text-sm'
                                hidden={!errors.message}
                            >
                                {errors.message}
                            </p>
                        </div>
                    </div>
                    <button
                        type='submit'
                        tabIndex={0}
                        aria-label='submit'
                        className='w-full tablet:w-auto py-[10px] px-[16px] rounded bg-brand-primary text-primary-invert text-center shadow text-sm font-medium cursor-pointer hover:bg-brand-primary-emphasize outline-none focus:bg-brand-primary-emphasize focus:ring-4 focus:ring-focus/[.12]'
                    >
                        Submit
                    </button>
                </form>
            </div>
            {success ? (
                <div className='flex flex-col border border-solid border-primary rounded-lg shadow-lg desktop:flex-1 h-[398px] justify-center'>
                    <div className='flex flex-col gap-16 px-4 items-center max-w-[370px] mx-auto'>
                        <div className='flex flex-col gap-6 items-center'>
                            <img
                                className='w-16 h-16'
                                alt=''
                                src='/success.png'
                            />
                            <p className='text-center text-xl text-primary'>
                                Submission successful! We will get back to you
                                in 3-5 days via email.
                            </p>
                        </div>
                        <button
                            type='button'
                            aria-label='Send another message'
                            className='outline-none py-[10px] px-4 bg-primary rounded border border-primary border-solid text-base font-medium text-primary hover:bg-primary-hover focus:bg-primary-hover focus:ring-4 focus:ring-focus/[.12]'
                            onClick={() => setSuccess(false)}
                        >
                            Send another message
                        </button>
                    </div>
                </div>
            ) : null}
        </MessageProvider>
    );
};

export default ContactForm;
