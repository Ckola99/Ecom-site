import { configureStore } from "@reduxjs/toolkit";
import dropdownReducer from "../features/DropdownFeature/DropdownSlice";
import addToCartReducer from "../features/AddToCartFeature/AddToCartSlice";
import cartModalReducer from "../features/CartModalFeature/CartModalSlice";

const store = configureStore({
	reducer: {
		dropdown: dropdownReducer,
		addToCart: addToCartReducer,
		cartModal: cartModalReducer,
	},
});

export default store;
