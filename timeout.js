function doSomething(){
    console.log(3333);
}
console.log(2222);
setTimeout(() => {
    console.log('lazy and waiting')
}, 5000);


setInterval(() => {
    console.log('doing it')
}, 3000);
console.log(4444);
console.log(4444);
console.log(4444);
console.log(4444);
