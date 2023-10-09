interface IEventsMap {
    [event: string]: (() => void)[];
}

export default class EventEmitter {
    _eventsMap: IEventsMap;

    constructor() {
        this._eventsMap = {};
    }

    subscribe(eventName: string, callback: () => void) {
        if (this._eventsMap[eventName]) {
            this._eventsMap[eventName].push(callback);
        } else {
            this._eventsMap[eventName] = [callback];
        }
        return this;
    }

    unsubscribe(eventName: string, callback: () => void) {
        if (this._eventsMap[eventName]) {
            this._eventsMap[eventName] = this._eventsMap[eventName].filter(
                (fn) => fn !== callback
            );
        } else throw new Error("Try to unsubscribe unsubscribed function");
        return this;
    }

    emit(eventName: string) {
        this._eventsMap[eventName].forEach((callback) => {
            callback();
        });
        return this;
    }
}
