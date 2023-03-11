
import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../pages/User/userSlice';
import videoSlice from '../pages/videoSlice';
import pictogramSlice from '../pages/pictogramSlice';

import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import thunk from 'redux-thunk';

const reducers = combineReducers({
    user: userSlice,
    video: videoSlice,
    pictogram: pictogramSlice
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});