import { render, screen } from '@testing-library/react';
import QuantityCount from './QuantityCount';

describe('Initial run tests', () => {
    beforeEach(() => {
        render ( <QuantityCount /> );
    })
    
    test ('Initial load quantity', () => {
        const quantityElement = screen.getByTestId('quantity');
        expect(quantityElement.textContent).toEqual(' 0 ');
    })

    test('Disabled button', () => {
        const subtractButton = screen.getByTestId('subtract');
        expect(subtractButton).toBeDisabled();
    })
})


