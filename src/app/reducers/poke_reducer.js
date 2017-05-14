import {
        GETTING,
        GOT_POKE,
        GOT_POKES,
        POKE_ERROR
        } from '../constants/constants';

const INITIAL_STATE = { index: 0, pokename: '', count: 0, pokelist: []};

const PokeReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GETTING:
      return { ...state,
        isFetching: true};
    case GOT_POKE:
      return { ...state,
        pokedata: action.pokedata,
        pokename: action.pokename,
        isFetching: false};
    case GOT_POKES:
      return { ...state,
        pokelist: action.pokelist,
        pokedata: action.pokedata,
        pokecount: action.pokecount,
        pokeindex: action.pokeindex,
        isFetching: false };
    case POKE_ERROR:
      return { ...state,
        error: action.payload,
        isFetching: false };
  }
  return state;
};

export default PokeReducer;
