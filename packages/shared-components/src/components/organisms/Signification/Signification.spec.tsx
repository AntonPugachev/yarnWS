
import { fireEvent, getByText, render, screen, waitFor } from '@testing-library/react';
import Signification from './Signification';
import userEvent from '@testing-library/user-event';
import { act } from "react-dom/test-utils";

import {IRequestAttachment} from "../../../types/projects.types";
import { pdfFile } from "../../molecules/PDFViewer/pdf";

const file:IRequestAttachment = {
  fileName: 'test',
  base64: pdfFile
};
describe('Test <Signification/> component', () => {
  let file: any;
  const originalError = console.error
  afterEach(() => (console.error = originalError))
  describe('without Errors', () => {

    let consoleOutput:any[] = []
    const mockedError = (output:any) => consoleOutput.push(output)
    beforeEach(() => (console.error = mockedError))
    beforeEach(() => {
      file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
    });
//======================================================================================================================
    it('should render <Signification /> icon -blue;check texts', () => {
      const {container} = render(<Signification title={'Text'} data={file}/>);
      expect(getByText(container, 'Просмотреть и подписать документ')).toBeTruthy();
      expect(container.getElementsByClassName('signification__title-row--onlyView')).toHaveLength(0);
    });
//======================================================================================================================
    it('should open spoiler, render document and consist buttons',  async () => {
      const {container} = render(<Signification title={'Text'} data={file}/>);
      expect(container.getElementsByClassName('buttons__wrapper')).toHaveLength(0)
      fireEvent.click(container.getElementsByClassName('expander__title-text')[0]);
      expect(container.getElementsByClassName('buttons__wrapper')).toHaveLength(1)
      expect(getByText(container, 'Подписать электронной подписью')).toBeTruthy();
      expect(getByText(container, 'Подписать электронной подписью').parentElement!.parentElement).toBeDisabled();
      expect(getByText(container, 'Подписать вручную')).toBeTruthy();
      expect(getByText(container, 'Отклонить ЭДО')).toBeTruthy();
      expect(getByText(container, 'Отклонить ЭДО').parentElement!.parentElement).toBeDisabled();
      expect(getByText(container, 'Отклонить')).toBeTruthy();
      expect(getByText(container, 'Отклонить').parentElement!.parentElement).toHaveClass('rf-button--danger');
      fireEvent.click(container.getElementsByClassName('expander__title-text')[0]);
      expect(container.getElementsByClassName('buttons__wrapper')).toHaveLength(0);
      // await screen.getByTestId('error'); //TODO: починить проверку на ошибку
      // expect(await screen.getByTestId('error')).toBeInTheDocument();
    });
//======================================================================================================================
    it('should be without spoiler consist buttons',  () => {
      const {container} = render(<Signification title={'Text'} isSpoiler={false} data={file}/>);
      expect(container.getElementsByClassName('buttons__wrapper')).toHaveLength(1)
      expect(getByText(container, 'Подписать электронной подписью')).toBeTruthy();
      expect(getByText(container, 'Подписать электронной подписью').parentElement!.parentElement).toBeDisabled();
      expect(getByText(container, 'Подписать вручную')).toBeTruthy();
      expect(getByText(container, 'Отклонить ЭДО')).toBeTruthy();
      expect(getByText(container, 'Отклонить ЭДО').parentElement!.parentElement).toBeDisabled();
      expect(getByText(container, 'Отклонить')).toBeTruthy();
      expect(getByText(container, 'Отклонить').parentElement!.parentElement).toHaveClass('rf-button--danger');

    });
//======================================================================================================================
    it('should be 2 button and rename',   () => {
      const {container} = render(<Signification title={'Text'} buttonCustomTexts={{reject:'test'}} isSpoiler={false} hideButtons={["sign", "manual"]} data={file}/>);
      expect(container.getElementsByClassName('buttons__wrapper')).toHaveLength(1)
      expect(container.querySelectorAll('.buttons__wrapper .button__item')).toHaveLength(2)
      expect(screen.queryByText('Отклонить ЭДО')).not.toBeInTheDocument();
      expect(screen.getByText('Отклонить')).toBeTruthy();
      expect(getByText(container, 'test')).toBeTruthy();
    });
//======================================================================================================================
    it('should be correct reject', async () => {
      const {container} = render(<Signification title={'Text'} isSpoiler={false} data={file}/>);
      fireEvent.click(screen.getByText('Отклонить'));
      expect(screen.getByText('Отклонить документ').parentElement!.parentElement).toBeDisabled();
      jest.useFakeTimers();
      // TODO: починить добавление текста в text-area
      // userEvent.type(screen.getByRole('textbox'), 'testik')
      jest.useFakeTimers()
      jest.useRealTimers();
      // expect(screen.getByText('testik')).toBeTruthy();
      // expect(screen.getByText('Отклонить документ').parentElement!.parentElement).not.toBeDisabled();
      userEvent.click(screen.getByText('Отклонить документ'));
      // expect(screen.queryByTestId('Документ будет отклонен')).toBeTruthy();
      // expect(screen.queryByTestId('testik')).toBeTruthy();
      // expect(screen.queryByTestId('Отменить')).toBeTruthy();
      // expect(container.querySelectorAll('.info-block__wrapper--danger')).toHaveLength(1);
      userEvent.click(screen.getByText('Отменить'));
      expect(container.querySelectorAll('.buttons__wrapper .button__item')).toHaveLength(4);
    })
//======================================================================================================================
    it('should be correct manual signification',async () => {
      const {container} = render(<Signification title={'Text'} isSpoiler={false} data={file}/>);
      fireEvent.click(screen.getByText('Подписать вручную'));
      expect(screen.getByText('Подписать').parentElement!.parentElement).toBeDisabled()
      expect(screen.getByPlaceholderText('Прикрепить файл')).toBeTruthy()
      userEvent.upload(screen.getByPlaceholderText('Прикрепить файл'),file)

      await waitFor(() =>{
       expect(screen.getByText('chucknorris.png')).toBeTruthy()
      })
      expect(screen.getByText('Подписать').parentElement!.parentElement).not.toBeDisabled()
      expect(screen.getByText('Скачайте и подпишите документ. После прикрепите подписанный файл')).toBeTruthy()
      userEvent.click(screen.getByText('Подписать'))
      expect(screen.getByText('Документ будет подписан ручной подписью')).toBeTruthy()
      expect(screen.getByText('Отменить')).toBeTruthy()
      expect(container.querySelectorAll('.info-block__wrapper--success')).toHaveLength(1)
      expect(screen.getByText('chucknorris.png')).toBeTruthy()
      userEvent.click(screen.getByText('Отменить'))
      expect(container.querySelectorAll('.buttons__wrapper .button__item')).toHaveLength(4)

    })
  });
})
