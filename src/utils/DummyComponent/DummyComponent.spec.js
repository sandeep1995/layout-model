import { expect } from 'chai';
import DummyComponent from './DummyComponent';

describe('DummyComponent', () => {
    describe('#getLogicalSpace', () => {
        const width = 400,
            height = 200;

        let dummyComponent = new DummyComponent(width, height);

        it('should created dummy component', () => {
            expect(dummyComponent).to.be.an.instanceof(DummyComponent);
        });

        it('should have the same width', () => {
            expect(dummyComponent.getLogicalSpace().width).to.be.equal(width);
        });

        it('should have the same height', () => {
            expect(dummyComponent.getLogicalSpace().height).to.be.equal(height);
        });
    });
});
