import '../style.css';

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');


// create a net of blocks
const canvasWidth = 300;
const canvasHeight = 600;
const columns = 10;
const rows = 20;
const blockSize = 30;
// console.log(blockSize);
ctx.strokeStyle = "#a19494";
for(let i = 30; i < canvasHeight; i+=blockSize) {
    ctx.beginPath();
    ctx.moveTo(i,0);
    ctx.lineTo(i, canvasHeight);
    ctx.moveTo(0,i);
    ctx.lineTo(canvasWidth, i);
    ctx.stroke();
    // console.log(i);
};


// one block

// ctx.rect(135,100,blockSize,blockSize);
// ctx.stroke();