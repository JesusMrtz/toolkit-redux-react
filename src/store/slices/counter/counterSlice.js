import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 10
    },
    reducers: {
      increment: (state, action) => {
        console.log(action);
        if ( !action.payload ) action.payload = 1;
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.counter += action.payload;
      },
      decrement: (state) => {
        state.counter--;
      }
    },
});


// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions;