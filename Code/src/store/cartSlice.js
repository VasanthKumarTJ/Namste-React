import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      return state;
    },
    decreaseItemQuantity: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.card.info.id === action.payload
      );

      if (
        existingItemIndex !== -1 &&
        state.items[existingItemIndex].quantity > 1
      ) {
        state.items[existingItemIndex].quantity -= 1;
      }

      return state;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.card.info.id !== action.payload
      );
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart, decreaseItemQuantity } =
  cartslice.actions;

export default cartslice.reducer;
