import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    // video 60 => instead of using push, we want to create a new instance of state rather than mutate our state
    // this is why state.concat is used rather than state.push, because concat returns a new array, not change the existing array.
    // return state.concat([action.payload.data]);
    // below is a cleaner version that using .concat method
    return [ action.payload.data, ...state ];
  }
  return state;
}
