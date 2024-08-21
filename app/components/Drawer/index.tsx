'use client';
import { createPortal } from 'react-dom';
import { useState, useLayoutEffect, useEffect, ReactNode, useMemo } from 'react';
import createWrapperAndAppendToBody from '@/app/utils/createWrapperAndAppendToBody';
import { styles } from './styles';
import { twMerge } from 'tailwind-merge';

export type TDrawer = {
    id?: string;
    open: boolean;
    children?: ReactNode;
    className?: string;
}

const Drawer = ({
    id,
    open,
    children,
    className
}: TDrawer) => {
    const [wrapper, setWrapper] = useState<HTMLDivElement | null>(null);
    const [classes, setClasses] = useState<string>(styles.base);

    const close = () => {
        setClasses(styles.base);
    }

    const onTransitionEnd = () => {
        if (!open) setWrapper(null);
    }

    const finalClassName = useMemo(() => {
        return twMerge(classes, className);
    }, [className, classes]);

    useEffect(() => {
        if (wrapper) setClasses(twMerge(styles.base, styles.open))
    }, [wrapper]);


    useLayoutEffect(() => {
        if (open) {
            const wrapper = createWrapperAndAppendToBody();
            setWrapper(wrapper);
        } else {
            close();
        }
    }, [open]);

    if (!wrapper) return null;

    return createPortal(
        <div
            className={styles.mask}
        >
            <div
                id={id}
                className={finalClassName}
                onTransitionEnd={onTransitionEnd}
            >
                {children}
            </div>
        </div>,
        wrapper,
    )
}

export default Drawer;