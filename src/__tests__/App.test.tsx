import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import { store } from '../store';
import App from '../App';

describe('App component', () => {
  test('should render without errors', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const headerElement = screen.getByText(/loading/i);
    expect(headerElement).toBeDefined();
    expect(headerElement).not.toBeNull();
    expect(headerElement).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));
  });
});
