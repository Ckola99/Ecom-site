import cart from "/assets/shared/desktop/icon-cart.svg";
import logo from "/assets/shared/desktop/logo.svg";
import hamburger from "/assets/shared/tablet/icon-hamburger.svg";
import DropdownMenu from "./DropdownMenu";
import {
  selectState,
  openDropdown,
  closeDropdown,
} from "../features/DropdownFeature/DropdownSlice";
import { selectCartState } from "../features/CartModalFeature/CartModalSlice"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectItems } from "../features/AddToCartFeature/AddToCartSlice"

const Navbar = ({ openCart, closeCart }) => {
  const isOpen = useSelector(selectState);
  const dispatch = useDispatch();
  const cartIsOpen = useSelector(selectCartState);
  const cartItems = useSelector(selectItems)

  const handleClick = () => {
	if(isOpen) {
		dispatch(closeDropdown())
	} else {
		dispatch(openDropdown())
	}
  }

  const handleCartClick = () => {
	if(cartIsOpen){
		dispatch(closeCart)
	} else {
		dispatch(openCart)
	}
  }

  return (
		<>
			<div className="fixed top-0 left-0 right-0 z-30">
				<div
					className={`flex justify-center h-[58px] border-b items-center bg-black`}
				>
					<div className="text-white flex justify-around w-full h-[25px] ">
						<img
							src={hamburger}
							alt="hamburger icon"
							className="w-[16px] h-[15px] cursor-pointer"
							onClick={handleClick}
						/>
						<Link to="/">
							<img
								src={logo}
								alt="logo"
								className="w-[143px] h-[25px]"
							/>
						</Link>
						<div className="relative">
							<img
								src={cart}
								alt="cart icon"
								className="w-[23px] h-[20px] cursor-pointer"
								onClick={
									handleCartClick
								}
							/>
							{cartItems.length >
								0 && (
								<div className="w-[15px] h-[15px] bg-main-orange rounded-full absolute flex justify-center items-center -top-[8px] left-[15px]">
									<p className="text-[7px]">
										{
											cartItems.length
										}
									</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
			<DropdownMenu />
		</>
  );
};

export default Navbar;
