// TODO: Use Luxon to make this conversion, now that we've added it.

export const convertISOStringToMonDay = date => {
  const tempDate = new Date(date).toString().split(' ');
  const formattedDate = `${tempDate[1]} ${+tempDate[2]}`;
  return formattedDate;
};
