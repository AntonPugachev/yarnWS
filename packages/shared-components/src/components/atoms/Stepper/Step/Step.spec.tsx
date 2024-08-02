import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Step from './Step';

describe('Test <Step /> component', () => {
  it('should be render Step', () => {
    const { container } = render(<Step index={0} status="default">children</Step>);

    expect(container.getElementsByClassName('rf-step--default')).toHaveLength(1);
    expect(screen.getByText('children')).toBeInTheDocument();
  });

  it('should be pass status', () => {
    const { container, rerender } = render(<Step index={0} status="default">children</Step>);

    expect(container.getElementsByClassName('rf-step--default')).toHaveLength(1);

    rerender(<Step index={0} status="error">children</Step>);
    expect(container.getElementsByClassName('rf-step--error')).toHaveLength(1);

    rerender(<Step index={0} status='inactive'>children</Step>);
    expect(container.getElementsByClassName('rf-step--inactive')).toHaveLength(1);

    rerender(<Step index={0} status='warning'>children</Step>);
    expect(container.getElementsByClassName('rf-step--warning')).toHaveLength(1);
  });

  it('should be disabled', () => {
    const onClick = jest.fn();
    const { container } = render(<Step index={0} status="default" disabled onClick={onClick}>children</Step>);

    expect(container.getElementsByClassName('rf-step--disabled')).toHaveLength(1);

    fireEvent.click(screen.getByText('children'));

    expect(onClick).toBeCalledTimes(0);
  });

  it('should be pass onClick', () => {
    const onClick = jest.fn();
    render(<Step index={0} status="default" onClick={onClick}>children</Step>);

    fireEvent.click(screen.getByText('children'));

    expect(onClick).toBeCalled();
  });
})