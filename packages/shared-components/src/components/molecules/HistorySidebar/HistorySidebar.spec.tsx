import  { CSSProperties } from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import HistorySidebar from "../HistorySidebar";

import { history } from './mock';
import { attachments } from '../History/mock';

describe('Test <HistorySidebar /> component', () => {
  it('should render HistorySidebar', () => {
    const { container } = render(<HistorySidebar history={history} />);

    expect(container.getElementsByClassName('rf-history-sidebar__item')).toHaveLength(5);
  });

  it('should be defaultOpened', () => {
    const { container } = render(<HistorySidebar history={history} defaultOpened />);

    expect(container.getElementsByClassName('rf-history-sidebar--opened')).toHaveLength(1);
  });

  it('should be pass attachments', () => {
    const { container } = render(<HistorySidebar history={history} attachments={attachments} />);

    expect(container.getElementsByClassName('rf-history-sidebar__attachments')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-history-sidebar__attachments-empty')).toHaveLength(0);
  });

  it('should be opened', () => {
    const { container } = render(<HistorySidebar history={history} attachments={attachments} />);

    const btn = container.getElementsByClassName('rf-history-sidebar__btn').item(0);

    if (!btn) {
      fail('Нет элемента');
    }

    fireEvent.click(btn);

    expect(container.getElementsByClassName('rf-history-sidebar__item-info-icon')).toHaveLength(2);
    expect(container.getElementsByClassName('rf-history-sidebar__item')).toHaveLength(6);
    expect(container.getElementsByClassName('rf-history-sidebar--opened')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-history-sidebar__title')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-history-sidebar__attachments-title')).toHaveLength(1);
  });


  it('should be useHeightOffsetTop', () => {
    const { container } = render(<HistorySidebar history={history} useHeightOffsetTop />);

    expect(container.getElementsByClassName('rf-history-sidebar--default')).toHaveLength(0);
  });

  it('should be pass style', () => {
    const { container } = render(<HistorySidebar history={history} style={{ marginTop: '10px' }} />);

    expect(container.getElementsByClassName('rf-history-sidebar').item(0)).toHaveStyle({ marginTop: '10px' });
  });

  it('should be pass activeStyle', () => {
    const activeStyle = { position: 'relative', top: 0, right: 0 } as CSSProperties;
    const { container } = render(<HistorySidebar history={history} activeStyle={activeStyle} />);

    expect(container.getElementsByClassName('rf-history-sidebar').item(0)).not.toHaveStyle({});
    const btn = container.getElementsByClassName('rf-history-sidebar__btn').item(0);

    if (!btn) {
      fail('Нет элемента');
    }

    fireEvent.click(btn);

    expect(container.getElementsByClassName('rf-history-sidebar').item(0)).toHaveStyle(activeStyle as Record<string, unknown>);
  });

  it('should be show +3', () => {
    const { container } = render(<HistorySidebar history={history} userId="8" />);

    expect(container.getElementsByClassName('rf-history-sidebar__item--prev-count')).toHaveLength(1);
    expect(screen.getByText('+3')).toBeInTheDocument();
  });

  it('should be pass userId in start history', () => {
    const { container } = render(<HistorySidebar history={history} userId="2" />);

    expect(container.getElementsByClassName('rf-history-sidebar__item')).toHaveLength(4);
    expect(container.getElementsByClassName('rf-history-sidebar__item--prev-count')).toHaveLength(0);
  });

  it('should be pass userId', () => {
    const { container } = render(<HistorySidebar history={history} userId="4" />);

    expect(container.getElementsByClassName('rf-history-sidebar__item')).toHaveLength(5);
    expect(screen.getByText('+1')).toBeInTheDocument();
    const btn = container.getElementsByClassName('rf-history-sidebar__btn').item(0);

    if (!btn) {
      fail('Нет элемента');
    }

    fireEvent.click(btn);

    expect(screen.getByText('Вы')).toBeInTheDocument();
    expect(screen.getByText('Согласовано')).toBeInTheDocument();
    expect(screen.getByText('Отклонено')).toBeInTheDocument();
    expect(screen.getByText('Подписано ЭП')).toBeInTheDocument();
    expect(container.getElementsByClassName('rf-history-sidebar__item-me')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-history-sidebar__item')).toHaveLength(6);
    expect(container.getElementsByClassName('rf-history-sidebar__item--green')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-history-sidebar__item--yellow')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-history-sidebar__item--red')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-history-sidebar__item-comment')).toHaveLength(1);
  });

  it('should be all approveDateTime are filled', () => {
    const { container } = render(
      <HistorySidebar history={history.map((h) => ({ ...h, approveDateTime: '+48629-10-11T19:06:41.000+0000' }))} />
    );

    expect(container.getElementsByClassName('rf-history-sidebar__item')).toHaveLength(4);
    expect(container.getElementsByClassName('rf-history-sidebar__item--prev-count')).toHaveLength(1);
    expect(screen.getByText('+3')).toBeInTheDocument();
    const btn = container.getElementsByClassName('rf-history-sidebar__btn').item(0);

    if (!btn) {
      fail('Нет элемента');
    }  

    fireEvent.click(btn);

    expect(screen.getByText('Согласовано')).toBeInTheDocument();
    expect(screen.getByText('Отклонено')).toBeInTheDocument();
    expect(screen.getByText('Подписано ЭП')).toBeInTheDocument();
    expect(container.getElementsByClassName('rf-history-sidebar__item--prev-count')).toHaveLength(0);
    expect(container.getElementsByClassName('rf-history-sidebar__item')).toHaveLength(6);
    expect(container.getElementsByClassName('rf-history-sidebar__item--green')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-history-sidebar__item--yellow')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-history-sidebar__item--red')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-history-sidebar__item-comment')).toHaveLength(1);
  });
})