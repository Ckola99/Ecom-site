import { configureStore } from "@reduxjs/toolkit";
import dropdownReducer from "../features/DropdownFeature/DropdownSlice";
import addToCartReducer from "../features/AddToCartFeature/AddToCartSlice";
import cartModalReducer from "../features/CartModalFeature/CartModalSlice";
import confirmationReducer from "../features/ConfirmationFeature/ConfirmationSlice";
import checkoutReducer from "../features/CheckoutFeature/CheckoutSlice";

// used during initial renders passing data if present to preloaded state and gives us initialState
const loadCartState = () => {
	try {
		const serializedState = localStorage.getItem("cart");
		if (serializedState === null) {
			return undefined;
		}
		const parsedState = JSON.parse(serializedState);

		// Ensure the state structure is correct
		if (
			parsedState &&
			Array.isArray(parsedState.items) &&
			typeof parsedState.numberOfItems === "number"
		) {
			return parsedState;
		} else {
			return undefined;
		}
	} catch (err) {
		return undefined;
	}
};

// this function is responsible for saving the cart to localStorage whenever the state changes
const saveCartState = (state) => {
	try {
		const serializedState = JSON.stringify(state.addToCart);
		localStorage.setItem('cart', serializedState);
	} catch(err) {
		console.log(err)
	}
};

const store = configureStore({
	reducer: {
		dropdown: dropdownReducer,
		addToCart: addToCartReducer,
		cartModal: cartModalReducer,
		confirmationModal: confirmationReducer,
		checkout: checkoutReducer
	},
	preloadedState : {
		addToCart: loadCartState(),
	},
});

store.subscribe(() => {
	saveCartState(store.getState());
})

export default store;
