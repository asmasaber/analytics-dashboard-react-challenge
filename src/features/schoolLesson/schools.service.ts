import axios from '../../app/apiClient';
import { randomColor } from '../../app/utils';
import ISchoolLesson, {
  ICountryCampSchool,
  ICountryCampSchools,
  IFilters,
} from './schoolLesson.types';

export const fetchSchoolsLessons = async (): Promise<ISchoolLesson[]> => {
  const response = await axios.get(
    'https://raw.githubusercontent.com/abdelrhman-arnos/analysis-fe-challenge/master/data.json',
  );
  return response.data;
};

export const formatSchoolData = (originalData: ISchoolLesson[]) => {
  const countries = Array.from(new Set<string>(originalData.map((item) => item.country)));
  const camps = Array.from(new Set<string>(originalData.map((item) => item.camp)));
  const schoolsSets = originalData.reduce((acc, item) => {
    const key = `${item.country}-${item.camp}`;
    acc[key] ? acc[key].add(item.school) : (acc[key] = new Set<string>().add(item.school));

    return acc;
  }, {} as { [key: string]: Set<string> });

  const schools = {} as { [key: string]: string[] };

  for (const sc in schoolsSets) {
    schools[sc] = Array.from(schoolsSets[sc]);
  }

  const filters: IFilters = {
    country: countries[0],
    camp: camps[0],
    school: 'all',
  };

  const filteredData: ICountryCampSchools = filterSchools(originalData, filters);

  return {
    lookups: { countries, camps, schools },
    filters,
    filteredData,
  };
};

export const filterSchools = (data: ISchoolLesson[], filters: IFilters): ICountryCampSchools => {
  const schools: string[] = [];
  const countryCampSchools = data
    .filter(
      ({ country, camp, school }) =>
        country === filters.country &&
        camp === filters.camp &&
        (filters.school !== 'all' ? school === filters.school : true),
    )
    .reduce(
      (acc, current): ICountryCampSchools => {
        acc.total += current.lessons;
        const countryCampSchool = {
          months: {
            Jan: 0,
            Feb: 0,
            Mar: 0,
            Apr: 0,
            May: 0,
            Jun: 0,
            Jul: 0,
            Aug: 0,
            Sep: 0,
            Oct: 0,
            Nov: 0,
            Dec: 0,
          },
          total: 0,
          color: randomColor(),
          selected: true,
        } as ICountryCampSchool;
        if (acc.schools[current.school]) {
          acc.schools[current.school].total += current.lessons;
          acc.schools[current.school].months[current.month] += current.lessons;
        } else {
          schools.push(current.school);
          countryCampSchool.total = +current.lessons;
          countryCampSchool.months[current.month] = +current.lessons;
          acc.schools[current.school] = countryCampSchool;
        }
        return acc;
      },
      { total: 0, schools: {} } as ICountryCampSchools,
    );
  return countryCampSchools;
};
