import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isOpen: false,
};

const cartModalSlice = createSlice({
	name: "cartModal",
	initialState,
	reducers: {
		closeModal: (state) => {
			state.isOpen = false;
		},
		openModal: (state) => {
			state.isOpen = true;
		}
	}
})

export const selectState = (state) => state.cartModal.isOpen;
export const { openModal, closeModal } = cartModalSlice.actions;
export default cartModalSlice.reducer;
