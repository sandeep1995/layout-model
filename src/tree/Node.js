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

        this.model._id = this._id;
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

    /**
     * function to search a node and update it with the config provided.
     * @param  {Object} nodeconfig - configurations of the node to be updated.
     */
    updateNode(nodeconfig) {
        if (this._id === nodeconfig._id)
        {
            this.model.cut = nodeconfig.cut;
            this.model.ratioWeight = nodeconfig.ratioWeight;
        }
        else
        {
            this.model.lanes.forEach((node) => {
                if (node._id === nodeconfig._id)
                {
                    node.cut = nodeconfig.cut;
                    node.ratioWeight = nodeconfig.ratioWeight;
                }
                this.searchNode(node, nodeconfig);
            });
        }
    }

    // Recursive function to search a node for updating a node.
    searchNode(node, nodeconfig) {
        node.lanes.forEach((node1) => {
            if (node1._id === nodeconfig._id)
            {
                node1.cut = nodeconfig.cut;
                node1.ratioWeight = nodeconfig.ratioWeight;
            }
            else
            {
                this.searchNode(node1, nodeconfig);
            }
        });
    }

    /**
     * function to delete a node from tree Structure.
     * @param  {String} nodeId - node Id of the Node
     */
    delete(nodeId) {
        this.model.lanes.forEach((node) => {
            if (node._id === nodeId)
                {
                // let index = this.children.indexOf(node);
                let index = this.model.lanes.indexOf(node);
                this.model.lanes.splice(index, 1);
            }
            this.deleteSearchNode(node, nodeId);
        });
    }

    // Recursive function to search a node for deleting a node
    deleteSearchNode(node, nodeId) {
        node.lanes.forEach((node1) => {
            if (node1._id === nodeId)
            {
                // let index = node.children.indexOf(node1);
                let index = node.lanes.indexOf(node1);
                node.lanes.splice(index, 1);
            }
            else
            {
                this.deleteSearchNode(node1, nodeId);
            }
        });
    }

    /**
     * function to add nodes to the tree.
     * @param  {} nodeId - Node ID where to add the node.
     * @param  {} nodeArray - New Node Configuration array.
     */
    addNode(nodeId, nodeArray) {
        if (this._id === nodeId)
        {
            this.host = null;
            nodeArray.forEach((tempNode) => {
                this.model.lanes.push(tempNode);
            });
            // this.model.lanes.push(nodeObj);
        }
        else
        {
            this.model.lanes.forEach((node) => {
                if (node._id === nodeId)
                {
                    node.host = null;
                    nodeArray.forEach((tempNode) => {
                        node.lanes.push(tempNode);
                    });
                    // node.lanes.push(nodeObj);
                }
                this.addSearchNode(node, nodeId, nodeArray);
            });
        }
    }

    // Recursive function to search a node for adding a new Node
    addSearchNode(node, nodeId, nodeArray) {
        node.lanes.forEach((node1) => {
            if (node1._id === nodeId)
            {
                node1.host = null;
                nodeArray.forEach((tempNode) => {
                    node1.lanes.push(tempNode);
                });
                // node1.lanes.push(nodeObj);
            }
            else {
                this.addSearchNode(node1, nodeId, nodeArray);
            }
        });
    }

    /**
     * function to get the Node Information
     * @param  {} nodeId - ID of the Node.
     */
    getNode(nodeId) {
        this.nodeInfo = null;
        if (this._id === nodeId)
        {
            this.nodeInfo = this.model;
        }
        else
        {
            this.model.lanes.forEach((node) => {
                if (node._id === nodeId)
                {
                    this.nodeInfo = node;
                }
                this.getSearchNode(node, nodeId);
            });
        }
        return this.nodeInfo;
    }


    // Recursive function to search a node for adding a new Node
    getSearchNode(node, nodeId) {
        node.lanes.forEach((node1) => {
            if (node1._id === nodeId)
            {
                this.nodeInfo = node1;
            }
            else
            {
                this.getSearchNode(node1, nodeId);
            }
        });
    }

}

export default Node;
