import React from 'react';
import '@testing-library/jest-dom';
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import LineChart from '../../components/LineChart';
import { mockedProps, onClick } from '../../__mocks__/components/linechart';

afterEach(cleanup);

describe('Test chart component', () => {
  it('should render without errors', () => {
    const { getByTestId } = render(<LineChart {...mockedProps} />);
    const wrapperNode = getByTestId(`${mockedProps.id}-testid`);
    const myChartComponent = wrapperNode.querySelector('canvas');
    expect(myChartComponent).toBeDefined();
    expect(myChartComponent).not.toBeNull();
  });

  it("doesn't call onClick if any click event fired", () => {
    const { getByTestId } = render(<LineChart {...mockedProps} />);
    const wrapperNode = getByTestId(`${mockedProps.id}-testid`);
    const myChartComponent = wrapperNode.querySelector('canvas') as Element;
    act(() => {
      fireEvent.click(myChartComponent);
    });
    expect(onClick.mock.calls).toHaveLength(0);
  });
});
