export type RTMessageStyles = {
    box: {
        base: string;
        show: string;
    };
};

export const styles: RTMessageStyles = {
    box: {
        base: `bg-main text-mainText opacity-0 -top-20  transition-all left-1/2
                 rounded-full py-2 px-3 text-base fixed shadow-lg -translate-x-1/2 z-50 flex items-center
                 flex items-center gap-3 w-full max-w-[343px] tablet:max-w-[565px] tablet:w-auto p-1 pr-[10px] bg-error-subtle
                 `,
        show: 'opacity-100 top-10',
    },
};
