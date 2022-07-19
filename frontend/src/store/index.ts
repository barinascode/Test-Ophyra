import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import { useDispatch } from 'react-redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { Action, ThunkDispatch, configureStore } from '@reduxjs/toolkit';
import { productsReducer, PRODUCTS_FEATURE_KEY } from './Products.slice'

const reducers = combineReducers({
  [PRODUCTS_FEATURE_KEY]: productsReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
  blacklist: []
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env['NODE_ENV'] !== 'production',
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;

export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;

export const useAppThunkDispatch = () => useDispatch<ThunkAppDispatch>();
