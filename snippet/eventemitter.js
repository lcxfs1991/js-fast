/**
 * 发布订阅模式
 */

const hasOwnProperty = Object.prototype.hasOwnProperty;

class EventEmitter {
    events = {};
    constructor() {

    }

    on(eventName, callback) {
        if (!hasOwnProperty.bind(this.events)(eventName)) {
            this.events[eventName] = [callback];
        } else {
            this.events[eventName].push(callback);
        }
    }

    off(eventName, callback) {
        if (!hasOwnProperty.bind(this.events)(eventName)) {
            return;
        }

        const eventCallbacks = this.events[eventName];
        this.events[eventName] =  eventCallbacks.filter((cb) => {

            return cb === callback ? false : true;
        });
    }

    emit(eventName) {
        if (!hasOwnProperty.bind(this.events)(eventName)) {
            return;
        }

         this.events[eventName].forEach((callback) => {
            callback();
         });
    }
}

const eventEmitter = new EventEmitter();
eventEmitter.on('a', () => {
    console.log('a');
});
eventEmitter.on('a', () => {
    console.log('b');
});

function c() {
    console.log('c');
}
eventEmitter.on('a', c);
eventEmitter.emit('a');

eventEmitter.off('a', c);
eventEmitter.emit('a');