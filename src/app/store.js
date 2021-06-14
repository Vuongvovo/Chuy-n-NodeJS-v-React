import { configureStore } from '@reduxjs/toolkit';
import tagReducer from "../features/admin/Slice/tagSlice"
import newReducer from "../features/admin/Slice/newSlice"
import workReducer from "../features/admin/Slice/workSlice"
const rootReducer = {
  tags: tagReducer,
  news: newReducer,
  works: workReducer,
}
export default configureStore({
  reducer: rootReducer
});
