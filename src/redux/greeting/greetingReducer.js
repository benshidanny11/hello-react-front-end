import { createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'http://127.0.0.1:3000/greetings';

const GET_DATA_ACTION = 'GET_DATA_ACTION';

export default (state = '', action) => {
  switch (action.type) {
    case `${GET_DATA_ACTION}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export const fetchGreeting = createAsyncThunk(GET_DATA_ACTION, async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data.message;
});
