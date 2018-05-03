/* eslint-disable require-jsdoc */

/* eslint no-undef: "off" */

class DummyComponent {
    constructor(seed, dimensions) {
        this.seed = seed;
        this.dimensions = dimensions;
        this.position = null;
        this.renderAt = null;
    }

    getLogicalSpace() {
        return {
            width: this.dimensions.width - (2 * this.seed),
            height: this.dimensions.height - (2 * this.seed)
        };
    }

    setSpatialConfig(conf) {
        this.position = {
            top: conf.y,
            left: conf.x
        };
        this.newDimensions = {
            width: conf.width,
            height: conf.height
        };
        this.renderAt = conf.renderAt;
    }

    /* istanbul ignore next */

    draw() {
        let doc = document.getElementById(this.renderAt),
            div = document.createElement('div'),
            width = Math.max(this.dimensions.width, this.newDimensions.width),
            height = Math.max(this.dimensions.height, this.newDimensions.height);

        div.style.backgroundColor = '#fab1a0'; // getColor();

        div.style.width = `${width - (this.seed * 2)}px`;
        div.style.height = `${height - (this.seed * 2)}px`;

        doc.appendChild(div);
    }
}

export default DummyComponent;
