import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Controls from './Controls';

describe('<Controls />', () => {
    it('Provides buttons to toggle between available states and they change to match state', () => {
        const { getByText } = render(<Controls locked={true} closed={true} />);
        fireEvent.click(getByText('Unlock Gate'));
        fireEvent.click(getByText('Open Gate')); 
        expect(getByText('Lock Gate'));
    });

    it('Cannot be toggled open/close if the gate is locked', () => {
        const { getByText } = render(<Controls locked={true} closed={true} />);
        fireEvent.click(getByText('Open Gate'));
        expect(getByText('Open Gate'));
    })

    it('Cannot be toggled locked/unlocked if the gate is open', () => {
        const { getByText } = render(<Controls locked={false} closed={false} />);
        fireEvent.click(getByText('Lock Gate'));
        expect(getByText('Lock Gate'));
    });
})