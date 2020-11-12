export interface ICountry {
  key: string;
  countryInfo: {
    iso2: string;
  };
  country: string;
  todayCases: number;
  cases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  tests: number;
  population: number;
  testsPerOneMillion: number;
  active: number;
  critical: number;
}
