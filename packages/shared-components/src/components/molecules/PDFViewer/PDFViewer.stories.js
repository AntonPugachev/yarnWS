"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sPDFViewer = void 0;
var PDFViewer_1 = require("./PDFViewer");
var Story_1 = require("../../storybook/Story");
var StoryItem_1 = require("../../storybook/StoryItem");
var pdf_1 = require("./pdf");
exports.default = {
    title: 'components/не проверено/PDFViewer',
    component: PDFViewer_1.default
};
var sPDFViewer = function () {
    var file = {
        fileName: 'test',
        base64: pdf_1.pdfFile
    };
    return (<Story_1.default name='Просмотр PDF' description='Компонент просматривает и листает pdf'>

      <div style={{ width: '400px' }}>
        <StoryItem_1.default description='Ширина блока меньше ширины старницы pdf'>
          <PDFViewer_1.default file={file} url={'test'}/>
        </StoryItem_1.default>
      </div>

      <StoryItem_1.default description='Ширина блока больше ширины старницы pdf'>
        <PDFViewer_1.default file={file}/>
      </StoryItem_1.default>

    </Story_1.default>);
};
exports.sPDFViewer = sPDFViewer;
