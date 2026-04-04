e = require('events');
ee = new e();

ee.on('side', () => {
    console.log("Sides must be positive");
});


ee.on('perimeter', () => {
    console.log("Perimeter must be positive");
});


let a = -3, b = 4, c = 5;

if (a < 0 || b < 0 || c < 0) {
    ee.emit('side');
}

let perimeter = a + b + c;
if (perimeter < 0) {
    ee.emit('perimeter');
}
