import { render, fireEvent } from '@testing-library/react';
import App from './App';


describe('App Component', () => {
    it('Renders without errors', () => {
        render(<App />)
    });

    it('Updates the button when clicked', () => {
        const { getByText } = render(<App />);
        const clickBtn = getByText('Click Me');
        fireEvent.click(clickBtn);
        expect(getByText('Clicker').textContent).toBe('Clicker');
    });    
});
