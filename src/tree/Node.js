import { space, counter } from '../utils/';

const newId = counter(1);
/* eslint-disable require-jsdoc */
class Node {
    constructor (data, level) {
        this.data = data;
        this.parent = null;
        this.children = [];
        this.history = [];
        this.level = level;
        this._m = null;
        this.ratio = null;
        this.id = `node-${newId.next().value}`;
    }

    addChildren (entries) {
        this.children.push(...entries);
        entries.forEach((e) => { e.parent = this; });
    }

    set m (obj) {
        this._m = {
            width: this.data.cut === 'v' ? obj.width * this.ratio : obj.width,
            height: this.data.cut === 'v' ? obj.height : obj.height * this.ratio
        };
        return this;
    }

    set am (obj) {
        this._m = {
            width: obj.width,
            height: obj.height
        };

        return this;
    }

    get m () {
        return this._m;
    }

    getSpaceTaken (keepConstants) {
        return space(this, keepConstants);
    }
}
export default Node;
