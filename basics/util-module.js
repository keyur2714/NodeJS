const prefix = 'Hello';

module.exports.sum = function (num1,num2) {
    return num1 + num2;
}

module.exports.hello = function (name){
    console.log(prefix +' '+ name);
}
module.exports.prefix = prefix;