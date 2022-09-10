import { fetchSchoolsLessonsResponse, mockNetworkResponse } from '../__mocks__/store';
import { loadData } from '../store/schoolLesson/schoolLessonSlice';
import ISchoolLesson from '../types/ISchoolLesson';
import { store } from '../store';

describe('Redux School Lesson Slice', () => {
  beforeAll(() => {
    mockNetworkResponse();
  });

  it('Should initially set loading to false', () => {
    const state = store.getState().schoolLesson;
    expect(state.loading).toEqual(false);
  });

  it('Should be able to fetch data', async () => {
    const result = await store.dispatch(loadData());
    const data = result.payload as ISchoolLesson[];

    expect(result.type).toBe('schools/fetch_lessons/fulfilled');
    expect(data.length).toEqual(fetchSchoolsLessonsResponse.length);

    const state = store.getState().schoolLesson;
    expect(state.originalData.length).toEqual(data.length);
  });
});
