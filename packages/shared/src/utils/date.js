// TODO: Use Luxon to make this conversion, now that we've added it.
import { addYears, format, differenceInYears, differenceInDays } from 'date-fns';
import { portunus } from 'portunus';
const ORIGIN = 123459720000;
const birthday = new Date(ORIGIN);
const today = new Date();
const age = differenceInYears(today, birthday);
const { convertedValue: volume } = portunus(age);
const issue = differenceInDays(today, addYears(birthday, age));
const location = 'Portland, OR';
const subHeader = `${location} ${format(today, 'PPPP')} Volume ${volume} issue no. ${issue}`;


export const convertISOStringToMonDay = date => {
  const tempDate = new Date(date).toString().split(' ');
  const formattedDate = `${tempDate[1]} ${+tempDate[2]}`;
  return formattedDate;
};

export const generateSubHeader = () => {
  return subHeader;
}
