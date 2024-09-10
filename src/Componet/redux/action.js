// src/actions.js
// import { SET_DATA, SET_LOADING, SET_SEARCH, SET_SORT, SET_FILTER } from './actionTypes';
import { SET_DATA,SET_LOADING,SET_FILTER,SET_SORT,SET_SEARCH } from "./actiontype";

export const setData = (data) => ({ type: SET_DATA, payload: data });
export const setLoading = (loading) => ({ type: SET_LOADING, payload: loading });
export const setSearch = (search) => ({ type: SET_SEARCH, payload: search });
export const setSort = (sort) => ({ type: SET_SORT, payload: sort });
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });
