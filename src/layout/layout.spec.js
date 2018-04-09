import { expect } from 'chai';
import Layout from './Layout';

describe('Layout', () => {
    describe('#constructor', () => {
        const measurements = {
                width: 600,
                height: 400
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
                        ratioWeight: 2,
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
