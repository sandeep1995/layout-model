
import {
  expect
} from 'chai';
import {
  isEqual,
  getNodeId,
  yExtraSpace,
  xExtraSpace,
  smallestExtraWidthVertically,
  smallestExtraHeightHorizontally,
  determineBoundBox
} from './utils';

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

    describe('#smallestExtraWidthVertically', () => {
        it('should return the correct smallestExtraWidthVertically extra spcae', () => {
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

                root = layout.tree(),
                smWidth = smallestExtraWidthVertically(root);
            expect(smWidth).to.be.equal(20);
        });
    });

    describe('#smallestExtraHeightHorizontally', () => {
        it('should return the correct smallestExtraHeightHorizontally extra spcae', () => {
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

                root = layout.tree(),
                smHeight = smallestExtraHeightHorizontally(root);

            expect(smHeight).to.be.equal(20);
        });
    });

    describe('#determineBoundBox', () => {
        it('should return the correct bound box for horizontal', () => {
            let bb = {
                    top: 0,
                    left: 0,
                    width: 100,
                    height: 100
                },
                i = 0,
                j = 1,
                arr = [
                    {
                        boundBox: {
                            top: 0,
                            left: 0,
                            width: 100,
                            height: 100
                        }
                    },
                    {
                        boundBox: {
                            top: 100,
                            left: 0,
                            width: 100,
                            height: 100
                        }
                    }
                ],
                instance = {
                    parent: {
                        boundBox: bb,
                    }
                };

            instance._parentCut = 'h';
            const outBb = determineBoundBox(bb, i, arr, instance);

            expect(outBb).to.be.deep.equal({
                top: 0,
                left: 0,
                width: 100,
                height: 100
            });

            expect(determineBoundBox(bb, j, arr, instance)).to.be.deep.equal({
                top: 100,
                left: 0,
                width: 100,
                height: 100
            });
        });
        it('should return the correct bound box for vertical', () => {
            let bb = {
                    top: 0,
                    left: 0,
                    width: 100,
                    height: 100
                },
                i = 0,
                j = 1,
                arr = [
                    {
                        boundBox: {
                            top: 0,
                            left: 0,
                            width: 100,
                            height: 100
                        }
                    },
                    {
                        boundBox: {
                            top: 100,
                            left: 0,
                            width: 100,
                            height: 100
                        }
                    }
                ],
                instance = {
                    parent: {
                        boundBox: bb,
                    }
                };

            instance._parentCut = 'v';
            const outBb = determineBoundBox(bb, i, arr, instance);

            expect(outBb).to.be.deep.equal({
                top: 0,
                left: 0,
                width: 100,
                height: 100
            });


            expect(determineBoundBox(bb, j, arr, instance)).to.be.deep.equal({
                top: 0,
                left: 100,
                width: 100,
                height: 100
            });
        });
    });
});
