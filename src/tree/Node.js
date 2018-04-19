import { getNodeId } from '../utils';

class Node {
    constructor(data) {
        this.model = data;
        this.parent = null;
        this.children = [];

        this.boundBox = {
            top: null,
            left: null,
            height: null,
            width: null
        };

        this._id = getNodeId();
    }

    addChildren(entries) {
        this.children.push(...entries);
        entries.forEach((e) => { e.parent = this; });
    }

    isRoot() {
        return this.parent === null;
    }

    isLeaf() {
        return !this.children.length;
    }

    getCutType() {
        return this.model.cut;
    }

    isPreferred() {
        return !!this.model.preferred;
    }

}

export default Node;
