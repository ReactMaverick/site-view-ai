export const isSmallScreen = () => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 900;
};

export const isMobileScreen = () => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 600;
}