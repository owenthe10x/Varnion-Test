
import { createAsyncThunk } from '@reduxjs/toolkit';
import {RootState, ThunkExtraArguments} from '../store';
import { confirmationModalActions } from './confirmationModalSlice';
 
const confirmationModalThunkActions = {
  open: createAsyncThunk<boolean, void, {
    extra: ThunkExtraArguments
  }>(
    'confirmationModal',
    async (_, { extra, dispatch }) => {
      const store = extra.store;
 
      dispatch(confirmationModalActions.open());
 
      return new Promise<boolean>(resolve => {
        const unsubscribe = store.subscribe(() => {
          const state = store.getState();
          if (state.confirmationModal.isConfirmed) {
            unsubscribe();
            resolve(true);
          }
          if (state.confirmationModal.isDeclined) {
            unsubscribe();
            resolve(false);
          }
        })
      });
    }
  )
}
 
export default confirmationModalThunkActions;