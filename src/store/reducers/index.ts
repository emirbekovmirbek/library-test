import {combineReducers} from 'redux';
import {libraryReducer} from './libraryReducer';

export const rootReducer = combineReducers({
  library: libraryReducer,
})
export type RootState = ReturnType<typeof rootReducer>