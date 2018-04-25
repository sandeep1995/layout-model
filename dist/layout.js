(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("layout", [], factory);
	else if(typeof exports === 'object')
		exports["layout"] = factory();
	else
		root["layout"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.determineBoundBox = exports.xExtraSpace = exports.yExtraSpace = exports.getNodeId = exports.isEqual = exports.DummyComponent = undefined;

var _dummyComponent = __webpack_require__(7);

var _dummyComponent2 = _interopRequireDefault(_dummyComponent);

var _utils = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.DummyComponent = _dummyComponent2.default;
exports.isEqual = _utils.isEqual;
exports.getNodeId = _utils.getNodeId;
exports.yExtraSpace = _utils.yExtraSpace;
exports.xExtraSpace = _utils.xExtraSpace;
exports.determineBoundBox = _utils.determineBoundBox;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layoutModel = __webpack_require__(3);

var _layoutModel2 = _interopRequireDefault(_layoutModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _layoutModel2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DummyComponent = exports.LayoutModel = undefined;

var _layoutModel = __webpack_require__(1);

var _layoutModel2 = _interopRequireDefault(_layoutModel);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.LayoutModel = _layoutModel2.default;
exports.DummyComponent = _utils.DummyComponent;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tree = __webpack_require__(4);

var _tree2 = _interopRequireDefault(_tree);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LayoutModel = function () {
    function LayoutModel(measurements, config) {
        _classCallCheck(this, LayoutModel);

        this.measurements = measurements;
        this.config = config;
        this.root = this.createTree(this.config, null);
        this.setBoundBox();
    }

    _createClass(LayoutModel, [{
        key: 'createTree',
        value: function createTree(config, parent) {
            var node = new _tree2.default(config);
            if (parent) {
                node._parentCut = parent.getCutType();
                parent.addChildren([node]);
            } else {
                this.root = node;
            }
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = config.lanes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var lane = _step.value;

                    this.createTree(lane, node);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return this.root;
        }
    }, {
        key: 'allocateBoundingBox',
        value: function allocateBoundingBox(node) {
            var _this = this;

            var totalWeight = node.children.map(function (child) {
                return child.model.ratioWeight;
            }).reduce(function (carry, val) {
                return carry + val;
            }, 0);

            node.children.forEach(function (child, i, children) {
                var lastSibling = children[i - 1],
                    ratio = child.model.ratioWeight / totalWeight;

                if (child._parentCut === 'h') {
                    child.boundBox.width = child.parent.boundBox.width;
                    child.boundBox.height = child.parent.boundBox.height * ratio;
                    child.boundBox.left = child.parent.boundBox.left;
                    child.boundBox.top = i ? lastSibling.boundBox.top + lastSibling.boundBox.height : 0;
                } else {
                    child.boundBox.width = child.parent.boundBox.width * ratio;
                    child.boundBox.height = child.parent.boundBox.height;
                    child.boundBox.top = child.parent.boundBox.top;
                    child.boundBox.left = i ? lastSibling.boundBox.left + lastSibling.boundBox.width : 0;
                }
                _this.allocateBoundingBox(child);
            });
        }
    }, {
        key: 'setBoundBox',
        value: function setBoundBox() {
            this.root.boundBox = {
                top: 0,
                left: 0,
                width: this.measurements.width,
                height: this.measurements.height
            };
            this.allocateBoundingBox(this.root);
        }
    }, {
        key: 'negotiateDimension',
        value: function negotiateDimension(node) {
            var preferred = void 0,
                cumultiveExtraSpaceAmt = 0,
                alteredDim = void 0,
                nonAlteredDim = void 0,
                childrenLength = node.children.length;

            for (var index = 0; index < childrenLength; index++) {
                var fn = void 0,
                    extraSpaceAmt = void 0,
                    child = node.children[index];

                if (child._parentCut === 'h') {
                    fn = _utils.yExtraSpace;
                    alteredDim = 'height';
                    nonAlteredDim = 'width';
                } else {
                    fn = _utils.xExtraSpace;
                    alteredDim = 'width';
                    nonAlteredDim = 'height';
                }
                // if vertical then get extra height from other node and push it to the preferred node.
                // for horizontal cut the same thing is to be done with width
                if (child.isPreferred()) {
                    // push extra space in sink. Execute it when all non preferred space are computed.
                    preferred = child;

                    continue;
                }
                // reduce own height and save it in a var
                cumultiveExtraSpaceAmt += extraSpaceAmt = fn(child);
                child.boundBox[alteredDim] -= extraSpaceAmt;
                // update nonaltered dim from parent for any change which happened during negotiation
                child.boundBox[nonAlteredDim] = child.parent.boundBox[nonAlteredDim];

                this.negotiateDimension(child);
            }

            if (preferred) {
                preferred.boundBox[alteredDim] += cumultiveExtraSpaceAmt;
                preferred.boundBox[nonAlteredDim] = preferred.parent.boundBox[nonAlteredDim];
                this.negotiateDimension(preferred);
            }
        }
    }, {
        key: 'computePosition',
        value: function computePosition(node) {
            var _this2 = this;

            node.children.forEach(function (child, i, children) {
                var boundBox = (0, _utils.determineBoundBox)(child.boundBox, i, children, child);
                child.boundBox = boundBox;
                _this2.computePosition(child);
            });
        }
    }, {
        key: 'setHostPosition',
        value: function setHostPosition(node) {
            var _this3 = this;

            node.children.forEach(function (child) {
                LayoutModel.setHostSpatialConfig(child);
                _this3.setHostPosition(child);
            });
        }
    }, {
        key: 'negotiate',
        value: function negotiate() {
            this.negotiateDimension(this.root);
            this.computePosition(this.root);
            this.setHostPosition(this.root);
            return this;
        }
    }, {
        key: 'tree',
        value: function tree() {
            return this.root;
        }
    }], [{
        key: 'setHostSpatialConfig',
        value: function setHostSpatialConfig(node) {
            var boundBox = node.boundBox;
            if (node.model.host && node.model.host.setSpatialConfig) {
                node.model.host.setSpatialConfig(boundBox.left, boundBox.top, boundBox.width, boundBox.height);
            }
        }
    }]);

    return LayoutModel;
}();

exports.default = LayoutModel;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _node = __webpack_require__(5);

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _node2.default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function () {
    function Node(data) {
        _classCallCheck(this, Node);

        this.model = data;
        this.parent = null;
        this.children = [];

        this.boundBox = {
            top: null,
            left: null,
            height: null,
            width: null
        };

        this._id = (0, _utils.getNodeId)();
    }

    _createClass(Node, [{
        key: 'addChildren',
        value: function addChildren(entries) {
            var _children,
                _this = this;

            (_children = this.children).push.apply(_children, _toConsumableArray(entries));
            entries.forEach(function (e) {
                e.parent = _this;
            });
        }
    }, {
        key: 'isRoot',
        value: function isRoot() {
            return this.parent === null;
        }
    }, {
        key: 'isLeaf',
        value: function isLeaf() {
            return !this.children.length;
        }
    }, {
        key: 'getCutType',
        value: function getCutType() {
            return this.model.cut;
        }
    }, {
        key: 'isPreferred',
        value: function isPreferred() {
            return !!this.model.preferred;
        }
    }]);

    return Node;
}();

exports.default = Node;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable require-jsdoc */
var DummyComponent = function () {
    function DummyComponent(seed, dimensions) {
        _classCallCheck(this, DummyComponent);

        this.seed = seed;
        this.dimensions = dimensions;
        this.position = null;
    }

    _createClass(DummyComponent, [{
        key: "getLogicalSpace",
        value: function getLogicalSpace() {
            return {
                width: this.dimensions.width - 1 * this.seed,
                height: this.dimensions.height - 1 * this.seed
            };
        }
    }, {
        key: "setSpatialConfig",
        value: function setSpatialConfig(x, y, width, height) {
            this.position = { top: y, left: x };
            this.dimensions = { width: width, height: height };
        }
    }]);

    return DummyComponent;
}();

exports.default = DummyComponent;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dummyComponent = __webpack_require__(6);

var _dummyComponent2 = _interopRequireDefault(_dummyComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _dummyComponent2.default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Compares two strings in lowercase
 *
 * @export
 * @param {string} value the value to be compared
 * @param {string} compareTo whom the value would be compared
 * @return {boolean} true if values are equal
 */
function isEqual(value, compareTo) {
    if (typeof value !== 'string' || typeof compareTo !== 'string') {
        throw new TypeError('value and compareTo must be string');
    }
    return value.toLowerCase() === compareTo.toLowerCase();
}

var getNodeId = function () {
    var _uid = 0;
    return function () {
        return 'node-' + ++_uid;
    };
}();

function yExtraSpace(node) {
    var smallestHeight = 0;
    if (node.getCutType() === 'v') {
        smallestHeight = smallestExtraHeightHorizontally(node);
    } else if (node.getCutType() === 'h') {
        node.children.forEach(function (child) {
            smallestHeight += yExtraSpace(child);
        });
    } else if (node.model.host && node.model.host.getLogicalSpace) {
        var containerHeight = node.boundBox.height,
            hostHeight = node.model.host.getLogicalSpace().height;

        smallestHeight = containerHeight - hostHeight;
        if (smallestHeight < 0) {
            smallestHeight = 0;
        }
    } else {
        smallestHeight = 0;
    }
    return smallestHeight;
}

function smallestExtraHeightHorizontally(node) {
    var smallestHeight = Number.MAX_SAFE_INTEGER;
    node.children.forEach(function (child) {
        var h = yExtraSpace(child);
        if (h < smallestHeight) {
            smallestHeight = h;
        }
    });
    return smallestHeight;
}

function xExtraSpace(node) {
    var smallestWidth = 0;
    if (node.getCutType() === 'h') {
        smallestWidth = smallestExtraWidthVertically(node);
    } else if (node.getCutType() === 'v') {
        node.children.forEach(function (child) {
            smallestWidth += xExtraSpace(child);
        });
    } else if (node.model.host && node.model.host.getLogicalSpace) {
        var containerWidth = node.boundBox.width,
            hostWidth = node.model.host.getLogicalSpace().width;
        smallestWidth = containerWidth - hostWidth;
        if (smallestWidth < 0) {
            smallestWidth = 0;
        }
    } else {
        smallestWidth = 0;
    }
    return smallestWidth;
}

function smallestExtraWidthVertically(node) {
    var smallestWidth = Number.MAX_SAFE_INTEGER;
    node.children.forEach(function (child) {
        var w = xExtraSpace(child);
        if (w < smallestWidth) {
            smallestWidth = w;
        }
    });
    return smallestWidth;
}

function determineBoundBox(bb, i, arr, instance) {
    if (i) {
        // if not first sibling, take boundbox from previous sibling
        var lastSibling = arr[i - 1];
        return {
            width: bb.width,
            height: bb.height,

            top: instance._parentCut === 'h' ? lastSibling.boundBox.top + lastSibling.boundBox.height : lastSibling.boundBox.top,

            left: instance._parentCut === 'h' ? lastSibling.boundBox.left : lastSibling.boundBox.left + lastSibling.boundBox.width
        };
    }
    // if first sibling, take boundbox from parent
    return {
        width: bb.width,
        height: bb.height,
        top: instance.parent.boundBox.top,
        left: instance.parent.boundBox.left
    };
}

exports.isEqual = isEqual;
exports.getNodeId = getNodeId;
exports.yExtraSpace = yExtraSpace;
exports.xExtraSpace = xExtraSpace;
exports.determineBoundBox = determineBoundBox;

/***/ })
/******/ ]);
});
//# sourceMappingURL=layout.js.map