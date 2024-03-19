import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './task/taskSlice'
import { Store } from '@reduxjs/toolkit';
import confirmationModalReducer from './confirmation-modal/confirmationModalSlice'

 const createStore = () =>{
  const thunkArguments = {} as ThunkExtraArguments;
  const store = configureStore({ 
    reducer: {task:taskReducer,confirmationModal:confirmationModalReducer},
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: thunkArguments
      },
      serializableCheck: false,
    }),
  })
  thunkArguments.store = store;
 
  return store;
}
export default createStore;
export const store = createStore();
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export interface ThunkExtraArguments {
  store: Store;
}
 