
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Test <Button/> component', () => {
  it('should render Button component', () => {
    const { container } = render(<Button> Button </Button>);

    expect(container.getElementsByClassName('rf-button__text')).toHaveLength(1);
  });

  it('should be primary', () => {
    const { container } = render(<Button buttonType='primary'> Button </Button>);
    expect(container.getElementsByClassName('rf-button--primary')).toHaveLength(1);
  });

  it('should be secondary', () => {
    const { container } = render(<Button buttonType='secondary'> Button </Button>);
    expect(container.getElementsByClassName('rf-button--secondary')).toHaveLength(1);
  });

  it('should be light', () => {
    const { container } = render(<Button buttonType='light'> Button </Button>);
    expect(container.getElementsByClassName('rf-button--light')).toHaveLength(1);
  });

  it('should be outline', () => {
    const { container } = render(<Button buttonType='outline'> Button </Button>);
    expect(container.getElementsByClassName('rf-button--outline')).toHaveLength(1);
  });

  it('should be ghost', () => {
    const { container } = render(<Button buttonType='ghost'> Button </Button>);
    expect(container.getElementsByClassName('rf-button--ghost')).toHaveLength(1);
  });

  it('should be danger', () => {
    const { container } = render(<Button buttonType='danger'> Button </Button>);
    expect(container.getElementsByClassName('rf-button--danger')).toHaveLength(1);
  });

  it('should be round', () => {
    const { container } = render(<Button buttonType='round'> Button </Button>);
    expect(container.getElementsByClassName('rf-button--round')).toHaveLength(1);
  });

  it('should be icon-round', () => {
    const { container } = render(<Button buttonType='icon-round'> Button </Button>);
    expect(container.getElementsByClassName('rf-button--icon-round')).toHaveLength(1);
  });

  it('should be white', () => {
    const { container } = render(<Button buttonType='white'> Button </Button>);
    expect(container.getElementsByClassName('rf-button--white')).toHaveLength(1);
  });

  it('should be success', () => {
    const { container } = render(<Button buttonType='success'> Button </Button>);
    expect(container.getElementsByClassName('rf-button--success')).toHaveLength(1);
  });

  it('should be round-active', () => {
    const { container } = render(<Button buttonType='round-active'> Button </Button>);
    expect(container.getElementsByClassName('rf-button--round-active')).toHaveLength(1);
  });

  it('should be icon', () => {
    const { container } = render(<Button buttonType='icon'> Button </Button>);
    expect(container.getElementsByClassName('rf-button--icon')).toHaveLength(1);
  });

  it('should be text', () => {
    const { container } = render(<Button buttonType='text'> Button </Button>);
    expect(container.getElementsByClassName('rf-button--text')).toHaveLength(1);
  });

  it('should be small', () => {
    const { container } = render(<Button size='s'> Button </Button>);
    expect(container.getElementsByClassName('rf-button--s')).toHaveLength(1);
  });

  it('should be medium', () => {
    const { container } = render(<Button size='m'> Button </Button>);
    expect(container.getElementsByClassName('rf-button--m')).toHaveLength(1);
  });

  it('should be large', () => {
    const { container } = render(<Button size='l'> Button </Button>);
    expect(container.getElementsByClassName('rf-button--l')).toHaveLength(1);
  });

  it('should be extra large', () => {
    const { container } = render(<Button size='xl'> Button </Button>);
    expect(container.getElementsByClassName('rf-button--xl')).toHaveLength(1);
  });

  it('should be round', () => {
    const { container } = render(<Button round> Button </Button>);
    expect(container.getElementsByClassName('rf-button--round')).toHaveLength(1);
  });

  it('should render adornments', () => {
    render(<Button startAdornment={<div>start</div>} endAdornment={<div>end</div>} />);
    expect(screen.queryByText('start')).toBeInTheDocument();
    expect(screen.queryByText('end')).toBeInTheDocument();
  });

  it('should render fullWidth', () => {
    const { container } = render(<Button fullWidth>fullWidth</Button>);

    expect(container.getElementsByClassName('rf-button__full-width')).toHaveLength(1);
  });

  it('should be textColor = green and buttonType = text', () => {
    const { container } = render(
      <Button buttonType='text' textColor='green'>
        fullWidth
      </Button>
    );

    expect(container.getElementsByClassName('rf-button--text-green')).toHaveLength(1);
  });

  it('should hide content when preloader is visible', () => {
    render(<Button preloader> Button </Button>);
    expect(screen.getByTestId('rf-button__content')).toHaveClass('rf-button__content--hidden');
  });
});
