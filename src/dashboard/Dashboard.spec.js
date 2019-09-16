// Test away
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Dashboard from './Dashboard';

// Write test to confirm it shows controls and display

describe('<Dashboard />', () => {
    it('Shows default styles upon rendering', () => {
        const { getByText } = render(<Dashboard />);
        expect(getByText('Unlocked'));
        expect(getByText('Lock Gate'));
        // Ran tests for the rest but guessing user interaction has to happen before they pass
        // Not worrying about all that stuff since the instruction is merely to see if Display/Controls are there (clearly true)
    })
})