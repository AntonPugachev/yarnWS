
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import EditMode from './EditMode';
import userEvent from '@testing-library/user-event';

describe('Test <EditMode /> component', () => {
  it('should render EditMode component', () => {
    const defaultValue = 'default value';
    render(<EditMode defaultValue={defaultValue} />);

    expect(screen.getByText(defaultValue)).toBeInTheDocument();
  });

  it('should be pass defaultEdited', () => {
    const { container } = render(<EditMode defaultValue="default value" defaultEdited />);

    expect(container.getElementsByClassName('rf-edit-mode--edit')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-edit-mode__content')).toHaveLength(0);
  });

  it('should call onChange', () => {
    const onChange = jest.fn();
    render(<EditMode defaultValue="" onChange={onChange} />);

    fireEvent.click(screen.getByRole('button'));

    const input = screen.getByRole('textbox');
    const valueType = 'World';

    userEvent.type(input, valueType);
  
    expect(onChange).toBeCalled();
    expect(input).toHaveValue(valueType);
  });

  it('should call onSave', () => {
    const onSave = jest.fn();
    render(<EditMode defaultValue="" onSave={onSave} />);

    fireEvent.click(screen.getByRole('button'));

    const input = screen.getByRole('textbox');
    const valueType = 'World';

    userEvent.type(input, valueType);

    //TODO: как в Signification
    // expect(onSave).toHaveBeenCalled();
    expect(input).toHaveValue(valueType);
  });
});
