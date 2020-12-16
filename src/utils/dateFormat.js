import moment from 'moment'

export const DATE_FORMAT = 'MMMM, YYYY';

export const format = (date) => {
  return moment(date).format(DATE_FORMAT)
}

export const getMonthsDiff = (date) => {
  return Math.round(moment(moment(date).format()).diff(moment().format(), 'months', true))
}