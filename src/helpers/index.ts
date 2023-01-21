export const currencyFormatter = (number: number) =>
  new Intl.NumberFormat().format(number);
