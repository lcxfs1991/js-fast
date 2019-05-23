// Reference http://selfcoding.cn/2017/04/09/%E5%AE%9E%E7%8E%B0%E9%93%BE%E5%BC%8FLazyMan/

let a = {
    isSleeping: false,
    q: [],

    work() {
        this.q.push({
            type: 'work',
            data: 'I am working'
        })
        this._start()
        return this
    },

    sleep(time) {
        this.q.push({
            type: 'sleep',
            time,
            data: `Wait for ${time} seconds`
        })
        this._start()
        return this
    },

    lunch() {
        this.q.push({
            type: 'lunch',
            data: 'I am having lunch'
        })
        this._start()
        return this
    },

    _start() {
        if (this.q.length && !this.isSleeping) {
            let task = this.q[0]
            if (task.type !== 'sleep') {
                console.log(task.data);
                this.q.splice(0, 1);

                // 如何还有任务，则继续回调执行
                if (this.q.length) {
                    this._start()
                }
            }
            else if (task.type === 'sleep') {
                this.isSleeping = true
                console.log(task.data)
                this.q.splice(0, 1)
                setTimeout(() => {
                    this.isSleeping = false
                    this._start()
                }, task.time * 1000)
            }
        }
    }
}

// a.work().sleep(1).lunch();

a.work().sleep(0.5).sleep(1).lunch().lunch().work();
