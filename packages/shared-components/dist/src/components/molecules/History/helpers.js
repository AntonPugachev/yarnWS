"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onPathFilter = exports.statusValue = void 0;
exports.statusValue = {
    '0': 'default',
    '1': 'red',
    '2': 'yellow',
    '3': 'green',
    '4': 'blue'
};
/** Фильтруем историю компонента.
 * Изначально история свёрнута до одного элемента.
 * Первый элемент в свёрнутом состоянии является последним, ожидающим решения по согласованию, шагом.
 * @param {IRequestPath[]}  history массив элементов истории
 * @param {boolean}  expanded флаг состояния (открыто - закрыто)
 * @returns {IRequestPath[]} отфильтрованный массив элементов истории
 * */
var onPathFilter = function (history, expanded) {
    var find = history.findIndex(function (i) {
        return !i.date;
    });
    var step;
    if (find === -1) {
        step = history.length - 1;
    }
    else {
        step = find;
    }
    return expanded ? history : [history[step]];
};
exports.onPathFilter = onPathFilter;
