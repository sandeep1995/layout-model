import TreeModel from 'tree-model';
/* eslint-disable require-jsdoc */
class Layout {
    constructor(measurements, config) {
        this.measurements = measurements;
        this.config = config;
        this.tree = this.createTree(this.config);
    }

    createTree(config) {
        return new TreeModel({
            childrenPropertyName: 'lanes'
        }).parse(config);
    }

}

export default Layout;
