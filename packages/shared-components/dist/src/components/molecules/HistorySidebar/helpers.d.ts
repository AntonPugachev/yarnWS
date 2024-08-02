import { IRequestPath } from '../../../types/projects.types';
/** Функция сортировки истории для боковой истории
 * В свёрнутом состоянии компонента показываем 4 элемента. Если у нас всего 4 пункта, показыаем как есть
 * (в этом случае свёрнутая итосрия совпадает с развёрнутой). В ином случае - читать комментарии в теле функции
 * @param {IRequestPath[]}  path массив элементов истории
 * @returns {IRequestPath[]} отсортированный массив элементов истории
 */
export declare const useSortPaths: (path: IRequestPath[], isOpen: boolean) => IRequestPath[];
