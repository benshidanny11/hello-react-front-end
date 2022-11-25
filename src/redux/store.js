import { configureStore, combineReducers } from '@reduxjs/toolkit';
import greetingReducer from './greeting/greetingReducer';

const rootReducer = combineReducers({ greetings: greetingReducer });
const store = configureStore({ reducer: rootReducer });
export default store;
