import { expect } from 'chai';
import Layout from './layout';
import Component from '../utils/dummycomponent';

describe('Layout', () => {
    describe('#constructor', () => {
        const width = 600,
            height = 600,
            component = new Component(15, {
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
                            host: component,
                            cut: null,
                            ratioWeight: 1,
                            preferred: true,
                            lanes: []
                        },
                        {
                            host: component,
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
                            host: component,
                            cut: null,
                            ratioWeight: 1,
                            lanes: []
                        },
                        {
                            host: component,
                            cut: null,
                            ratioWeight: 1,
                            preferred: true,
                            lanes: []
                        }
                    ]
                }
                ]
            };

        let layout = new Layout({
            width, height
        }, config);

        it('should be an instance of Layout', () => {
            expect(layout).to.be.an.instanceOf(Layout);
        });
    });
});
