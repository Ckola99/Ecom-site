import cart from "/assets/shared/desktop/icon-cart.svg";
import logo from "/assets/shared/desktop/logo.svg";
import hamburger from "/assets/shared/tablet/icon-hamburger.svg";
import DropdownMenu from "./DropdownMenu";
import {
	selectState,
	openDropdown,
	closeDropdown,
} from "../features/DropdownFeature/DropdownSlice";
import { selectCartState } from "../features/CartModalFeature/CartModalSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
	selectItems,
	selectTotalNumberOfItems,
} from "../features/AddToCartFeature/AddToCartSlice";
import { useEffect, useState } from "react";

const Navbar = ({ openCart, closeCart }) => {
	const isOpen = useSelector(selectState);
	const dispatch = useDispatch();
	const cartIsOpen = useSelector(selectCartState);
	const cartItems = useSelector(selectItems);
	const totalItems = useSelector(selectTotalNumberOfItems);

	const handleClick = () => {
		if (isOpen) {
			dispatch(closeDropdown());
		} else {
			dispatch(openDropdown());
		}
	};

	const handleCartClick = () => {
		if (cartIsOpen) {
			dispatch(closeCart);
		} else {
			dispatch(openCart);
		}
	};

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		window.addEventListener("resize", handleResize);

		// Check initial width on component mount
		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<div className="fixed top-0 left-0 right-0 z-30 bg-black">
				<div
					className={`flex justify-center h-[58px] ${
						isMobile &&
						"border-b-[1px] border-[#FAFAFA]"
					} items-center bg-black md:w-[689px] mx-auto lg:w-[83%]`}
				>
					<div className="flex justify-around w-full h-[25px] md:grid md:grid-cols-[100px_339px_250px] lg:grid-cols-3">
						<img
							src={hamburger}
							alt="hamburger icon"
							className="w-[16px] h-[15px] cursor-pointer lg:hidden"
							onClick={handleClick}
						/>
						<Link to="/">
							<img
								src={logo}
								alt="logo"
								className="w-[143px] h-[25px]"
								onClick={() =>
									dispatch(
										closeDropdown()
									)
								}
							/>
						</Link>

						<div className="hidden lg:flex uppercase">
							<ul className="text-white flex flex-row justify-between w-full text-[13px]">
							<li>
								<Link
									to="/"
									className="block hover:text-main-orange"
								>
									home
								</Link>
							</li>
							<li>
								<Link
									to="/category/headphones"
									className="block hover:text-main-orange"
								>
									headphones
								</Link>
							</li>
							<li>
								<Link
									to="/category/speakers"
									className="block hover:text-main-orange"
								>
									speakers
								</Link>
							</li>
							<li>
								<Link
									to="/category/earphones"
									className="block hover:text-main-orange"
								>
									earphones
								</Link>
							</li>
						</ul>
						</div>
						<div className="relative md:justify-self-end">
							<img
								src={cart}
								alt="cart icon"
								className="w-[23px] h-[20px] cursor-pointer "
								onClick={
									handleCartClick
								}
							/>
							{cartItems.length >
								0 && (
								<div className="w-[15px] h-[15px] bg-main-orange rounded-full absolute flex justify-center items-center -top-[8px] left-[15px]">
									<p className="text-[7px]">
										{
											totalItems
										}
									</p>
								</div>
							)}
						</div>
					</div>
				</div>
				{!isMobile && (
					<div className="border-b-[0.5px] border-white w-[689px] mx-auto lg:w-[83%]"></div>
				)}
			</div>
			<DropdownMenu />
		</>
	);
};

export default Navbar;
