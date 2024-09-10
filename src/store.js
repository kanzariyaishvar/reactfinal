// src/store.js
import { legacy_createStore } from 'redux';
import Reducer from '../src/Componet/redux/reducer'; // Default import

const store = legacy_createStore(Reducer);

export default store;
