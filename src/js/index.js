import '../style.css';
import Board from './board';
import Block from './block';
import * as base from './base';

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');

// console.log(map.mapParameters);
// map.drawNet();


// one block
// ctx.fillStyle = map.colors.Lblock;
// ctx.rect(120, 120, map.mapParameters.blockSize - 1, map.mapParameters.blockSize - 1);
// ctx.fill();

// class Block {
//     constructor(color,width=29,height=29) {
//         this.color = color;
//         this. width = width;
//         this.height = height;
//     }
// }
// const test = new Block(Jblock);
// console.log(test);
const Tetris = () => {
    //create new Map

    const board = new Board(base.mapParameters.rows+1,base.mapParameters.columns+2);
    //draw Net
    board.drawNet();
    
    // create Board object which contains map data structure
    board.createMap();
    // board.showMap();
    console.log(board.mapArray[4][0]);
    // get a random numer 1-7
    //create block
    const block = new Block(4,2);
    // console.log(block);
    board.insertBlock(block);
    // board.showMap();
    //insert block to Board;

    // const board = 
};
Tetris();