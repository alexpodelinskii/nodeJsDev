function User(name, age) {
    this.name = name;
    this.age = age;
    
    this.displayInfo = function () {
        console.log(`Name : ${this.name}`)
        console.log(`Age : ${this.age}`)
    }
}

User.prototype.sayHi = function () {
    console.log(`Hello, my name is ${this.name}`)
}

module.exports = User;
