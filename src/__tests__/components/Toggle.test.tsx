import React from 'react';
import '@testing-library/jest-dom';
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import Toggle from '../../components/Toggle';
import { mockedProps, onChange } from '../../__mocks__/components/toggle';

afterEach(cleanup);

describe('Test toggle component', () => {
  it('should render without errors', () => {
    const { getByTestId } = render(<Toggle {...mockedProps} />);
    const wrapperNode = getByTestId(`${mockedProps.id}-testid`);
    const mySelectComponent = wrapperNode.querySelector('input[type=radio]');
    expect(mySelectComponent).toBeDefined();
    expect(mySelectComponent).not.toBeNull();
  });

  it('calls onChange if change event fired', () => {
    const { getByTestId } = render(<Toggle {...mockedProps} />);
    const wrapperNode = getByTestId(`${mockedProps.id}-testid`);
    const radioNode = wrapperNode.querySelector('input[type=radio]') as Element;
    act(() => {
      fireEvent.click(radioNode);
    });
    expect(onChange.mock.calls).toHaveLength(1);
  });
});
