
import { render } from '@testing-library/react';

import breadcrumbs from './mock';
import Breadcrumbs from '.';
import { BrowserRouter } from 'react-router-dom';

const { ResizeObserver } = window;

beforeEach(() => {
  //@ts-ignore
  delete window.ResizeObserver;
  window.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));

  window.matchMedia = jest.fn().mockReturnValue({
    matches: true,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  });
});

afterEach(() => {
  window.ResizeObserver = ResizeObserver;
  jest.restoreAllMocks();
});

describe('Test <Breadcrumbs /> component', () => {
  it('should be render', () => {
    const { container } = render(
      <BrowserRouter>
        <Breadcrumbs list={breadcrumbs} />
      </BrowserRouter>
    );

    expect(container.getElementsByClassName('rf-breadcrumb')).toHaveLength(5);
  });
});
