const GIGASECOND_IN_MS = 10 ** 12;

export const gigasecond = (given_date) => new Date(given_date.getTime() + GIGASECOND_IN_MS);