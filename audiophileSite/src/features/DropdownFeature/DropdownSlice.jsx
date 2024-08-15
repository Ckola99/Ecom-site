import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	idOpen: false,
};

const dropdownSlice = createSlice({
	name: "dropdown",
	initialState,
	reducers: {
		closeDropdown: (state) => {
			state.isOpen = false;
		},
		openDropdown: (state) => {
			state.isOpen = true;
		}
	}
})

export const selectState = (state) => state.dropdown.isOpen;
export const { openDropdown, closeDropdown } = dropdownSlice.actions;
export default dropdownSlice.reducer;
