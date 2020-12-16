import moment from 'moment'

import {
  SET_NEXT_DATE,
  SET_PREV_DATE,
  SET_VALUE,
  SET_IS_TOTAL_VALUE,
  SET_RESULT_AMOUNT,
} from '../../actions'

const initialValues = {
  amountValue: '',
  isTotalAmount: false,
  date: moment().toDate(),
  resultAmount: 0
}

export const creationReducer = (state = initialValues, action) => {
  switch(action.type) {
    case SET_NEXT_DATE:
      return {
        ...state,
        date: moment(state.date).add(1, 'M')
      }
    case SET_PREV_DATE:
      return {
        ...state,
        date: moment(state.date).add(-1, 'M')
      }
    case SET_VALUE:
      return {
        ...state,
        amountValue: action.payload
      }
    case SET_IS_TOTAL_VALUE:
      return {
        ...state,
        isTotalAmount: action.payload,
        resultAmount: state.amountValue,
        amountValue: state.resultAmount
      }
    case SET_RESULT_AMOUNT:
      return {
        ...state,
        resultAmount: action.payload
      }
    default:
      return state
  }
}