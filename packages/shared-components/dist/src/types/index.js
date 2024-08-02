"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variants = exports.variantsClassic = void 0;
exports.isCustomOption = isCustomOption;
function isCustomOption(option) {
    return option.__isNew__;
}
exports.variantsClassic = [
    'default',
    'blue',
    'green',
    'yellow',
    'red',
];
exports.variants = [
    'default',
    'blue',
    'lightBlue',
    'turquoise',
    'green',
    'yellow',
    'red',
    'magenta',
    'purple',
    'violet',
];
