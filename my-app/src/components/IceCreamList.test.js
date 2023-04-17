import { getAllByTestId, render, screen } from '@testing-library/react';
import IceCreamList from './IceCreamList';

test('Test for the ice cream list', () => {
    render(<IceCreamList />);

    const iceCreams = screen.getAllByTestId("ice-cream");
    expect(iceCreams.length).toBe(6);
})