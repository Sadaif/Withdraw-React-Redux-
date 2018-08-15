import { createStore } from 'redux';
import bankReducer from '../reducer/bankReducer';

const store = createStore(bankReducer);
export default store;