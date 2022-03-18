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
let heroColor = document.getElementById('hero-car-src');


// document.getElementById("blueCar").src="src\asset\img\pixel-blue-car.png";





btnSwitch.addEventListener('click',() => {
    // switchColor.src = 'img/pixel-blue-car.png';
    heroColor.src = '/src/asset/img/pixel-green-car.png';
})


