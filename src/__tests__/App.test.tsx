import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { store } from '../store';
import App from '../App';

describe('App component', () => {
  test('should render without errors', async () => {
    await act(() => {
      render(
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>,
      );
    });
    const headerElement = screen.getByText(/Analysis Chart/i);
    expect(headerElement).toBeDefined();
    expect(headerElement).not.toBeNull();
    expect(headerElement).toBeInTheDocument();
  });
});
