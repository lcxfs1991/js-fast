

window.onscroll = throttle(function() {
    console.log(document.body.scrollTop)
}, 1000)

function throttle(fn, delay = 200) {
    let timer = null

    return () => {
        if (timer) {
            return
        }

        timer = setTimeout(() => {
            fn.bind(this)()
            timer = null
        }, delay);
    }
}
