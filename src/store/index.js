import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";
import userReducer from "../reducers/user.reducer";

const persistConfig = {
  key: 'root',
  storage
};

const reducer = combineReducers({
  user: userReducer,
})


const persistedState = persistReducer(persistConfig, reducer)
  ? persistReducer(persistConfig, reducer)
  : {}

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedState,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})


export default store;