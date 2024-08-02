
import { render, screen } from '@testing-library/react';
import { usersMocks } from '../../popups/FindUsers/users.mocks';

import EntityCard from './EntityCard';

const entity = usersMocks[0];

describe('Test <EntityCard/> component', () => {
    it('should render EntityCard component', () => {
        render(<EntityCard {...entity} />)
    });

    it('should be wrapper', () => {
        const { container } = render(<EntityCard {...entity} />);
        expect(container.getElementsByClassName('rf-entity-card__wrapper')).toHaveLength(1);
    });

    it('should be entity-photo', () => {
        const { container } = render(<EntityCard {...entity} />);
        expect(container.getElementsByClassName('rf-entity-card__photo-wrapper')).toHaveLength(1);
    });

    it('should be copy icon', () => {
        const { container } = render(<EntityCard {...entity} canCopy />);
        expect(container.getElementsByClassName('rf-entity-card__icon-wrapper')).toHaveLength(1);
    });

    it('should be first label', () => {
        render(<EntityCard {...entity} firstLabel={'Табельный номер'} valueByFirstLabel={'0987654321'} />);
        expect(screen.getByText(/Табельный номер/i)).toBeInTheDocument();
        expect(screen.getByText(/0987654321/i)).toBeInTheDocument();
    });

    it('should be second label', () => {
        render(<EntityCard {...entity} secondLabel={'Второй лейбл'} valueBySecondLabel={'Значение'} />);
        expect(screen.getByText(/Второй лейбл/i)).toBeInTheDocument();
        expect(screen.getByText(/Значение/i)).toBeInTheDocument();
    });

    it('should be entity fullName', () => {
        render(<EntityCard {...entity} />);
        expect(screen.getByText(entity.fullName)).toBeInTheDocument();
    });

    it('should be role', () => {
        render(<EntityCard {...entity} role={'role'} />);
        expect(screen.getByText(/role/i)).toBeInTheDocument();
    });
});
