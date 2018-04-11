import TreeModel from 'tree-model';
import Cell from '../cell';
/* eslint-disable require-jsdoc */
class Layout {
    constructor(measurements, config) {
        this.measurements = measurements;
        this.config = config;
        this.configRoot = this.createConfigTree();

        this.cellDepTree = {
            host: null,
            cell: null,
            children: []
        };

        this.createCellDepTree(this.configRoot);
    }

    createConfigTree() {
        return new TreeModel({
            childrenPropertyName: 'lanes'
        }).parse(this.config);
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

    createCellDepTree(configRoot) {

    }
}

export default Layout;
