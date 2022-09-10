import axios from '../services';

import ISchoolLesson from '../types/ISchoolLesson';

export const fetchSchoolsLessons = async () => {
  const response = await axios.get(
    'https://raw.githubusercontent.com/abdelrhman-arnos/analysis-fe-challenge/master/data.json',
  );
  return response.data as ISchoolLesson[];
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

  const filtres = {
    country: countries[0],
    camp: camps[0],
    school: 'all',
  };

  return {
    lookups: { countries, camps, schools },
    filtres,
  };
};
