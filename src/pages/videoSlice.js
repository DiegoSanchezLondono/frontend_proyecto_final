
import { createSlice } from '@reduxjs/toolkit';

export const videoSlice = createSlice({
    title: 'video',
    initialState: {
      choosen : {},
      videos: []
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
export const { select, find, clear } = videoSlice.actions;

//Estado del que leeremos RDX
export const videoData = (state) => state.video;

export default videoSlice.reducer;