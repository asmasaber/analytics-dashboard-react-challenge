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

export interface Filters {
  school: string;
  camp: string;
  country: string;
}

export default interface ISchoolLesson extends Filters {
  id: string;
  month: Month;
  lessons: number;
}

export interface Lookups {
  camps: string[];
  countries: string[];
  schools: { [key: string]: string[] }; // key = country-camp
}

export interface ISchoolLessonState {
  loading: boolean;
  error: null | string;
  originalData: ISchoolLesson[];
  lookups: Lookups;
  filters: Filters;
}
