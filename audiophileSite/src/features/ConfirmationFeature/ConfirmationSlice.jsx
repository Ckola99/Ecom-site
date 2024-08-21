import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isOpen: false,
};

const confirmationSlice = createSlice({
	name: "confirmationModal",
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

export const selectState = (state) => state.confirmationModal.isOpen;
export const { openModal, closeModal } = confirmationSlice.actions;
export default confirmationSlice.reducer;
