import { expect } from 'chai';
import Cell from './Cell';


describe('Cell', () => {
    const width = 200,
        height = 200,
        position = {
            top: 0,
            left: 0
        };


    describe('#constructor', () => {
        let cell = new Cell(width, height, position);
        it('should have created cell instance', () => {
            expect(cell).to.be.an.instanceOf(Cell);
        });

        it('should have same width', () => {
            expect(cell.width).to.be.deep.equals(width);
        });

        it('should have same height', () => {
            expect(cell.height).to.be.deep.equals(height);
        });

        it('should have same position', () => {
            expect(cell.position).to.be.deep.equals(position);
        });
    });

    describe('#updateWidth', () => {
        it('should change the width', () => {
            let cell = new Cell(width, height, position);
            cell.updateWidth(width + 100);
            expect(cell.width).to.be.deep.equals(width + 100);
        });

        it('should not change the width', () => {
            let cell = new Cell(width, height, position);
            cell.updateWidth(width - (width + 100));
            expect(cell.width).to.be.deep.equals(width);
        });
    });

    describe('#updateHeight', () => {
        it('should change the height', () => {
            let cell = new Cell(width, height, position);
            cell.updateHeight(height + 100);
            expect(cell.height).to.be.deep.equals(height + 100);
        });

        it('should not change the height', () => {
            let cell = new Cell(width, height, position);
            cell.updateHeight(height - (height + 100));
            expect(cell.height).to.be.deep.equals(height);
        });
    });


    describe('#updatePosition', () => {
        it('should change the positon', () => {
            let cell = new Cell(width, height, position);
            const updatedPostion = { top: 10, left: 20 };
            cell.updatePosition(updatedPostion);
            expect(cell.position).to.be.deep.equals(updatedPostion);
        });

        it('should not change the position', () => {
            let cell = new Cell(width, height, position);
            const updatedPostion = { top: -10, left: 20 };
            cell.updatePosition(updatedPostion);
            expect(cell.position).to.be.deep.equals(position);
        });
    });
});
