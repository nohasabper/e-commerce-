import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./Slices/Products-slices";
import cartSlice from "./Slices/cart-slice";
import  userDetail  from "../Rtk/Slices/Users-slices";
export const store=configureStore({
    reducer:{
   app:userDetail,
     products: ProductsSlice,  cart :cartSlice,
    }
})

