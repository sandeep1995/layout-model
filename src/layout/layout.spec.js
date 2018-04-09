import { expect } from 'chai';
import Layout from './layout';

describe('Layout', () => {
    describe('#constructor', () => {
        const measurements = {
                width: 800,
                height: 600
            },
            settings = {
                cut: 'horizontal',
                host: null,
                ratioWeight: null,
                lanes: [
                    {
                        cut: null,
                        host: {},
                        ratioWeight: 1,
                        lanes: []
                    },
                    {
                        cut: null,
                        host: {},
                        ratioWeight: 5,
                        lanes: []
                    },
                    {
                        cut: null,
                        host: {},
                        ratioWeight: 1,
                        lanes: []
                    },
                ]
            };
        let layout = new Layout(measurements, settings);

        it('should have created layout instance', () => {
            expect(layout).to.be.an.instanceOf(Layout);
        });

        it('should have same measurements', () => {
            expect(layout.measurements).to.be.deep.equals(measurements);
        });

        it('should have same layout settings', () => {
            expect(layout.settings).to.be.deep.equals(settings);
        });
    });
});
