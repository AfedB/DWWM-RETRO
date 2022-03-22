var index = 0;
const images = [
  "/src/asset/img/pixel-blue-car.png",
  "/src/asset/img/pixel-green-car.png",
  "/src/asset/img/pixel-purple-car.png",
  "/src/asset/img/pixel-yellow-car.png",
];

var parentSpecs = document.getElementsByClassName("parent-div");
var cnt = 0;

function changeCar() {
  document.getElementById("hero-car-src").src = images[index++];
  document.getElementById("img-id").src = images[index];
  if (index == images.length + 1) {
    index = 0;
  }
  var idx = cnt % 4;
  parentSpecs[idx].classList.remove("show");
  parentSpecs[idx].classList.add("hide");
  idx = (idx + 1) % 4;
  parentSpecs[idx].classList.remove("hide");
  parentSpecs[idx].classList.add("show");
  cnt++;
}
