/* eslint-disable require-jsdoc */
class DummyComponent {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getLogicalSpace() {
        return {
            width: this.width,
            height: this.height
        };
    }
}

export default DummyComponent;
