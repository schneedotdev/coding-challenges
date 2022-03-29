// ** Creating an Object
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log('draw')
    }
};

circle.draw();


// ** Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw')
        }
    };
}

const circle = createCircle(1);

// ** Constructor Function
function Circle(radius) {
    // console.log('this', this)
    this.radius = radius;
    this.draw = function () {
        console.log('draw')
    }
}

const another = new Circle(1); // "new" creates an empty object, then set "this" to point to that object


// ** every object has a constructor property which references the function that was used to create that object

// Object literal
let x = {} // same as let x = new Object()

new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1, 2, 3 ...

// How is a function declared internally?

const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function() {
    console.log('draw')
}
`)

// ** Takeaway: Functions are objects

Circle.call({}, 1) // exactly like const another = new Circle(1); "this" references the empty object passed as the first argument

Circle.apply({}, [1, 2, 3]); 


// ** Types: Value (Primative) vs. Reference Types

let x = 10; // stored inside x
let y = x; // value is copied into the new variable (completely independent)

x = 20;


let a = { value: 10 }; // the value is not stored inside a, the address of the object is
let b = a; // when we copy a into b, its the address/reference that is copied, not the value

a.value = 20; // b will show 20


// ** example of copy by value vs reference

let number = 10;

function increase(number) {
    number++
}

increase(number);
console.log(number) // prints 10, because the number referenced in the increase function is local to the function

let number2 = { value: 10 };

function increase2(obj) {
    obj.value++;
}

increase(obj);
console.log(obj); // the objects value will be 11 because the increase2 function has a reference to the address of the object defined by number2


// ** Objects are dynamic, meaning we can add properties at any time


let circle3 = new Circle(10)
circle3.location = { x: 1}

// ** Accessing the keys of an object

for (let key in circle3) {
    if(typeof circle[key] !== 'function')
        console.log(key, circle[key])
}

const keys = Object.keys(circle3);
console.log(keys);

if('radius' in circle3)
    console.log('Circle has a radius property')



// ** Abstraction - hiding certain members from being accessed from outside of the function

function Rectangle(length, width) {
    let color = 'red'; // local variable, cant be accessed from outside
    let defaultLocation = { x: 0, y: 0 };
    let computeOptimalLocation = function(factor) {
        // ...
    }

    this.length = length,
    this.width = width,

    this.draw = function() {
        computeOptimalLocation(0.1);

        console.log('drawing rectangle')
    }
    
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if(!value.x || !value.y)
                throw new Error('Invalid Location');

            defaultLocation = value;
        }
    });
}

circle.defaultLocation;
circle.defaultLocation = 1;

// ** Creating my own stopwatch

function Stopwatch() {
    let startTime, endTime, duration = 0;
    let running = false;

    this.start = function() {
        if(running)
            throw new Error('Stopwatch has already started.')

        startTime= new Date();
        running = true;
    }

    this.stop = function() {
        if (!running)
            throw new Error('Stopwatch has already been stopped.')

        running = false;

        endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    }

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    });
}

const sw = new Stopwatch();