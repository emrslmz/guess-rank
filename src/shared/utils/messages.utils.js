import Notify from 'handy-notification';

export const showMessage = (e) => {
    let message;
    if (typeof e === 'string') {
        message = e;
    } else {
        const key = Object.keys(e)[0];
        if (key) {
            message = e[key][0].message;
        }
    }
    if (message) {
        Notify({
            value: message,
        });
    }
};