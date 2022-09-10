import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import {
  mockNetworkResponse,
  mockedCountries,
  mockedFilters,
  mockedFilteredSchools,
  mockedFiltersWithSpecificSchool,
} from '../../__mocks__/store';
import { loadData, updateFilters } from '../../store/schoolLesson/schoolLessonSlice';

import { store } from '../../store';
import Filters from '../../containers/Filters';

describe('Filters container', () => {
  beforeAll(() => {
    mockNetworkResponse();
  });

  test('should render without errors', async () => {
    const result = await store.dispatch(loadData());
    expect(result.type).toBe('schools/fetch_lessons/fulfilled');

    const stateCountriesLength = store.getState().schoolLesson.lookups.countries.length;
    expect(stateCountriesLength).toEqual(mockedCountries.length);
    render(
      <Provider store={store}>
        <Filters />
      </Provider>,
    );

    const countriesSelectComponent = screen.getByTestId('countries-testid');

    expect(countriesSelectComponent).toBeDefined();
    expect(screen.getByTestId('camps-testid')).toBeDefined();
    expect(screen.getByTestId('schools-testid')).toBeDefined();

    const countriesOptionsLength = countriesSelectComponent.querySelectorAll('option').length;
    expect(countriesOptionsLength).toBe(mockedCountries.length);
  });

  it('Should be able to change schools for a specific country and camp', async () => {
    let state;
    await store.dispatch(loadData());
    store.dispatch(updateFilters(mockedFilters));
    state = store.getState().schoolLesson;
    expect(state.lookups.schools[`${mockedFilters.country}-${mockedFilters.camp}`].length).toBe(
      mockedFilteredSchools.length,
    );

    store.dispatch(updateFilters(mockedFiltersWithSpecificSchool));
    state = store.getState().schoolLesson;
    expect(
      state.lookups.schools[
        `${mockedFiltersWithSpecificSchool.country}-${mockedFiltersWithSpecificSchool.camp}`
      ].length,
    ).toBe(1);
  });
});
