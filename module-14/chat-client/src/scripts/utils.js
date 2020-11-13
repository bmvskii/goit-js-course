export const wrap = msg => JSON.stringify(msg);

export const unwrap = msg => JSON.parse(msg);

export const transformDateFromTimestamp = date => {
  const dateOptions = {
    era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  return new Date(date).toLocaleTimeString(dateOptions);
};
