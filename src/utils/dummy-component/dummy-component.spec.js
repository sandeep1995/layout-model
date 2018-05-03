import { expect } from 'chai';
import DummyComponent from './';

describe('DummyComponent', () => {
    const seed = 10,
        width = 100,
        height = 100;
    describe('#constructor', () => {
        let comp = new DummyComponent(seed, { width, height });
        it('should be an instance of DummyComponent', () => {
            expect(comp).to.be.an.instanceOf(DummyComponent);
            expect(comp.seed).to.be.equal(seed);
        });
    });
    describe('#getLogicalSpace', () => {
        let comp = new DummyComponent(seed, { width, height });
        it('should have the expected value', () => {
            expect(comp.getLogicalSpace()).to.be.deep.equal({
                width: 80,
                height: 80
            });
        });
    });
    describe('#setSpatialConfig', () => {
        let comp = new DummyComponent(seed, { width, height });
        it('should have the spatial value', () => {
            let conf = {
                x: 0, y: 0, width: 50, height: 50, renderAt: 'node-1'
            };
            comp.setSpatialConfig(conf);
            expect(comp.renderAt).to.be.equal('node-1');
        });
    });
});
