import {HELLO_RESPONSE} from '../actions';

export const characters = (state = [], action) => {
  switch (action.type) {
    case HELLO_RESPONSE:
      return action.data;
    default:
      return state;
  }
};
