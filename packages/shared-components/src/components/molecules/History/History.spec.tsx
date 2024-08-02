
import {fireEvent, render, screen} from '@testing-library/react';
import History from "./History";
import {attachments, pathsHistory, pathsUZADO} from "./mock";

describe('Test <History/> component', () => {
  it('should render History', () => {
    render(<History history={pathsHistory} />);
    expect(screen.getByText('Смотреть всё')).toBeInTheDocument();
  })

  it('should render History with attachments', () => {
    render(<History history={pathsHistory} attachments={attachments} />);
    expect(screen.getByText('Приложенные файлы')).toBeInTheDocument();
  })

  it('should render History with UZADO variant', () => {
    render(<History history={pathsUZADO} isUZADO />);
    fireEvent.click(screen.getByText('Смотреть всё'));
    expect(screen.getByText('Заместитель руководителя департамента')).toBeInTheDocument();
  })
})
