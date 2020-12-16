import {
  SET_NEXT_DATE,
  SET_PREV_DATE,
  SET_VALUE,
  SET_IS_TOTAL_VALUE,
  SET_RESULT_AMOUNT,
} from '../../actions'

export const nextDateAction = () => ({
  type: SET_NEXT_DATE
});

export const prevDateAction = () => ({
  type: SET_PREV_DATE
});

export const updateValueAction = (value) => ({
  type: SET_VALUE,
  payload: value
});

export const updateIsTotalValueAction = (value) => ({
  type: SET_IS_TOTAL_VALUE,
  payload: value
});

export const updateResultAmountAction = (value) => ({
  type: SET_RESULT_AMOUNT,
  payload: value
})