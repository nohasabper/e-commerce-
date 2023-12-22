
import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk('productsSlice/fetchProducts'
,async()=>{
   const res = await  fetch(`https://dummyjson.com/products`)
   const data = await  res.json()
   return data
})

export const productsSlice = createSlice({
   name: 'productsSlice',
   initialState : [],
   reducers: {
      handleSearchJobs: (state, action) => {
         state.searchedProduct= [];
         state.searchedProduct.push(action.payload)
     },
   },
   extraReducers: (builder)=>{
      builder.addCase(fetchProducts.fulfilled,(state,action)=>{
         return action.payload;
      })
   }
 })
 
 export const {} = productsSlice.actions
 
 export default productsSlice.reducer
// import { createAsyncThunk, isFulfilled } from "@reduxjs/toolkit";
// import { createSlice } from "@reduxjs/toolkit";
// export const fetchProducts = createAsyncThunk("ProductsSlices/fetchProducts",
// async()=>{
// const res=await fetch("https://dummyjson.com/products/category/smartphones");
// const data =await res.json();
// return data;
// }

// )

//  export const ProductsSlice=createSlice({
// initialState:[],
// name:"ProductsSlices",
// reducers:{},
// extraReducers:(builder)=>{
//     builder.addCase(fetchProducts,isFulfilled,(state,action)=>{
//         return action.payload;
//     })
// }

// }) 
// export const {}= ProductsSlice.actions;
// export default ProductsSlice.reducer;
