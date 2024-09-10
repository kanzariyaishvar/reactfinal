import { combineReducers } from 'redux';
import { SET_DATA, SET_LOADING, SET_SEARCH, SET_SORT, SET_FILTER } from '../redux/actiontype';

const initialState = {
  data: [],
  loading: true,
  search: "",
  sort: "",
  filter: {
    Noise: false,
    Apple: false,
    Rolex: false,
    Boat: false,
  },
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_SEARCH:
      return { ...state, search: action.payload };
    case SET_SORT:
      return { ...state, sort: action.payload };
    case SET_FILTER:
      return { ...state, filter: { ...state.filter, ...action.payload } };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ app: appReducer });

export default rootReducer;
