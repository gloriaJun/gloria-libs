import tw from 'twin.macro';

// const animation = 'transition-transform duration-1000 ease-in-out';

export const ToastContainer = tw.div`fixed z-50 w-4/5 bottom-0 mb-3`;

export const ToastContent = tw.div`relative w-full bg-green-300 text-gray-800 rounded-sm items-center mt-2 py-1 px-4`;

export const ToastMessage = tw.p`leading-tight`;
