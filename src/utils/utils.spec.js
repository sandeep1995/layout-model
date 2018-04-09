import { expect } from 'chai';
import { isEqualStringValue } from './utils';

describe('Utils', () => {
    describe('#isEqualStringValue', () => {
        const VERTICAL = 'vertical';

        it('should be same as tested value', () => {
            expect(isEqualStringValue('vertical', VERTICAL)).to.be.true;
        });

        it('should be same as tested value', () => {
            expect(isEqualStringValue('VERTICAL', VERTICAL)).to.be.true;
        });

        it('should throw an error', () => {
            expect(() => { isEqualStringValue({}, VERTICAL); })
                            .to
                            .throw(TypeError, 'value and compareTo must be string');
        });
    });
});
