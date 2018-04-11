/* eslint-disable require-jsdoc */
class Cell {
    constructor(width, height, position) {
        this.width = width;
        this.height = height;
        this.position = position;
    }

    updateWidth(width) {
        this.width = width;
    }

    updateHeight(height) {
        this.height = height;
    }

    resizeTo(width, height) {
        this.width = width;
        this.height = height;
    }

    updatePosition(position) {
        this.position = position;
    }
}

export default Cell;
