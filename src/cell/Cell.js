/* eslint-disable require-jsdoc */
class Cell {
    constructor(width, height, top, left) {
        this.width = width;
        this.height = height;
        this.top = top;
        this.left = left;
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

    updateTop(top) {
        if (top < 0) {
            return;
        }
        this.top = top;
    }

    updateLeft(left) {
        if (left < 0) {
            return;
        }
        this.left = left;
    }
}

export default Cell;
