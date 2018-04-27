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
        this.position = { top: conf.y, left: conf.x };
        this.dimensions = { width: conf.width, height: conf.height };
        this.renderAt = conf.renderAt;
    }

    draw () {
        let doc = document.getElementById(this.renderAt),
            div = document.createElement('div');
        div.style.backgroundColor = '#36C3FF';
        div.style.width = `${this.dimensions.width - (this.seed * 2)}px`;
        div.style.height = `${this.dimensions.height - (this.seed * 2)}px`;
        doc.appendChild(div);
    }
}

export default DummyComponent;
