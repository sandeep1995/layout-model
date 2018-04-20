import { expect } from 'chai';
import Layout from './layout';
import Component from '../utils/dummycomponent';

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
                    lanes: [
                        {
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
                    lanes: [
                        {
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

        let layout = new Layout({ width, height }, config);

        layout.negotiate().tree();

        it('should be an instance of Layout', () => {
            expect(layout).to.be.an.instanceOf(Layout);
        });
    });
});
