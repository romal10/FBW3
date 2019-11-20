class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
    greeting(){
        console.log(` Hi my name is ${this.name} and my age is ${this.age}`)
    }
}
module.exports = Person;

function getTime(){
    console.log(`the time is: ${new Date().getHours()}: ${new Date().getMinutes()} `)
}

module.exports = Person;
module.exports.time = getTime;