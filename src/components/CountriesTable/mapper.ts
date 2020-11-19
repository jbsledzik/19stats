import { ICountry } from "types/api";

import { numberWithCommas } from "./helpers";

const mapCountries = (data: ICountry[]) =>
  data.map((country: ICountry, id) => ({
    ...country,
    key: id,
    countryName: country.country,
    newCasesToday: numberWithCommas(country.todayCases),
    allCases: numberWithCommas(country.cases),
    allDeaths: numberWithCommas(country.deaths),
    todayDeaths: numberWithCommas(country.todayDeaths),
    recovered: numberWithCommas(country.recovered),
    tests: numberWithCommas(country.tests),
    population: numberWithCommas(country.population),
    testsPerOneMillion: numberWithCommas(country.testsPerOneMillion),
    activeCases: numberWithCommas(country.active),
    criticalCases: numberWithCommas(country.critical),
  }));

export default mapCountries;
