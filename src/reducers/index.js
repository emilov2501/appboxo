import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { creationReducer } from './creation'

export const reducers = combineReducers({
  form: formReducer,
  creation: creationReducer
})
