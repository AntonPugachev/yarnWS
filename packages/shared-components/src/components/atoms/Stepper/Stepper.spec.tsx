import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Stepper from './Stepper';
import { stepper } from './mock';

describe('Test <Stepper /> component', () => {
  it('should be render Stepper', () => {
    const { container } = render(
      <Stepper value={0} onChange={jest.fn}>
        {stepper.map(step => (
          <Stepper.Step key={step.index} {...step}>
            {step.children}
          </Stepper.Step>
        ))}
      </Stepper>
    );

    expect(container.getElementsByClassName('rf-stepper--horizontal')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-step__variant--horizontal')).toHaveLength(5);
    expect(container.getElementsByClassName('rf-step')).toHaveLength(5);

    expect(container.getElementsByClassName('rf-step--current').item(0)).toHaveTextContent('Выбор товаров');
  });

  it('should pass value', () => {
    const { container, rerender } = render(
      <Stepper value={0} onChange={jest.fn}>
        {stepper.map(step => (
          <Stepper.Step key={step.index} {...step}>
            {step.children}
          </Stepper.Step>
        ))}
      </Stepper>
    );
    
    expect(container.getElementsByClassName('rf-step--current').item(0)).toHaveTextContent('Выбор товаров');

    rerender(
      <Stepper value={2} onChange={jest.fn}>
        {stepper.map(step => (
          <Stepper.Step key={step.index} {...step}>
            {step.children}
          </Stepper.Step>
        ))}
      </Stepper>
    );

    expect(container.getElementsByClassName('rf-step--completed')).toHaveLength(2);
    expect(container.getElementsByClassName('rf-step--current').item(0)).toHaveTextContent('Оформление заказа (warning)');
  });

  it('should be call onChange', () => {
    const onChange = jest.fn();

    render(
      <Stepper value={0} onChange={onChange}>
        {stepper.map(step => (
          <Stepper.Step key={step.index} {...step}>
            {step.children}
          </Stepper.Step>
        ))}
      </Stepper>
    );

    fireEvent.click(screen.getByText('Корзина'));

    expect(onChange).toBeCalled();
  });

  it('should be readonly', () => {
    const onChange = jest.fn();

    const { container } = render(
      <Stepper value={0} onChange={onChange} readonly>
        {stepper.map(step => (
          <Stepper.Step key={step.index} {...step}>
            {step.children}
          </Stepper.Step>
        ))}
      </Stepper>
    );

    expect(container.getElementsByClassName('rf-step--readonly')).toHaveLength(5);

    fireEvent.click(screen.getByText('Корзина'));

    expect(onChange).toBeCalledTimes(0);
  });

  it('should be pass variant', () => {
    const { container } = render(
      <Stepper value={0} onChange={jest.fn} variant='vertical'>
        {stepper.map(step => (
          <Stepper.Step key={step.index} {...step}>
            {step.children}
          </Stepper.Step>
        ))}
      </Stepper>
    );

    expect(container.getElementsByClassName('rf-stepper--vertical')).toHaveLength(1);
  });

  it('should be save last completed step', () => {
    const { container, rerender } = render(
      <Stepper value={0} onChange={jest.fn}>
        {stepper.map(step => (
          <Stepper.Step key={step.index} {...step}>
            {step.children}
          </Stepper.Step>
        ))}
      </Stepper>
    );

    rerender(
      <Stepper value={3} onChange={jest.fn}>
        {stepper.map(step => (
          <Stepper.Step key={step.index} {...step}>
            {step.children}
          </Stepper.Step>
        ))}
      </Stepper>
    );

    expect(container.getElementsByClassName('rf-step--completed')).toHaveLength(3);

    rerender(
      <Stepper value={0} onChange={jest.fn}>
        {stepper.map(step => (
          <Stepper.Step key={step.index} {...step}>
            {step.children}
          </Stepper.Step>
        ))}
      </Stepper>
    );

    expect(container.getElementsByClassName('rf-step--completed')).toHaveLength(3);
  });
})