#Реализовать класс EventEmitter со следующей функциональностью:

-   метод subscribe(eventName, callback) - передаем название события и
    callback-функцию, которая сработает при вызове этого события
-   метод unsubscribe(eventName, callback) - передаем название
    события и callback-функцию, которую необходимо отписать от этого
    события
-   emit(eventName) - передаем имя события и вызываем его
    (срабатывают все подписанные функции)

##Пример:

const eventEmitter = new EventEmitter()

```
function f1() {
console.log('hello')
}
function f2() {
console.log('world')
}
function f3() {
console.log('some output')
}

eventEmitter.subscribe('event1', f1).subscribe('event1', f2).subscribe('event2', f3).emit('event1') // вывод: hello, world
eventEmitter.emit('event2') // вывод: some output
eventEmitter.unsubscibe('event1', f1).emit('event1') // вывод: world
```

##Примечания:

-   обязательно сделать возможность вызова методов в цепочку (function
    chaining)
-   при желании реализовать возможность передачи аргументов callback-
    функциям
-   будем плюсом реализация на TypeScript
