import { combineReducers } from 'redux';
import pokeReducer from './poke_reducer';

const rootReducer = combineReducers({
  poke: pokeReducer
});

export default rootReducer;
