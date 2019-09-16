import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Display from './Display';

describe('<Display />', () => {
    it('Shows initial locked and open state upon render', () => {
        const { getByText } = render(<Display />);
        expect(getByText('Unlocked'));
        expect(getByText('Open'));
    });

    it('Has the expected behavior when props are set a certain way', () => {
        const { getByText } = render(<Display locked={true} closed={true}/>);
        expect(getByText('Locked'));
        expect(getByText('Closed'));
    });

    it('Sanity test to confirm it behaves when prop settings are reversed', () => {
        const { getByText } = render(<Display locked={false} closed={false} />);
        expect(getByText('Unlocked'));
        expect(getByText('Open'));
    });

})