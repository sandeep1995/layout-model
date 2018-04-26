/* eslint-disable require-jsdoc */
class DummyComponent {
    constructor(seed, dimensions) {
        this.seed = seed;
        this.dimensions = dimensions;
        this.position = null;
        this.renderAt = null;
    }

    getLogicalSpace() {
        return {
            width: this.dimensions.width - 1 * this.seed,
            height: this.dimensions.height - 1 * this.seed
        };
    }

    setSpatialConfig(conf) {
        this.position = { top: conf.y, left: conf.x };
        this.dimensions = { width: conf.width, height: conf.height };
        this.renderAt = conf.renderAt;
    }
}

export default DummyComponent;
