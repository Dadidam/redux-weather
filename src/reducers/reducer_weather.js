import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // Dont' mutate current state!
      return [action.payload.data, ...state];
  }

  return state;
}
