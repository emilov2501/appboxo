import { createSelector } from 'reselect';
import { format, getMonthsDiff } from '../../utils/dateFormat';

const getIsTotalAmount = ({ creation }) => creation.isTotalAmount;
const amountValue = ({ creation }) => creation.amountValue;
const getDate = ({ creation }) => creation.date;

export const getTotalMonthsSelector = createSelector(
  getDate,
  (date) => getMonthsDiff(date) || 1
);

export const getFormattedDateSelector = createSelector(
  getDate,
  (date) => format(date)
)

export const getIsTotalAmountSelector = createSelector(
  getIsTotalAmount,
  (isTotalAmount) => isTotalAmount
);

export const getResultAmountSelector = createSelector(
  amountValue,
  getTotalMonthsSelector,
  getIsTotalAmount,
  (value, months, isTotalAmount) => {
    if (isTotalAmount) {
      return (value / months).toFixed(2) // Monthly amount
    } else {
      return (value * months).toFixed(2) // Total amount
    }
  }
);
