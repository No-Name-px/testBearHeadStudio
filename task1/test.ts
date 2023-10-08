import EventEmitter from "./EventEmitter";

const eventEmitter = new EventEmitter();
function f1() {
    console.log("hello");
}
function f2() {
    console.log("world");
}
function f3() {
    console.log("some output");
}
console.log("\n======= TEST 1 =======");
eventEmitter
    .subscribe("event1", f1)
    .subscribe("event1", f2)
    .subscribe("event2", f3)
    .emit("event1"); // вывод: hello, world
console.log("======================");

console.log("\n======= TEST 2 =======");
eventEmitter.emit("event2"); // вывод: some output
console.log("======================");

console.log("\n======= TEST 3 =======");
eventEmitter.unsubscribe("event1", f1).emit("event1"); // вывод: world
console.log("======================");
