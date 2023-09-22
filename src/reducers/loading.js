import {IS_LOADING} from '../actions';

export const isLoading = (state = false, action) => {
  switch (action.type) {
    case IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
};
