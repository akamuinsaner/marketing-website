import {
    cloneElement,
    CSSProperties,
    ReactNode,
    SyntheticEvent,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { createPortal } from 'react-dom';
import createWrapperAndAppendToBody from '@/app/utils/createWrapperAndAppendToBody';
import { styles } from './styles';
import { twMerge } from 'tailwind-merge';

export type RTMessageType = 'success' | 'info' | 'warning' | 'danger';

export type RTMessageProps = {
    content?: string;
    type?: RTMessageType;
    className?: string;
    style?: CSSProperties;
    duration?: number;
    onClose?: () => void;
};

class message {
    static info: RTMessageMethod;
    static warning: RTMessageMethod;
    static success: RTMessageMethod;
    static danger: RTMessageMethod;
}

const Message = () => {
    const baseClassName = twMerge(styles.box.base);
    const showClassName = twMerge(styles.box.base, styles.box.show);
    const [wrapper, setWrapper] = useState<HTMLElement>(null);
    const [boxClassName, setBoxClassName] = useState<string>(baseClassName);
    const [messageInfo, setMessageInfo] = useState<RTMessageProps>(null);

    const setOpen = () => {
        setWrapper(createWrapperAndAppendToBody());
    };

    const onTransitionEnd = (e: SyntheticEvent) => {
        const target = e.currentTarget;
        if (!target.className.includes(styles.box.show)) {
            setWrapper(null);
            setMessageInfo(null);
            if (messageInfo?.onClose) messageInfo.onClose();
        }
    };

    const resetClassName = () => {
        setBoxClassName(baseClassName);
    };

    useEffect(() => {
        if (wrapper) setBoxClassName(showClassName);
    }, [wrapper]);

    useEffect(() => {
        if (!messageInfo) return;
        const duration = messageInfo?.duration || 3000;
        setTimeout(() => {
            resetClassName();
        }, duration);
    }, [messageInfo]);

    const generateMessage = (type: RTMessageType) => {
        return (content: string, params = {}) => {
            if (wrapper) return;
            setOpen();
            setMessageInfo({
                content,
                ...params,
                type,
            });
        };
    };
    useEffect(() => {
        message.success = generateMessage('success');
        message.info = generateMessage('info');
        message.warning = generateMessage('warning');
        message.danger = generateMessage('danger');
    });
    if (!wrapper) return null;

    return createPortal(
        <div className={boxClassName} onTransitionEnd={onTransitionEnd}>
            <div className='px-[10px] py-0.5 bg-primary rounded-full shadow text-sm text-error-emphasize font-medium'>
                Error
            </div>
            <div className='text-sm text-error font-medium whitespace-pre-line flex-1'>
                {messageInfo?.content}
            </div>
        </div>,
        wrapper,
    );
};

type RTMessageMethod = (
    content: string,
    option?: Exclude<RTMessageProps, 'content'>,
) => void;

const MessageProvider = ({ children }: { children: any }) => {
    return (
        <>
            {children}
            <Message />
        </>
    );
};

export { message, MessageProvider };
