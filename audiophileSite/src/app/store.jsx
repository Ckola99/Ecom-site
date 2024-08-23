import { configureStore } from "@reduxjs/toolkit";
import dropdownReducer from "../features/DropdownFeature/DropdownSlice";
import addToCartReducer from "../features/AddToCartFeature/AddToCartSlice";
import cartModalReducer from "../features/CartModalFeature/CartModalSlice";
import confirmationReducer from "../features/ConfirmationFeature/ConfirmationSlice";
import checkoutReducer from "../features/CheckoutFeature/CheckoutSlice";

const store = configureStore({
	reducer: {
		dropdown: dropdownReducer,
		addToCart: addToCartReducer,
		cartModal: cartModalReducer,
		confirmationModal: confirmationReducer,
		checkout: checkoutReducer
	},
});

export default store;
