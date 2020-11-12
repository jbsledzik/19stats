import endpoints from "./endpoints";

export const getCasesForAllCountries = async (data: object) => {
  const response = await fetch(endpoints.countries, data);
  const covidData = response.json();
  return covidData;
};
