import { configureStore } from "@reduxjs/toolkit";
import dropdownReducer from "../features/DropdownFeature/DropdownSlice"


const store = configureStore({
	reducer: {
		dropdownMenu: dropdownReducer,
	},
});

export default store;
