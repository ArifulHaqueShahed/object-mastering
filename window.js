var name = "Shahed"

function add (num1, num2){
    var result = num1 + num2;
    console.log('result in inside', name)
    return result;
}
console.log('result in outside',name)
var sum = add(20, 30);
console.log(sum)