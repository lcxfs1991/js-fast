

window.onscroll = denounce(function() {
    console.log(document.body.scrollTop)
}, 400)


function denounce(fn, deplay = 200) {
    let timer  = null
    return (...newArgs) => {
        // 本示例指向的是 window
        let self = this
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            fn.bind(self)(...newArgs);
        }, 200)
    }
}
