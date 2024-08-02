"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSortPaths = void 0;
/** Функция сортировки истории для боковой истории
 * В свёрнутом состоянии компонента показываем 4 элемента. Если у нас всего 4 пункта, показыаем как есть
 * (в этом случае свёрнутая итосрия совпадает с развёрнутой). В ином случае - читать комментарии в теле функции
 * @param {IRequestPath[]}  path массив элементов истории
 * @returns {IRequestPath[]} отсортированный массив элементов истории
 */
var useSortPaths = function (path, isOpen) {
    /** Если пунктов в истори 4 или меньше, показываем без изменений */
    if (path.length <= 4) {
        return path;
    }
    else if (!isOpen) {
        /** В ином случае (элементов >4) и компонент свёрнут, действует логика ниже */
        /** Необходимо выяснить есть ли в списке пользователь, участвующий в согласовании ("Вы")
             * В этом случае, такой пользователь в быстром просмотре (свёрнутом состоянии компонента)
             * должен видеть 1 согласующего до него и 1 согласующего после него (если они есть)
             */
        var indexOfMe = path.findIndex(function (item) { return item.user[0].fullName === 'Вы'; });
        /** Обработчик случая, когда просматривающий согласование не являются согласующим.
             * indexOfMe элемента нет в списке массива
             */
        if (indexOfMe === -1) {
            /** В случае отсутствия "Вы" фокус отображения смещается на первый несогласованный шаг.
                 * В этом шаге выясняем есть ли хоть один несогласованный шаг.
                 */
            var indexOfReconciliation = path.findIndex(function (item) { return item.criticality === '0'; });
            /** Если все шаги согласованы, показываем последние 4 результата согласования цепочки */
            if (indexOfReconciliation === -1) {
                var lastFourResults = path.slice(-4);
                return lastFourResults;
            }
            /** Если все шаги не согласованы (заявка в начале согласования), показываем первые 4 шага согласования цепочки */
            if (indexOfReconciliation === 0) {
                var firstFourSteps = path.slice(0, 4);
                return firstFourSteps;
            }
            /** Если несогласованый шаг - предпоследний, показываем 2 результата до него, и один после */
            if (indexOfReconciliation === path.length - 2) {
                var fourSteps = path.slice(indexOfReconciliation - 2, indexOfReconciliation + 2);
                return fourSteps;
            }
            /** Если несогласованый шаг - последний, показываем 3 результата до него */
            if (indexOfReconciliation === path.length - 1) {
                var fourSteps = path.slice(-4);
                return fourSteps;
            }
            /** Во всех остальных случаях показываем 1 шаг до несогласованного шага, и два после (если такие есть) */
            var results_1 = path
                .slice(indexOfReconciliation - 1, indexOfReconciliation + 3)
                .filter(function (item) { return !!item; });
            return results_1;
        }
        /** Пользователь "Вы" присутствует в списке, показываем шаг до его решения, и 2 шага после его решения
         * (если они есть)
         */
        var results = path
            .slice(indexOfMe - 1, indexOfMe + 2)
            .filter(function (item) { return !!item; });
        return results;
    }
    /** Во всех остальных случаях компонент развёрнут, показываем историю полностью с самого начала */
    return path;
};
exports.useSortPaths = useSortPaths;
