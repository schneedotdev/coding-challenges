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