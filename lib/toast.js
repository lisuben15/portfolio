import { toast, Slide } from "react-toastify";

export const defaultToastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Slide,
};

/**
 * @typedef {'success' | 'error' | 'info' | 'warning' | 'default'} ToastType
 */

/**
 * Display toast
 *
 * @param {ToastType} type
 * @param {import('react-toastify').ToastContent} content
 * @param {Partial<import('react-toastify').ToastOptions>} [options={}]
 * @return {import('react-toastify').Id}
 */
export const showToast = (type, content, options = {}) => {
    const optionsToApply = { ...defaultToastOptions, ...options };

    switch (type) {
        case "success":
            return toast.success(content, optionsToApply);
        case "error":
            return toast.error(content, optionsToApply);
        case "info":
            return toast.info(content, optionsToApply);
        case "warning":
            return toast.warn(content, optionsToApply);
        case "default":
            return toast(content, optionsToApply);
        default:
            return toast(content, optionsToApply);
    }
};
