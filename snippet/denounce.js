

window.onscroll = denounce(function() {
    console.log(document.body.scrollTop)
}, 400)


function denounce(fn, deplay = 200) {
    let timer  = null
    let self = this
    return () => {
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            fn.bind(this)()
        }, 200)
    }
}
