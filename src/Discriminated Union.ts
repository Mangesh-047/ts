

interface Ibird {
    type: 'bird',
    flyingSpeed: number, // type litral
}

interface Ihorse {
    type: 'horse',
    runningSpeed: number, // type litral
}

let cl = console.log;

type Animal = Ibird | Ihorse // Discriminated union



function movingAnimal(an: Animal) {
    if (an.type === 'bird') {
        cl(`${an.type} is flying with speed ${an.flyingSpeed}`)
    }
    if (an.type === 'horse') {
        cl(`${an.type} is running with speed ${an.runningSpeed}`)
    }
}



let b1: Animal = { type: 'bird', flyingSpeed: 90 }
let h1: Animal = { type: 'horse', runningSpeed: 900 }


movingAnimal(b1)
movingAnimal(h1)