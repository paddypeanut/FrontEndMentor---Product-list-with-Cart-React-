import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    modalIsVisible: false
  },
  reducers: {
    incrementCart: (state, action) => {
      const myItem = action.payload.item;
      const existingItemIndex = state.items.findIndex(
        (item) => item.name === myItem.name
      );
      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].quantity++;
      } else {
        const newItem = {
        name: myItem.name,
        price: myItem.price,
        quantity: 1,
      };
      state.items = [...state.items, newItem];
      }

      state.totalQuantity++;
    },
    decrementCart: (state, action) => {
      const myItem = action.payload.item;
      const existingItemIndex = state.items.findIndex((item) => item.name === myItem.name);
      if(existingItemIndex >= 0){
        if(state.items[existingItemIndex].quantity > 0){
            state.items[existingItemIndex].quantity -= 1;
        } 
        if(state.items[existingItemIndex].quantity === 0){
            state.items.splice(existingItemIndex,1);
        }
        if(state.totalQuantity > 0){
            state.totalQuantity--;
        } else {
            return
        }
        
      }
    },
    removeFromCart: (state,action) => {
        const thisItem = action.payload.item;
        const itemIndex = state.items.findIndex((item) => item.name === thisItem);
        const existingItem = state.items[itemIndex];
        state.items.splice(itemIndex,1);
        state.totalQuantity = parseInt(state.totalQuantity - existingItem.quantity);
        existingItem.quantity = 0;
    },
    toggleModal: (state,action) => {
       const toggle = action.payload.toggle;
        if(toggle === false){
            state.modalIsVisible = false;
        }
        if(toggle === true) {
            state.modalIsVisible = true;
        }

    },
    emptyCart: (state,action) => {
        state.items = [];
        state.totalQuantity = 0;
    }
  },
});

export const { incrementCart, decrementCart, removeFromCart, toggleModal, emptyCart} = cartSlice.actions;
export default cartSlice.reducer;
