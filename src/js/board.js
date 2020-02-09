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
            for (let j = 0; j < this.cols; j++) {
                this.mapArray[i][j] = i + ', ' + j;
            }
        }
    }
    showMap() {
        let napis;
      for (let i = 0; i < this.rows; i++) {
          for (let j = 0; j < this.cols; j++) {
              napis += this.mapArray[i][j] + " || ";
          }
          napis += '<br>';
      }
      console.log(napis);
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