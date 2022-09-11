type Month =
  | 'Jan'
  | 'Feb'
  | 'Mar'
  | 'Apr'
  | 'May'
  | 'Jun'
  | 'Jul'
  | 'Aug'
  | 'Sep'
  | 'Oct'
  | 'Nov'
  | 'Dec';

export interface IFilters {
  school: string;
  camp: string;
  country: string;
}

export default interface ISchoolLesson extends IFilters {
  id: string;
  month: Month;
  lessons: number;
}

export interface ILookups {
  camps: string[];
  countries: string[];
  schools: { [key: string]: string[] }; // key = country-camp
}

export interface ICountryCampSchool {
  months: {
    [key: string]: number;
  };
  total: number;
  color: string;
  selected: boolean;
}

export type ICountryCampSchools = {
  // key = school name
  schools: { [key: string]: ICountryCampSchool };
  total: number;
};

export interface ISchoolLessonState {
  loading: boolean;
  error: null | string;
  originalData: ISchoolLesson[];
  lookups: ILookups;
  filters: IFilters;
  filteredData: ICountryCampSchools;
}

export type ChartData = {
  label: string;
  data: number[];
  borderColor: string;
}[];

export interface ITimelinteNode {
  content: string;
  desc: string | number;
}
