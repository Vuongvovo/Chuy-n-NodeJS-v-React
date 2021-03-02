import { configureStore } from '@reduxjs/toolkit';

const counterReducer = [{
  name: 'kien',
  age: '15'
}]
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
