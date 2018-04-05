/* global describe, it */
/* eslint-disable no-unused-expressions */

import { expect } from 'chai';
import sum from './sum';

describe('Sum', () => {
    it('Should return correct sum ', () => {
        expect(sum(4, 2)).to.equals(6);
    });
});
