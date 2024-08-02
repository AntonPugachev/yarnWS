
import { render, screen } from '@testing-library/react';

import breadcrumbs from '../mock';
import Breadcrumb from '.';
import { BrowserRouter } from 'react-router-dom';

describe('Test <Breadcrumb /> component', () => {
  it('should be render', () => {
    const { container } = render(
      <BrowserRouter>
        <Breadcrumb {...breadcrumbs[0]}>
          {breadcrumbs[0].children}
        </Breadcrumb>
      </BrowserRouter>
    );


    expect(container.getElementsByClassName('rf-breadcrumb__icon')).toHaveLength(1);
    expect(screen.getByText('Page 1')).toBeInTheDocument();
  });

  it('should be pass isLast', () => {
    const { container } = render(
      <BrowserRouter>
        <Breadcrumb
          {...breadcrumbs[0]}
          isLast
        >
          {breadcrumbs[0].children}
        </Breadcrumb>
      </BrowserRouter>
    );

    expect(container.getElementsByClassName('rf-breadcrumb__icon')).toHaveLength(0);
  });

  it('should be pass isHidden', () => {
    const { container } = render(
      <BrowserRouter>
        <Breadcrumb
          {...breadcrumbs[0]}
          isHidden
        >
          {breadcrumbs[0].children}
        </Breadcrumb>
      </BrowserRouter>
    );

    expect(container.getElementsByClassName('rf-breadcrumb__wrap--hidden')).toHaveLength(1);
  });

  it('should be pass href', () => {
    render(
      <BrowserRouter>
        <Breadcrumb
          {...breadcrumbs[0]}
        >
          {breadcrumbs[0].children}
        </Breadcrumb>
      </BrowserRouter>
    );

    expect(screen.getByRole('link')).toHaveAttribute('href', breadcrumbs[0].href);
  });

  it('should render with long text (40 charts)', () => {
    render(
      <BrowserRouter>
        <Breadcrumb
          {...breadcrumbs[2]}
          isHidden
        >
          {breadcrumbs[2].children}
        </Breadcrumb>
      </BrowserRouter>
    );

    const shortText = `${(breadcrumbs[2].children as string).slice(0, 40)}...`;

    expect(screen.getByText(shortText)).toBeInTheDocument();
  });
});
