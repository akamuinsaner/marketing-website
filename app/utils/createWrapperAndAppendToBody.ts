export const DRAWER_WRAPPER_ID = 'drawer-id';

const createWrapperAndAppendToBody = (): HTMLDivElement => {
    let wrapper: HTMLDivElement = document.getElementById(
        'WRAPPER_ID',
    ) as HTMLDivElement;
    if (wrapper) return wrapper;
    wrapper = document.createElement('div');
    wrapper.setAttribute('id', DRAWER_WRAPPER_ID);
    document.body.appendChild(wrapper);
    return wrapper;
};

export default createWrapperAndAppendToBody;
