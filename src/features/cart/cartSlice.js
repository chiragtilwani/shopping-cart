import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems'

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    clearCart:(state)=>{
      state.cartItems=[];
    },
    removeItem:(state,action)=>{
      const itemID=action.payload
      state.cartItems=state.cartItems.filter(item=>item.id!==itemID)
    },

    increase:(state,action)=>{
      const itemID=action.payload
      state.cartItems=state.cartItems.map(item=>{
        if(item.id===itemID){
          return {...item,amount:item.amount+1}
        }else{
          return item
        }
      })
    },
    decrease:(state,action)=>{
      const itemID=action.payload
      state.cartItems=state.cartItems.map(item=>{
        if(item.id===itemID){
          return {...item,amount:item.amount-1}
        }else{
          return item
        }
      })
    },
    calculateTotal:(state)=>{
      let amount=0;
      let total=0
      for(let item of state.cartItems){
        amount+=item.amount
        total+=item.amount*item.price
      }
      state.amount=amount
      state.total=total
    }
  }
});

export const {clearCart,removeItem,increase,decrease,calculateTotal} =cartSlice.actions;
export default cartSlice.reducer;
