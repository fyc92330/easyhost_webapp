import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
    it('renders the button with the correct text', () => {
        render(<Button>Click me</Button>);
        const buttonElement = screen.getByRole('button', { name: /click me/i });
        expect(buttonElement).toBeInTheDocument();
    });

    it('calls the onClick handler when clicked', () => {
        const onClick = jest.fn();
        render(<Button onClick={onClick}>Click me</Button>);
        const buttonElement = screen.getByRole('button', { name: /click me/i });
        buttonElement.click();
        expect(onClick).toHaveBeenCalled();
    });
});
