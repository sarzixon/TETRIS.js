import * as base from './base';

export default class Block {
    constructor(positionX,positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.shapeNum = Math.ceil(Math.random() * 7);
        this.color = base.blockMap.get(this.shapeNum).color;
        this.shapeArr = base.blockMap.get(this.shapeNum).shape;
    }

    // insertBlock() {
    //     this.x = base.blockMap.get(this.shapeNum);
    //     console.log(this.x);
    // }
}