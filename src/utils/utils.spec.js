import {
  expect
} from 'chai';
import {
  isEqual,
  getNodeId,
  yExtraSpace,
  xExtraSpace
} from './utils';

import Node from '../tree/';
import DummyComponent from '../utils/dummy-component';
import LayoutModel from '../layout-model';

describe('Utils', () => {
    describe('#isEqualStringValue', () => {
        const VERTICAL = 'vertical';

        it('should be same as tested value', () => {
            expect(isEqual('vertical', VERTICAL)).to.be.true;
        });

        it('should be same as tested value', () => {
            expect(isEqual('VERTICAL', VERTICAL)).to.be.true;
        });

        it('should throw an error', () => {
            expect(() => {
                isEqual({}, VERTICAL);
            })
                            .to
                            .throw(TypeError, 'value and compareTo must be string');
        });
    });

    describe('#getNodeId', () => {
        it('should create a unique node id', () => {
            expect(getNodeId()).to.be.not.equal(getNodeId());
        });
    });

    describe('#yExtraSpace', () => {
        it('should return the correct vertical extra spcae', () => {
            const width = 100,
                height = 100;
            let comp1 = new DummyComponent(10, {
                    width,
                    height: height / 2
                }),
                comp2 = new DummyComponent(10, {
                    width,
                    height: height / 2
                }),
                layoutDef = {
                    host: null,
                    ratioWeight: 1,
                    cut: 'h',
                    lanes: [{
                        host: comp1,
                        ratioWeight: 1,
                        cut: null,
                        lanes: []
                    },
                    {
                        host: comp2,
                        ratioWeight: 1,
                        cut: null,
                        lanes: []
                    }
                    ]
                },

                layout = new LayoutModel({
                    width,
                    height
                }, layoutDef),

                root = layout.tree();

            expect(yExtraSpace(root)).to.be.equal(40);
        });
    });

    describe('#xExtraSpace', () => {
        it('should return the correct horizontal extra spcae', () => {
            const width = 100,
                height = 100;
            let comp1 = new DummyComponent(10, {
                    width: width / 2,
                    height
                }),
                comp2 = new DummyComponent(10, {
                    width: width / 2,
                    height
                }),
                layoutDef = {
                    host: null,
                    ratioWeight: 1,
                    cut: 'v',
                    lanes: [{
                        host: comp1,
                        ratioWeight: 1,
                        cut: null,
                        lanes: []
                    },
                    {
                        host: comp2,
                        ratioWeight: 1,
                        cut: null,
                        lanes: []
                    }
                    ]
                },

                layout = new LayoutModel({
                    width,
                    height
                }, layoutDef),

                root = layout.tree();

            expect(xExtraSpace(root)).to.be.equal(40);
        });
    });
});
