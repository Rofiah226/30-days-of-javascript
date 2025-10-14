const { numbers3, sum } = require(".");

export const totalSum = numbers3.reduce((numbers, current) => (sum += numbers));
