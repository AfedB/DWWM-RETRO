// switch button 
const btnSwitch = document.getElementById('btnSwitch');

// switch color car icon 
// let switchColor = document.getElementById('switchColor');


// car paragraph specs
// let carSpecs = document.getElementsByClassName('car-specs');
// let purpleCar = document.getElementById('purple-car-specs');
// let blueCar = document.getElementById('blue-car-specs');
// let greenCar = document.getElementById('green-car-specs');
// let yellowCar = document.getElementById('yellow-car-specs');

// hero color cars 
// let heroCar = document.getElementsByClassName('hero_car');
// let heroColor = document.getElementById('hero-car-src');


// document.getElementById("blueCar").src="src\asset\img\pixel-blue-car.png";


const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('#carImg img');
const src = document.getElementById('hero-car-src');

let idx = 0;

btnSwitch.addEventListener('click',() => {

    // heroColor.src = '/src/asset/img/pixel-green-car.png';

    if(idx > img.length - 1) {
        idx = 0;

    }
})


