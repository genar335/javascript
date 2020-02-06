export const gigasecond = (given_date) => {
  let gigasecond_anniversary = new Date();
  gigasecond_anniversary.setTime(given_date.getTime() + Math.pow(10, 12));
  return gigasecond_anniversary;
};