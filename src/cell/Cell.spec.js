import { expect } from 'chai';
import Cell from './Cell';


describe('Cell', () => {
    const width = 200,
        height = 200,
        top = 0,
        left = 0;


    describe('#constructor', () => {
        let cell = new Cell(width, height, top, left);
        it('should have created cell instance', () => {
            expect(cell).to.be.an.instanceOf(Cell);
        });

        it('should have same width', () => {
            expect(cell.width).to.be.deep.equals(width);
        });

        it('should have same height', () => {
            expect(cell.height).to.be.deep.equals(height);
        });

        it('should have same top', () => {
            expect(cell.top).to.be.deep.equals(top);
        });

        it('should have same left', () => {
            expect(cell.left).to.be.deep.equals(left);
        });
    });

    describe('#updateWidth', () => {
        it('should change the width', () => {
            let cell = new Cell(width, height, top, left);
            cell.updateWidth(width + 100);
            expect(cell.width).to.be.deep.equals(width + 100);
        });

        it('should not change the width', () => {
            let cell = new Cell(width, height, top, left);
            cell.updateWidth(width - (width + 100));
            expect(cell.width).to.be.deep.equals(width);
        });
    });

    describe('#updateHeight', () => {
        it('should change the height', () => {
            let cell = new Cell(width, height, top, left);
            cell.updateHeight(height + 100);
            expect(cell.height).to.be.deep.equals(height + 100);
        });

        it('should not change the height', () => {
            let cell = new Cell(width, height, top, left);
            cell.updateHeight(height - (height + 100));
            expect(cell.height).to.be.deep.equals(height);
        });
    });

    describe('#updatetop', () => {
        it('should change the height', () => {
            let cell = new Cell(width, height, top, left);
            cell.updateTop(top + 100);
            expect(cell.top).to.be.deep.equals(top + 100);
        });

        it('should not change the top', () => {
            let cell = new Cell(width, height, top, left);
            cell.updateTop(top - (top + 100));
            expect(cell.top).to.be.deep.equals(top);
        });
    });

    describe('#updateLeft', () => {
        it('should change the left', () => {
            let cell = new Cell(width, height, top, left);
            cell.updateLeft(left + 100);
            expect(cell.left).to.be.deep.equals(left + 100);
        });

        it('should not change the top', () => {
            let cell = new Cell(width, height, top, left);
            cell.updateLeft(left - (left + 100));
            expect(cell.left).to.be.deep.equals(left);
        });
    });
});
