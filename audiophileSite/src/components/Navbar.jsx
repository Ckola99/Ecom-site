import cart from "/assets/shared/desktop/icon-cart.svg";
import logo from "/assets/shared/desktop/logo.svg";
import hamburger from "/assets/shared/tablet/icon-hamburger.svg";
import DropdownMenu from "./DropdownMenu";
import {
	selectState,
	openDropdown,
	closeDropdown,
} from "../features/DropdownFeature/DropdownSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = ({ openCart }) => {
	const isOpen = useSelector(selectState);
	const dispatch = useDispatch();

	return (
		<div className="">
			<div
				className={`flex justify-center h-[58px] border-b items-center bg-black ${
					isOpen ? "z-50" : "z-10"
				}`}
			>
				<div className="text-white flex justify-around w-full h-[25px] ">
					<img
						src={hamburger}
						alt="hamburger icon"
						className="w-[16px] h-[15px]"
					/>
					<Link to='/'>
						<img
							src={logo}
							alt="logo"
							className="w-[143px] h-[25px]"
						/>
					</Link>
					<img
						src={cart}
						alt="cart icon"
						className="w-[23px] h-[20px]"
						onClick={openCart}
					/>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
