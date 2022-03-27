// creating a list given a wikipedia page
const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a')); // need to convert NodeList into an array in order to use the map and filter methods in the next lines of code

const de = links
            .map(link => link.textContent)
            .filter(streetName => streetName.includes('de'));

// sort exercize

const alpha = people.sort(function(lastOne, nextOne) {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ')
    
    return aLast > bLast ? 1 : -1
}) 

// reduce exercise

const data = ['car', 'car', 'car', 'truck', 'truck', 'bike', 'bike', 'car', 'bike', 'car', 'car', 'truck', 'truck', 'walk', 'walk']

const transportation = data.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 0
    }
    object[item]++
    return obj
}, {}); // everytime a new value is found, add a new property to the object and increment its value when occurs in the array



