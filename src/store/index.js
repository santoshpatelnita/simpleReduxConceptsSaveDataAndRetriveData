import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import logger from 'redux-logger'
import { configureStore } from "@reduxjs/toolkit";
import login from "./LoginStore/Login";
import userData from "./LoginStore/userData";
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';
const reducers = combineReducers({
  
    loginStore: login,
    userData: userData,
  
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist:[
    'loginStore',
    'userData'
  ],
  stateReconciler: autoMergeLevel1,
}

const persistedReducer = persistReducer(persistConfig, reducers)


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
    middlewares.push(logger)
    if (__DEV__ && !process.env.JEST_WORKER_ID) {
      const createDebugger = require('redux-flipper').default
      middlewares.push(createDebugger())
    }
    return middlewares
  },
})

const persistor = persistStore(store)

export { store, persistor }


