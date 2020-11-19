export const numberWithCommas = (x: number) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const checkIfAnyCases = (text: string, onTrue: string) =>
  text !== "0" ? onTrue : null;
