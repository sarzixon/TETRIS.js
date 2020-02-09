import { mapParameters } from './base';

// create a net of blocks

// export const drawNet = () => {
//     const canvas = document.querySelector('#game');
//     const ctx = canvas.getContext('2d');
//     ctx.strokeStyle = mapParameters.mapColor;
//     for (let i = 30; i < mapParameters.canvasHeight; i += mapParameters.blockSize) {
//         ctx.beginPath();
//         ctx.moveTo(i, 0);
//         ctx.lineTo(i, mapParameters.canvasHeight);
//         ctx.moveTo(0, i);
//         ctx.lineTo(mapParameters.canvasWidth, i);
//         ctx.stroke();
//         // console.log(i);
//     };
// };

export default class Board {
    constructor(rows,cols) {
        this.rows = rows;
        this.cols = cols;
    }

    createMap() {
        this.mapArray = [];
        for (let i = 0; i < this.rows; i++) {
            this.mapArray[i] = [];
            for (let j = 0; j < this.cols; j++) {
                if(j==0 || j==11) {
                    this.mapArray[i][j] = i +', -1';
                }else if(i==20){
                    this.mapArray[i][j] = '-1, '+j;
                }else {

                    this.mapArray[i][j] = 9;
                }
            }
        }
    }
    showMap() {
        let napis='';
      for (let i = 0; i < this.rows; i++) {
          for (let j = 0; j < this.cols; j++) {
              napis += this.mapArray[i][j] + " || ";
          }
          napis += '<br>';
      }
      document.querySelector('.test').innerHTML = napis;
    }

    insertBlock(block) {
        let linesSplit = [];
         block.shapeArr[0].forEach((el,i) => {
            linesSplit[i] = el.split(''); 
        });
        console.log(linesSplit);
        let l = -1;
         for(let i = block.positionX; i < block.positionX+4; i++) {
             let k = 0;
             l++;
            for (let j = block.positionY; j < block.positionY+4; j++) {
                this.mapArray[i][j] = linesSplit[l][k];
                k++
                // console.log(linesSplit[k][k]);
            }
         }
    }

    drawNet() {
        const canvas = document.querySelector('#game');
        const ctx = canvas.getContext('2d');
        ctx.strokeStyle = mapParameters.mapColor;
        for (let i = 30; i < mapParameters.canvasHeight; i += mapParameters.blockSize) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, mapParameters.canvasHeight);
            ctx.moveTo(0, i);
            ctx.lineTo(mapParameters.canvasWidth, i);
            ctx.stroke();
            // console.log(i);
        };
    }
};