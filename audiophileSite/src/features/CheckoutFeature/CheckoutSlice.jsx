import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	formData: null,
};

const checkoutSlice = createSlice({
	name: "checkout",
	initialState,
	reducers: {
		setCheckoutFormData: (state, action) => {
			state.formData = action.payload;
		},
		clearCheckoutFormData: (state) => {
			state.formData = null;
		},
	},
});

export const { setCheckoutFormData, clearCheckoutFormData } = checkoutSlice.actions;
export const selectCheckoutFormData = (state) => state.checkout.formData;
export default checkoutSlice.reducer;
