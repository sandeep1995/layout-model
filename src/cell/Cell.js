/* eslint-disable require-jsdoc */
class Cell {
    constructor(width, height, position) {
        this.width = width;
        this.height = height;
        this.position = position;
    }

    updateWidth(width) {
        if (width < 0) {
            return;
        }
        this.width = width;
    }

    updateHeight(height) {
        if (height < 0) {
            return;
        }
        this.height = height;
    }

    updatePosition(position) {
        if (position.top < 0 || position.left < 0) {
            return;
        }
        this.position = position;
    }
}

export default Cell;
