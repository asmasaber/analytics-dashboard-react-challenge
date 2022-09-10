import axios from '../services/apiClient';
import MockAdapter from 'axios-mock-adapter';
import ISchoolLesson from '../types/SchoolLesson';

export const fetchSchoolsLessonsResponse: ISchoolLesson[] = [
  {
    id: '620af3a468e4b2e765e7c9e7',
    month: 'Feb',
    camp: 'Omaka',
    country: 'Egypt',
    school: 'Burke High School',
    lessons: 140,
  },
  {
    id: '620af3a4b8c8ca0afd385a9c',
    month: 'Apr',
    camp: 'Kakuma',
    country: 'Egypt',
    school: 'Kakuma Secondary',
    lessons: 170,
  },
  {
    id: '620af3a4a812c63fb1945ac9',
    month: 'Oct',
    camp: 'Kakuma',
    country: 'Egypt',
    school: 'Jolie Boarding School',
    lessons: 215,
  },
  {
    id: '620af3a4288ab1f9ee2f56d0',
    month: 'Mar',
    camp: 'Lemaci',
    country: 'Tunisia',
    school: 'Columbia Law School',
    lessons: 50,
  },
  {
    id: '620af3a47c41df4c2f41bc4d',
    month: 'Sep',
    camp: 'Kakuma',
    country: 'Tunisia',
    school: 'Jolie Boarding School',
    lessons: 200,
  },
  {
    id: '620af3a4a51109b48e12019d',
    month: 'Sep',
    camp: 'Omaka',
    country: 'Tanzania',
    school: 'Te Kupenga Preschool',
    lessons: 60,
  },
  {
    id: '620af3a4479c4393af4976b8',
    month: 'Apr',
    camp: 'Omaka',
    country: 'Kenya',
    school: 'Burke High School',
    lessons: 115,
  },
  {
    id: '620af3a46f3ac87dfd0943bd',
    month: 'Mar',
    camp: 'Kakuma',
    country: 'Egypt',
    school: 'Morneau Shepell',
    lessons: 10,
  },
  {
    id: '620af3a4830bfa44187c6afb',
    month: 'Jan',
    camp: 'Lemaci',
    country: 'Kenya',
    school: 'Management School ESSCA',
    lessons: 135,
  },
  {
    id: '620af3a4c873dd5edf0dddfe',
    month: 'Mar',
    camp: 'Sebuna',
    country: 'Kenya',
    school: 'Associazione Nautica Sebina',
    lessons: 180,
  },
  {
    id: '620af3a4cb73e0381d1e43c6',
    month: 'Feb',
    camp: 'Omaka',
    country: 'Tunisia',
    school: 'Omaka Secondary',
    lessons: 115,
  },
];

export const mockedCountries = Array.from(
  new Set<string>(fetchSchoolsLessonsResponse.map((item) => item.country)),
);

export const mockNetworkResponse = () => {
  const mock = new MockAdapter(axios);
  mock
    .onGet(
      'https://raw.githubusercontent.com/abdelrhman-arnos/analysis-fe-challenge/master/data.json',
    )
    .reply(200, fetchSchoolsLessonsResponse);
};

export const mockedFilters = {
  country: 'Tunisia',
  camp: 'Omaka',
  school: 'all',
};

export const mockedFilteredSchools = fetchSchoolsLessonsResponse.filter(
  (s) => s.country === mockedFilters.country && s.camp === mockedFilters.camp,
);

export const mockedFiltersWithSpecificSchool = {
  country: 'Tunisia',
  camp: 'Omaka',
  school: 'Omaka Secondary',
};
