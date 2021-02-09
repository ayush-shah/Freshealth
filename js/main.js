let color = ["#57BABA", "#E19B8E", "#FFE5DB","#fff"];
let strokecolor = ["#57BABA", "#E19B8E", "#FFE5DB", "#f25a5f", "#000", "#fff"];
let counter = 0;
let strokeCounter = 0;
function changeBackgroundColor() {
  counter = counter > color.length - 1 ? 0 : counter;
  document.getElementsByClassName("loading-wrapper")[0].style.background =
    color[counter];
  counter++;
}

function changeStrokeColor() {
  strokeCounter = strokeCounter > strokecolor.length - 1 ? 0 : strokeCounter;
  document.querySelector(".heart-rate svg polyline").style.stroke =
    strokecolor[strokeCounter];
  strokeCounter++;
}
