import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import CartModal from "../components/CartModal";
import { useDispatch, useSelector } from "react-redux";
import {
	openModal,
	closeModal,
} from "../features/CartModalFeature/CartModalSlice";
import { addItem, removeItem,  } from "../features/AddToCartFeature/AddToCartSlice";
import { selectState } from "../features/CartModalFeature/CartModalSlice";

const Layout = () => {

	const isModalOpen = useSelector(selectState);
	const dispatch = useDispatch();

	const handleOpenModal = () => {
		dispatch(openModal());
	};

	const handleCloseModal = () => {
		dispatch(closeModal());
	};

	return (
		<div>
			<ScrollToTop />
			<Navbar openCart = {handleOpenModal}/>
			<CartModal isOpen={isModalOpen} handleCloseModal={handleCloseModal}/>
			<main>
				<Outlet add={addItem} remove={removeItem}/>
			</main>
			<Footer />
		</div>
	);
};
export default Layout;
