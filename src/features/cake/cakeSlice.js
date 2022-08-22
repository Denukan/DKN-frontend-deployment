import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   numberOfCakes: 100,
};

const cakeSlice = createSlice({
   name: "cake",
   initialState: initialState,
   reducers: {
      ordered: (state, action) => {
         state.numberOfCakes--;
      },
      restocked: (state, action) => {
         state.numberOfCakes = state.numberOfCakes + action.payload;
      },
   },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
