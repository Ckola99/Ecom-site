import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	confirmed: false,
};

const confirmationSlice = createSlice({
	name: "confirmationModal",
	initialState,
	reducers: {
		closeConfirmationModal: (state) => {
			state.confirmed = false;
		},
		openConfirmationModal: (state) => {
			state.confirmed = true;
		}
	}
})

export const selectState = (state) => state.confirmationModal.confirmed;
export const { openConfirmationModal, closeConfirmationModal } = confirmationSlice.actions;
export default confirmationSlice.reducer;
