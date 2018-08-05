//VARIABLES
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const input1 = document.getElementById('handler1'); //count of dots
const input2 = document.getElementById('handler2'); //radius

let w = window.innerWidth;
let h = window.innerHeight;

let radius = 200;
let x, y;
let time = 0;

let dot = input1.value;
let count = input2.value;

canvas.width = w;
canvas.height = h;

input1.addEventListener('input', () => dot = input1.value);
input2.addEventListener('input', () => count = input2.value);



const getArc = (radius, fill, displacement) => {

  ctx.fillStyle = fill;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();

  for (let i = 0; i <= dot; i++) {

    x = (w / 2) + (radius + 90 * Math.cos((i * 2 * Math.PI / dot) * count + displacement)) * Math.cos(i * 2 * Math.PI / dot);
    y = (h / 2) + (radius + 90 * Math.cos((i * 2 * Math.PI / dot) * count + displacement)) * Math.sin(i * 2 * Math.PI / dot);

    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.closePath();

  ctx.fill();
};



const draw = () => {
  time++;

  ctx.clearRect(0, 0, w, h);

  for (let j = 0; j < 10; j++) {
    let fill = (j % 2) ? '#b6c9f9' : '#4b62a4';
    getArc(200 - j * 10, fill, j + j * time / 100);
  }
};
let showMagic = () => {
  draw();
  window.requestAnimationFrame(showMagic);
};


showMagic();
