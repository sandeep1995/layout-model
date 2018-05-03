import { expect } from 'chai';
import Node from './';

describe('Node', () => {
    describe('#constructor', () => {
        let data = {
                key: 'value'
            },
            node = new Node(data);

        it('should create an instance of Node', () => {
            expect(node).to.be.an.instanceOf(Node);
        });
        it('should have the null boundBox', () => {
            expect(node.boundBox).to.be.deep.equal({
                top: null,
                left: null,
                height: null,
                width: null
            });
        });
    });
    describe('#addChildern', () => {
        let data = {
                key: 'value'
            },
            parent = new Node(data),
            child = new Node(data);
        it('should have exactly two child', () => {
            parent.addChildren([child, child]);
            expect(parent.children.length).to.be.equal(2);
        });
    });

    describe('#isRoot', () => {
        let data = {
                key: 'value'
            },
            node = new Node(data);

        it('should be the root of the tree', () => {
            expect(node.isRoot()).to.be.true;
        });
    });
    describe('#isLeaf', () => {
        let data = {
                key: 'value'
            },
            parent = new Node(data),
            child = new Node(data);
        parent.addChildren([child, child]);

        it('should be the leaf of the tree', () => {
            expect(parent.children[1].isLeaf()).to.be.true;
        });
    });
    describe('#getCutType', () => {
        let data = {
                cut: 'h',
                preferred: true
            },

            node = new Node(data);

        it('should give the correct cut type', () => {
            expect(node.getCutType()).to.be.equal('h');
        });
    });
    describe('#isPreferred', () => {
        let data = {
                cut: 'h',
                preferred: true
            },

            node = new Node(data);

        it('should be preferred node', () => {
            expect(node.isPreferred()).to.be.true;
        });
    });
});
