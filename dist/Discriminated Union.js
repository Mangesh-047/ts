"use strict";
let cl = console.log;
function movingAnimal(an) {
    if (an.type === 'bird') {
        cl(`${an.type} is flying with speed ${an.flyingSpeed}`);
    }
    if (an.type === 'horse') {
        cl(`${an.type} is running with speed ${an.runningSpeed}`);
    }
}
let b1 = { type: 'bird', flyingSpeed: 90 };
let h1 = { type: 'horse', runningSpeed: 900 };
movingAnimal(b1);
movingAnimal(h1);
