import Cell from '../cell';
import Node from '../tree/Node';
/* eslint-disable require-jsdoc */
class Layout {
    constructor(measurements, config) {
        this.measurements = measurements;
        this.config = config;
        this.configRoot = this.createConfigTree(this.config);
        // need to create the cell tree
        // calculate free space across nodes
        // adjust the logical space
    }


    createConfigTree(config) {
        const node = new Node(config);
        config.lanes.forEach((conf) => {
            node.addChild(new Node(conf));
        });
        return node;
    }

    getRootCell() {
        const position = { top: 0, left: 0 },
            rootCell = new Cell(
            this.measurements.width,
            this.measurements.height,
            position
        );

        return rootCell;
    }

}

export default Layout;

