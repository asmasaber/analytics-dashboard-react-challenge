import React from 'react';
import '@testing-library/jest-dom';
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import Select from '../../components/Select';
import props, { options, onChange } from '../../__mocks__/components/select';

afterEach(cleanup);

describe('Test select component', () => {
  it('should render without errors', () => {
    const { getByTestId } = render(<Select {...props} />);
    const wrapperNode = getByTestId(`${props.id}-testid`);
    const mySelectComponent = wrapperNode.querySelector(`select#${props.id}`);
    expect(mySelectComponent).toBeDefined();
    expect(mySelectComponent).not.toBeNull();
    const optionsNumber = mySelectComponent?.querySelectorAll('option').length;
    expect(optionsNumber).toBe(options.length);
  });

  it('should show showAll option successfully', () => {
    const { getByTestId } = render(<Select {...props} showAll />);
    const wrapperNode = getByTestId(`${props.id}-testid`);
    const firstChild = wrapperNode.querySelector(`select#${props.id} option:first-child`);
    expect(firstChild).toHaveTextContent('Show all');
  });

  it('calls onChange if change event fired', () => {
    const { getByTestId } = render(<Select {...props} />);
    const wrapperNode = getByTestId(`${props.id}-testid`);
    const selectNode = wrapperNode.querySelector(`select#${props.id}`) as Element;
    act(() => {
      fireEvent.change(selectNode, { target: { value: 'mocked-option-3' } });
    });
    expect(onChange.mock.calls).toHaveLength(1);
  });
});
