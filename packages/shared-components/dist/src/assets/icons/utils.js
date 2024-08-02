"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeIconStory = exports.makeImportExportIcon = exports.formatContent = void 0;
var fs_1 = __importDefault(require("fs"));
var constants_1 = require("./constants");
// Функция приведения названий атрибутов html к именам для react компонентов
// Убирает в названии атрибута тире и делает из строчной буквы заглавную в стие cameCase
function parsePropToAttribute(str) {
    var attr = '';
    var isTag = false;
    var isAttr = false;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === '<') {
            isTag = true;
            attr += str[i];
            continue;
        }
        else if (str[i] === '>') {
            isTag = false;
            attr += str[i];
        }
        if (isTag) {
            if (str[i] === ' ' && !isAttr) {
                isAttr = true;
            }
            if (isAttr) {
                if (str[i] === '=') {
                    isAttr = false;
                    attr += str[i];
                    continue;
                }
                if (str[i] === '-') {
                    attr += str[i + 1].toUpperCase();
                    i++;
                    continue;
                }
            }
            attr += str[i];
        }
    }
    return attr;
}
var formatContent = function (content) {
    var regex_pipeline = [
        [
            /width=("\d+")/mg,
            '\n' +
                '      {...props}\n' +
                '      width={iconSize[size]}'
        ],
        [
            /height=("\d+")/mg,
            '\n' +
                '      height={iconSize[size]}\n' +
                '      '
        ],
        [
            /(fill="#8A96A8")/mg,
            '\n' +
                '      fill="currentColor"\n' +
                '      '
        ]
    ];
    regex_pipeline.forEach(function (_a) {
        var regex_value = _a[0], replace_value = _a[1];
        if (typeof replace_value === 'string') {
            content = content.replace(regex_value, replace_value);
        }
    });
    var imports = 'import React from \'react\';\n' +
        'import { IIconProps, Size } from \'../../../types\';\n' +
        'import { iconSize } from \'../../../utils/helpers\';\n' +
        '/* eslint-disable max-len */\n';
    var opening = '\nexport default ({ size = \'xs\', ...props }: IIconProps) => {\n' +
        '  return (\n' +
        '      ';
    var ending = '  );\n' +
        '};\n';
    // Вызывем функцию пребразователь на содержимом svg
    return "".concat(imports).concat(opening).concat(parsePropToAttribute(content)).concat(ending);
};
exports.formatContent = formatContent;
var makeImportExportIcon = function (fileName) {
    var name = fileName.substr(0, fileName.lastIndexOf('.')) + '';
    return "import ".concat(name, " from './assets/icons/resultDir/").concat(name, "';\nexport { ").concat(name, " };\n\n");
};
exports.makeImportExportIcon = makeImportExportIcon;
var makeIconStory = function (content) {
    var exports = 'import React from \'react\';\n' +
        'import { StoryFn as Story } from \'@storybook/react\';\n' +
        'import { StoryDocs, StoryDocsH1 } from \'../../storybook\';\n' +
        'import { withDesign } from \'storybook-addon-designs\';\n' +
        'import \'./Icons.style.scss\';\n';
    var iconArray = [];
    fs_1.default.readdirSync(content).forEach(function (filePath) {
        // Собираем имена файлов в массив
        var name = filePath.substr(0, filePath.lastIndexOf('.')) + '';
        iconArray.push(name);
    });
    var iconImports = iconArray.map(function (name) { return "import ".concat(name, " from '").concat(constants_1.ICONPATH, "/").concat(name, "';"); }).join('\n');
    var storyExport = '\n' +
        'export default {\n' +
        '  title: \'icons,illustrations/Icons\',\n' +
        '  \n' +
        '};\n';
    var storyOpening = '\n' +
        'export const Demo: Story = () => {\n' +
        '  const onCopy = (event: React.MouseEvent, iconName: string) => {\n' +
        '    event.stopPropagation();\n' +
        '    navigator.clipboard.writeText(iconName);\n' +
        '  };\n' +
        '\n' +
        '  return (\n' +
        '    <StoryDocs>\n' +
        '      <StoryDocsH1>Icons</StoryDocsH1>\n' +
        '      <div className=\'iconsWrapper\'>\n' +
        '        ';
    var iconsJSX = iconArray.map(function (element) { return "        <div key='".concat(element, "' className='container'>\n          <div className='iconContainer'><").concat(element, " /></div>\n          <div className='titleWrapper'>\n              ").concat(element, "\n          </div>\n          <div\n            className='copyStyle'\n            onClick={(event) => onCopy(event, '").concat(element, "')}\n          >\n            <AllCopy />\n          </div>\n        </div>"); }).join('\n');
    var storyEnding = '      </div>\n' +
        '    </StoryDocs>\n' +
        '  );\n' +
        '};\n' +
        '\n' +
        'Demo.parameters = {\n' +
        '  design: {\n' +
        '    type: \'figma\',\n' +
        '    url: \'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/?node-id=8%3A15635\',\n' +
        '  },\n' +
        '  actions: { disabled: true },\n' +
        '  controls: { disabled: true }\n' +
        '};\n';
    var result = "".concat(exports, "\n").concat(iconImports).concat(storyExport).concat(storyOpening).concat(iconsJSX).concat(storyEnding);
    fs_1.default.appendFileSync(constants_1.STORYPATH, result, 'utf8');
};
exports.makeIconStory = makeIconStory;
