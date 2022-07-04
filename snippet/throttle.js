

window.onscroll = throttle(function() {
    console.log(document.body.scrollTop);
}, 1000)

function throttle(fn, delay = 200) {
    let timer = null;

    return (...args) => {
        let self = this;

        if (timer) {
            return;
        }

        timer = setTimeout(() => {
            fn.bind(self)(...args);
            clearTimeout(timer);
            timer = null;
        }, delay);
    }
}
