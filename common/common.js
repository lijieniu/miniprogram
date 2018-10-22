function sayHello(name) {
    console.log(`Hello ${name} !`);
}

function sayGoodBye(name) {
    console.log(`Goodbye ${name} !`);
}

module.exports.sayHello = sayHello;
exports.sayGoodBye = sayGoodBye;