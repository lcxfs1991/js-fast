/**
 * 观察者模式
 */

class Publisher {
    subscribers = [];
    state = '';
    constructor() {

    }

    addSubscribers(subscriber) {
        this.subscribers.push(subscriber);
    }

    removeSubscribers(subscriber) {
        this.subscribers = this.subscribers.filter((item) => {
            return subscriber !== item ? true : false;
        });
    }

    setState(newState) {
        let oldState = this.state;
        this.state = newState;
        this.subscribers.forEach((subscriber) => {
            subscriber.update(oldState, newState);
        });
    }
}

class Subscribers {
    callback = null;
    constructor(callback) {
        this.callback = callback;
    }

    update(oldState, newState) {
        this.callback && typeof this.callback === 'function' && this.callback(oldState, newState);
    }
}

const publisher = new Publisher();
const subscriber1 = new Subscribers((oldState, newState) => {
    console.log('subscriber1: ', oldState, newState);
});
const subscriber2 = new Subscribers((oldState, newState) => {
    console.log('subscriber2: ', oldState, newState);
});
publisher.addSubscribers(subscriber1);
publisher.addSubscribers(subscriber2);

publisher.setState('hey man!');
publisher.setState('how are you!');
