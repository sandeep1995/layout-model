import {
  expect
} from 'chai';
import LayoutModel from './layout-model';
import Node from '../tree/';
import Component from '../utils/dummy-component';

describe('Layout', () => {
    describe('#constructor', () => {
        const width = 600,
            height = 600,
            component1 = new Component(10, {
                width: width / 2,
                height: width / 2
            }),
            component2 = new Component(10, {
                width: width / 2,
                height: width / 2
            }),
            component3 = new Component(10, {
                width: width / 2,
                height: width / 2
            }),
            component4 = new Component(10, {
                width: width / 2,
                height: width / 2
            }),
            config = {
                host: null,
                cut: 'v',
                ratioWeight: 1,
                lanes: [{
                    host: null,
                    cut: 'h',
                    ratioWeight: 1,
                    preferred: true,
                    lanes: [{
                        host: component1,
                        cut: null,
                        ratioWeight: 1,
                        preferred: true,
                        lanes: []
                    },
                    {
                        host: component2,
                        cut: null,
                        ratioWeight: 1,
                        lanes: []
                    }
                    ]
                },
                {
                    host: null,
                    cut: 'h',
                    ratioWeight: 1,
                    lanes: [{
                        host: component3,
                        cut: null,
                        ratioWeight: 1,
                        lanes: []
                    },
                    {
                        host: component4,
                        cut: null,
                        ratioWeight: 1,
                        preferred: true,
                        lanes: []
                    }
                    ]
                }
                ]
            };


        it('should be an instance of LayoutModel', () => {
            let layout = new LayoutModel({
                width,
                height
            }, config);
            expect(layout).to.be.an.instanceOf(LayoutModel);
        });

        it('should create a node tree', () => {
            let layout = new LayoutModel({
                    width,
                    height
                }, config),
                tree = layout.createTree(config, null);
            expect(tree).to.be.an.instanceOf(Node);
        });

        it('should create a node tree with a different tree as parent', () => {
            let layout = new LayoutModel({
                    width,
                    height
                }, config),
                tree1 = layout.createTree(config, null),
                tree2 = layout.createTree(config, tree1);

            expect(tree2).to.be.an.instanceOf(Node);
        });

        it('should have the same boundBox of root', () => {
            let layout = new LayoutModel({
                width,
                height
            }, config);
            expect(layout.root.boundBox).to.deep.equals({
                top: 0,
                left: 0,
                width,
                height
            });
        });

        it('should have two child', () => {
            let layout = new LayoutModel({
                width,
                height
            }, config);
            expect(layout.root.children.length).to.equal(2);
        });

        it('should allocate bounding boxes to child nodes', () => {
            let layout = new LayoutModel({
                    width,
                    height
                }, config),
                tree = layout.createTree(config, null);
            tree.boundBox = {
                top: 0,
                left: 0,
                width,
                height
            };
            layout.allocateBoundingBox(tree);
            expect(tree.children[0].boundBox).to.deep.equals({
                top: 0,
                left: 0,
                width: width / 2,
                height
            });
        });
    });
});