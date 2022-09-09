import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', function () {
  test('should render without errors', () => {
    render(<App />);
    const headerElement = screen.getByText(/Analysis Chart/i);
    expect(headerElement).toBeDefined();
    expect(headerElement).not.toBeNull();
    expect(headerElement).toBeInTheDocument();
  });
});
