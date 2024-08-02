"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
// константы имён папок и файлов
var constants_1 = require("./constants");
// Функция форматирования содержимого файла, создания индекса иконок
var utils_1 = require("./utils");
// ---------------------------------------------------------------------------------------------------------------------
// Шаг 1. Создаём .tsx файлы со компонентами иконок
// Проверяем наличие папки, где будут лежать обработанные файлы - resultDir
// Есть есть, то удаляем её
if (fs_1.default.existsSync(constants_1.RESULTDIR)) {
    // recursive - флаг на удаление папки с содержимым
    fs_1.default.rmdirSync(constants_1.RESULTDIR, { recursive: true });
}
// Если нет папки для результата, то создаём её
fs_1.default.mkdirSync(constants_1.RESULTDIR); // TODO: переделать на __dirname
// Функция, которая предбразует svg файлы в react компоненты
var makeReactFiles = function (node, suffix) {
    if (suffix === void 0) { suffix = ''; }
    // Шаг 1. Проходим по каждому элементу. Флаг withFileTypes позволяет определить тип элемента -
    // папка или файл
    fs_1.default.readdirSync(node, { withFileTypes: true }).forEach(function (item) {
        // Определяем тип элемента. Если элемент является папкой, пройтись по его содержимому
        if (item.isDirectory()) {
            makeReactFiles("".concat(node, "/").concat(item.name), item.name);
        }
        else {
            // Шаг 2. Создаём .tsx файл с отформатированным именем
            // Удаляем пробелы, если есть, ставим расширение ".tsx"
            var fileNameNoWhiteSpace = "".concat(suffix).concat(item.name.replace(/\s+/g, ''));
            var fileNameTSX = fileNameNoWhiteSpace.substr(0, fileNameNoWhiteSpace.lastIndexOf('.')) + '.tsx';
            fs_1.default.writeFileSync("".concat(constants_1.RESULTDIR, "/").concat(fileNameTSX), '');
            // Шаг 3. Форматируем содержимое файла
            var fileContent = fs_1.default.readFileSync("".concat(node, "/").concat(item.name), 'utf8');
            fs_1.default.appendFileSync("".concat(constants_1.RESULTDIR, "/").concat(fileNameTSX), (0, utils_1.formatContent)(fileContent));
        }
    });
};
// Передаём в функцию данные иконок, скачанных в папку icons
// Преобразованные файлы сохраняются в папку resultDir
makeReactFiles(constants_1.ICONDATA);
// ---------------------------------------------------------------------------------------------------------------------
// Шаг 2. Создаём индекс со списком полученных иконок
// Проверяем наличие индекса с иконками
if (fs_1.default.existsSync(constants_1.INDEXICON)) {
    // Если есть - удаляем, чтобы не перезатереть данные
    fs_1.default.rmSync(constants_1.INDEXICON, { recursive: true });
}
// Если нет индекса, то создаём его
fs_1.default.appendFileSync(constants_1.INDEXICON, '', 'utf8');
// Функция, которая предбразует svg файлы в react компоненты
var makeIndexIcon = function (content) {
    // Проходим по каждому файлу с рект иконками
    fs_1.default.readdirSync(content).forEach(function (filePath) {
        // По каждому файлу добавляем импорт и экспорт
        fs_1.default.appendFileSync(constants_1.INDEXICON, (0, utils_1.makeImportExportIcon)(filePath));
    });
};
makeIndexIcon(constants_1.RESULTDIR);
// ---------------------------------------------------------------------------------------------------------------------
// Шаг 3. Создаём стори с иконками
// Проверяем наличие файла со стори, и удаляем его
if (fs_1.default.existsSync(constants_1.STORYPATH)) {
    // Удаляем файл во избежание ошибок
    fs_1.default.rmSync(constants_1.STORYPATH, { recursive: true });
}
// Создаём файл для стори с иконками
fs_1.default.appendFileSync(constants_1.STORYPATH, '', 'utf8');
// Функция, которая заполняет стори с иконками
(0, utils_1.makeIconStory)(constants_1.RESULTDIR);
