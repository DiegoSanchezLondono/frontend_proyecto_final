
import { createSlice } from '@reduxjs/toolkit';

export const pictogramSlice = createSlice({
    name: 'pictogram',
    initialState: {
      choosen : {},
      pictograms: []
    },
   
    reducers: {
      select: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
      find: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
      clear: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      }
    }
});

//Acciones que modificarán RDX
export const { select, find, clear } = pictogramSlice.actions;

//Estado del que leeremos RDX
export const pictogramData = (state) => state.pictogram;

export default pictogramSlice.reducer;