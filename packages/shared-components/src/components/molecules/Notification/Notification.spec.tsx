
import { fireEvent, render, screen } from '@testing-library/react';
import Notification from './Notification';

describe('Test <Notification/> component', () => {
  it('should render Notification', () => {
    const { container } = render(<Notification item={{ title: 'title' }} />);
    expect(container.getElementsByClassName('rf-notification')).toHaveLength(1);
  });

  it('should render Notification with message', () => {
    render(<Notification item={{ title: 'title', message: 'message' }} />);
    expect(screen.queryByText('message')).toBeInTheDocument();
    expect(screen.queryByText('title')).toBeInTheDocument();
  });

  it('should render Notification default', () => {
    const { container } = render(<Notification item={{ title: 'title' }} />);
    expect(container.getElementsByClassName('rf-notification--default')).toHaveLength(1);
  });

  it('should render Notification green', () => {
    const { container } = render(<Notification item={{ title: 'title', variant: 'green' }} />);
    expect(container.getElementsByClassName('rf-notification--green')).toHaveLength(1);
  });

  it('should render Notification blue', () => {
    const { container } = render(<Notification item={{ title: 'title', variant: 'blue' }} />);
    expect(container.getElementsByClassName('rf-notification--blue')).toHaveLength(1);
  });

  it('should render Notification yellow', () => {
    const { container } = render(<Notification item={{ title: 'title', variant: 'yellow' }} />);
    expect(container.getElementsByClassName('rf-notification--yellow')).toHaveLength(1);
  });

  it('should render Notification red', () => {
    const { container } = render(<Notification item={{ title: 'title', variant: 'red' }} />);
    expect(container.getElementsByClassName('rf-notification--red')).toHaveLength(1);
  });

  it('should be call remove', () => {
    const onRemove = jest.fn();
    const { rerender } = render(<Notification item={{ title: 'title', id: 1 }} remove={onRemove} />);

    fireEvent.click(screen.getByRole('button'));

    expect(onRemove).toBeCalled();

    // Если нету id, то remove не вызывается
    rerender(<Notification item={{ title: 'title' }} remove={onRemove} />);

    fireEvent.click(screen.getByRole('button'));

    expect(onRemove).toHaveBeenCalledTimes(1);
  });
});
