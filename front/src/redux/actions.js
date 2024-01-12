import axios from 'axios';

// Action Types
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const ORDER = 'ORDER';
export const FILTER_BY_GENDER = 'FILTER_BY_GENDER';
export const FILTER_BY_STATUS = 'FILTER_BY_STATUS';
export const FILTER_BY_SPECIES = 'FILTER_BY_SPECIES';

// Action Creators
export const addFav = character => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';

  return async dispatch => {
    try {
      const {data} = await axios.post(endpoint, character);
      dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const filterByGender = gender => ({
  type: FILTER_BY_GENDER,
  payload: gender,
});

export const filterByStatus = status => ({
  type: FILTER_BY_STATUS,
  payload: status,
});

export const filterBySpecies = species => ({
  type: FILTER_BY_SPECIES,
  payload: species,
});

export const orderCards = orden => ({
  type: ORDER,
  payload: orden,
});

export const removeFav = id => {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;

  return async dispatch => {
    try {
      const {data} = await axios.delete(endpoint);
      dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
