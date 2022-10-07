// import { createStore ,applyMiddleware} from 'redux'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' 
// import rootReducer from './reducers/index'
// // import configureStore from 'redux-persist'
// // const initialState = {};
// const persistConfig = {
//   key: "root",
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// console.log(persistedReducer);
// export default () => {
//   const initialState = {};
//   // const store = configureStore(initialState, persistReducer,);
//   let store = createStore(persistedReducer)
//   console.log(store);
//   let persistor = persistStore(store)
//   console.warn(persistor);
//   return { store, persistor }
// }
// // const store = createStore(
//   // rootReducer,
//   // initialState,
// // export default store;
 
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import rootReducer from "./reducers/index";
import * as thunkMiddleware from "redux-thunk";
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
let middleware = [thunkMiddleware.default];
export let store = createStore(
  persistedReducer,
   applyMiddleware(...middleware)
);
export let persistor = persistStore(store);