import { expect } from 'chai';
import { isEqual } from './utils';

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
            expect(() => { isEqual({}, VERTICAL); })
                            .to
                            .throw(TypeError, 'value and compareTo must be string');
        });
    });
});
