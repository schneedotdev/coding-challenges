/**
 * Name: Classy Classes
 * Description: Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34
 * Link: https://www.codewars.com/kata/55a144eff5124e546400005a/train/javascript
 */

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    get info() {
        return `${this.name}s age is ${this.age}`
    }
}