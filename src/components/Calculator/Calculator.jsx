import React, { useCallback, useEffect, useMemo } from 'react'
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { flowRight } from 'lodash';

import { Checkbox } from '../common/Checkbox';
import { withInputLabel as InputLabel } from '../common/Input/withInputLabel';

import {
  nextDateAction,
  prevDateAction,
  updateValueAction,
  updateIsTotalValueAction,
  updateResultAmountAction,
} from './epicActions'

import { FORM_NAME } from './utils'
import { format } from '../../utils/dateFormat'

import {
  getIsTotalAmountSelector,
  getResultAmountSelector,
  getTotalMonthsSelector,
  getFormattedDateSelector,
} from './selectors'

import './Calculator.scss'

const CalculatorComponent = ({
  amountValue,
  nextDate,
  prevDate,
  isTotalAmount,
  updateValue,
  updateIsTotalValue,
  updateResultAmount,
  getResultAmount,
  months,
  date,
}) => {

  useEffect(() => {
    updateResultAmount(getResultAmount)
  }, [getResultAmount])

  const dateLeftIcon = useMemo(() => ({
    icon: '<',
    handleClick: () => prevDate()
  }), [prevDate])

  const dateRightIcon = useMemo(() => ({
    icon: '>',
    handleClick: () => nextDate()
  }), [nextDate])

  const totalLeftIcon = useMemo(() => ({
    icon: '$',
  }), [])


  const handleInputChange = useCallback((_, value) => {
    if (!value.includes('-')) {
      return updateValue(value)
    }
  }, []);
  
  const  handleCheckboxChange = useCallback((_, value) => {
    updateIsTotalValue(value)
  }, [])

  const renderNote = () => {
    if (isTotalAmount) {
      return <span>You are planning <strong>{months}</strong> monthly deposits to reach your <strong>${amountValue}</strong> goal by <strong>{date}</strong>.</span>
    } else {
      return <span>You are saving <strong>${amountValue}</strong> monthly to save <strong>${getResultAmount}</strong> by <strong>{date}</strong></span>
    }
  }
  
  return (
    <div className="calc">
      <form>
        <h2 className="calc__title">Savings <br/> calculator</h2>
        <div className="calc__form-group">
          <Checkbox
            checked={isTotalAmount}
            name="isTotalAmount"
            label={`Calculate by ${isTotalAmount ? 'total' : 'monthly'} amount`}
            handleCheckboxChange={handleCheckboxChange}
          />
        </div>
        <div className="calc__form-group">
          <InputLabel
            name="total"
            type="number"
            label={`${isTotalAmount ? 'Total' : 'Monthly'} amount`}
            leftIcon={totalLeftIcon}
            handleInputChange={handleInputChange}
          />
        </div>
        <div className="calc__form-group">
          <InputLabel readonly name="date" label="Reach goal by" leftIcon={dateLeftIcon} rightIcon={dateRightIcon}/>
        </div>
        <div className="calc__result">
          <div className="calc__result-amount">
            <span className="result__title">{`${isTotalAmount ? 'Monthly' : 'Total'} amount`}</span>
            <div className="result__total">${getResultAmount}</div>
          </div>
          <div className="calc__result-note">
            {
              renderNote()
            }
          </div>
        </div>

        <button type="submit" className="calc__submit">Finish</button>
      </form>
    </div>
  )
}

const formCreator = reduxForm({
  form: FORM_NAME,
  enableReinitialize: true,
  destroyOnUnmount: false,
})

const mapStateToProps = (state) => ({
  amountValue: state.creation.amountValue,
  initialValues: {
    total: state.creation.amountValue,
    date: format(state.creation.date)
  },
  isTotalAmount: getIsTotalAmountSelector(state),
  getResultAmount: getResultAmountSelector(state),
  months: getTotalMonthsSelector(state),
  date: getFormattedDateSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
  nextDate: () => dispatch(nextDateAction()),
  prevDate: () => dispatch(prevDateAction()),
  updateValue: (value) => dispatch(updateValueAction(value)),
  updateIsTotalValue: (value) => dispatch(updateIsTotalValueAction(value)),
  updateResultAmount: (value) => dispatch(updateResultAmountAction(value))
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export const Calculator = flowRight(
  connector,
  formCreator
)(CalculatorComponent) 