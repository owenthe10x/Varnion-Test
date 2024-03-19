
import { createSlice } from '@reduxjs/toolkit';


export interface ConfirmationModalState {
    isOpened: boolean;
    isConfirmed: boolean;
    isDeclined: boolean;
  }
   

const confirmationModalSlice = createSlice({
    name: 'confirmationModal',
    initialState: {
        isOpened: false,
        isConfirmed: false,
        isDeclined: false
      },
    reducers: {
      open: state => {
        state.isOpened = true;
        state.isDeclined = false;
        state.isConfirmed = false;
      },
      confirm: state => {
        state.isConfirmed = true;
        state.isOpened = false;
      },
      decline: state => {
        state.isDeclined = true;
        state.isOpened = false;
      }
    }
  })
   
  export const confirmationModalActions = confirmationModalSlice.actions;
   
  export default confirmationModalSlice.reducer;