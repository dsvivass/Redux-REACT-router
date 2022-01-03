import lastNameSubmittedReducer from './lastNameSubmitted';
import invoicesReducer from './invoices';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    lastNameSubmitted: lastNameSubmittedReducer,
    invoices: invoicesReducer,
})

export default allReducers;