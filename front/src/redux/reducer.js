import {
  ADD_FAV,
  ORDER,
  REMOVE_FAV,
  FILTER_BY_GENDER,
  FILTER_BY_STATUS,
  FILTER_BY_SPECIES,
} from './actions';

const initialState = {
  myFavorites: [],
  allCharacters: [],
  filterGender: 'all',
  filterStatus: 'all',
  filterSpecies: 'all',
};

function applyFilters(state) {
  return state.allCharacters
    .filter(char => state.filterGender === 'all' || char.gender === state.filterGender)
    .filter(char => state.filterStatus === 'all' || char.status === state.filterStatus)
    .filter(char => state.filterSpecies === 'all' || char.species === state.filterSpecies);
}

const favoritesReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_FAV:
      state = {...state, myFavorites: payload, allCharacters: payload};
      break;

    case REMOVE_FAV:
      state = {...state, myFavorites: payload};
      break;

    case FILTER_BY_GENDER:
      state = {...state, filterGender: payload};
      break;

    case FILTER_BY_STATUS:
      state = {...state, filterStatus: payload};
      break;

    case FILTER_BY_SPECIES:
      state = {...state, filterSpecies: payload};
      break;
    case ORDER:
      return {
        ...state,
        myFavorites: state.myFavorites.toSorted((a, b) =>
          payload === 'A' ? a.id - b.id : b.id - a.id,
        ),
      };
    default:
      return state;
  }

  if ([FILTER_BY_GENDER, FILTER_BY_STATUS, FILTER_BY_SPECIES, ORDER].includes(type)) {
    const filteredCharacters = applyFilters(state);
    state = {...state, myFavorites: filteredCharacters};
  }

  return state;
};

export default favoritesReducer;
