import TreeModel from 'tree-model';
import Cell from '../cell';
/* eslint-disable require-jsdoc */
class Layout {
    constructor(measurements, config) {
        this.measurements = measurements;
        this.config = config;

        this.configTree = this.createConfigTree();

        this.cellDepInitialConfig = {
            cell: this.getRootCell(),
            children: []
        };

        this.cellDepTree = this.createCellDepTree();
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

    createCellDepTree() {
        return new TreeModel().parse(this.cellDepInitialConfig);
    }
}

export default Layout;
