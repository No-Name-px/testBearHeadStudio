export default function debounce(fn: (...args: any) => void, ms: number) {
    let lastArgs: any = null;
    let isClosed = false;
    let isCallOverflow = false;

    return (...args: any) => {
        lastArgs = args;
        if (!isClosed) {
            isClosed = true;
            fn(...lastArgs);
            const timer = setInterval(() => {
                isClosed = false;
                if (isCallOverflow) {
                    isCallOverflow = false;
                    isClosed = true;
                    fn(...lastArgs);
                } else clearInterval(timer);
            }, ms);
        } else {
            isCallOverflow = true;
        }
    };
}
