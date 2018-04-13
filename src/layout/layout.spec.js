import {
    expect
  } from 'chai';
import Layout from './Layout';
import {
    DummyComponent
  } from '../utils';

describe('Layout', () => {
    describe('#constructor', () => {
        const measurements = {
                width: 600,
                height: 400
            },

            topComponent = new DummyComponent(measurements.width, 100),
            bottomComponent = new DummyComponent(measurements.width, 100),
            middleLeftComponent = new DummyComponent(measurements.width / 2, 200),
            middleRightComponent = new DummyComponent(measurements.width / 2, 200),

            config = {
                cut: 'horizontal',
                host: null,
                ratioWeight: null,
                lanes: [{
                    cut: null,
                    host: topComponent,
                    ratioWeight: 1,
                    lanes: []
                },
                {
                    cut: 'vertical',
                    host: null,
                    ratioWeight: 2,
                    preferred: true,
                    lanes: [{
                        cut: null,
                        host: middleLeftComponent,
                        ratioWeight: 1,
                        preferred: true,
                        lanes: []
                    },
                    {
                        cut: null,
                        host: middleRightComponent,
                        ratioWeight: 1,
                        lanes: []
                    }]
                },
                {
                    cut: null,
                    host: bottomComponent,
                    ratioWeight: 1,
                    lanes: []
                }]
            };


        let layout = new Layout(measurements, config);

        it('should have created layout instance', () => {
            expect(layout).to.be.an.instanceOf(Layout);
        });

        it('should have same measurements', () => {
            expect(layout.measurements).to.be.deep.equals(measurements);
        });

        it('should have same layout settings', () => {
            expect(layout.config).to.be.deep.equals(config);
        });
    });
});
