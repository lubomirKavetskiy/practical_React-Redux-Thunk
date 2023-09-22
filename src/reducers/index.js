import {combineReducers} from 'redux';

import {isLoading} from './loading';
import {characters} from './characters';

export const reducer = combineReducers({
  isLoading,
  characters,
});
