import axios from 'axios';
import { browserHistory } from 'react-router';
import {
        GETTING,
        GOT_POKE,
        GOT_POKES,
        POKE_ERROR
        } from '../constants/constants';

const API_URL = 'http://pokeapi.co/api/v2';

export const pokeErrorHandler = (dispatch, error, type) => {
  let errorMessage = '';

  if(error.data.error) {
    errorMessage = error.data.error;
  } else if(error.data) {
    errorMessage = error.data;
  } else {
    errorMessage = error;
  }

  if(error.status === 401) {
    dispatch({
      type: type,
      payload: errorMessage
    });
  }
};

export const getOnePokemon = (name) => {
  return function(dispatch) {
    dispatch({type: GETTING});
    axios.get(`${API_URL}/pokemon/${name}`)
    .then(response => {
      dispatch({
        type:GOT_POKE,
        pokename: response.data.name,
        pokedata: response.data,
        pokestats: response.data.stats
      });
      //browserHistory.push(`/pokemon/${name}`);
    })
    .catch((error) => {
      pokeErrorHandler(dispatch, error.response, POKE_ERROR);
    });
  };
};

export const getPokemon = (index ) => {
  return function(dispatch) {
    dispatch({type: GETTING});
    axios.get(`${API_URL}/pokemon`,
        {params: { offset: index}})
    .then(response => {
      dispatch({
        type:GOT_POKES,
        pokedata: response,
        pokelist: response.data.results,
        pokecount: response.data.count,
        pokeprev: response.data.prev,
        pokenext: (response.data.next),
        pokeindex: (response.data.next.split('=')[1]/20)
        //HACKY AS ALL HELL
      });
      //browserHistory.push('/pokemon');
    })
    .catch((error) => {
      pokeErrorHandler(dispatch, error.response, POKE_ERROR);
    });
  };
};
