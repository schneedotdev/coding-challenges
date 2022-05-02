/**
 *  TheJSway Tasks
 *  Chapter 09 - Understanding Object-Oriented Programming
 */



// Task: Dogs
class Dog {
    constructor(name, species, size) {
        this.name = name;
        this.species = species; 
        this.size = size;
    }
    name() {
        return this.name;
    }
    species() {
        return this.species;
    }
    size() {
        return this.size;
    }
    bark() {
        return 'Grrr! Grrr!';
    }
}

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);



// Task: Character Inventory
class Inventory{
    constructor() {
        this.gold = 10;
        this.keys = 1;
    }
    gold() {
        return this.gold;
    }
    addGold(amount) {
        this.gold += amount;
    }
    keys() {
        return this.keys;
    }
    addKeys(amount) {
        this.keys += amount;
    }
}


// Task: Account List
class Account {
    constructor(name, balance, credit) {
        this.name = name;
        this.balance = balance;
        this.credit = credit;
    }
    describe() {
        return `owner: ${this.name}, balance: ${this.balance}`;
    }
}