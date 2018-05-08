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

    // method to update the Node Information
    updateNode(nodeconfig) {
        if (this._id === nodeconfig._id)
        {
            this.model.cut = nodeconfig.cut;
            this.model.ratioWeight = nodeconfig.ratioWeight;
        }
        else
        {
            this.children.forEach((node) => {
                if (node._id === nodeconfig._id)
                {
                    node.model.cut = nodeconfig.cut;
                    node.model.ratioWeight = nodeconfig.ratioWeight;
                    return;
                }
                this.searchNode(node, nodeconfig);
            });
        }
    }

    // function to search a node
    searchNode(node, nodeconfig) {
        node.children.forEach((node1) => {
            if (node1._id === nodeconfig._id)
            {
                node1.model.cut = nodeconfig.cut;
                node1.model.ratioWeight = nodeconfig.ratioWeight;
            }
            else
            {
                this.searchNode(node1, nodeconfig);
            }
        });
    }

}

export default Node;
