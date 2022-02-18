const LOCALE = 'en-US';

/**
 * Compare if two dates are equal in year, month and date all of them together.
 * @param date1 First date to compare
 * @param date2 Second date to compare
 * @returns true if both dates are the same, false if not.
 */
export const isSameDate = (date1: Date, date2: Date) =>
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDate() === date2.getDate();

/**
 * Compare if a date is today
 * @param date Date to compare
 * @returns true if the input date is the same as today
 */
export const isToday = (date: Date) => isSameDate(date, new Date());

/**
 * Convert a date object to a formated string
 * @param date Date to format
 * @returns a date string in 'DDD, D MMM' format
 */
export const formatDate = (date: Date) => {
  const day = date.toLocaleDateString(LOCALE, { weekday: 'short' });
  const rest = date.toLocaleDateString(LOCALE, { day: 'numeric', month: 'short' });
  return `${day}, ${rest}`;
}