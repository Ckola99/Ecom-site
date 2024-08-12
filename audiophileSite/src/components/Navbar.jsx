import cart from "../assets/shared/desktop/icon-cart.svg";
import logo from "../assets/shared/desktop/logo.svg";
import hamburger from "../assets/shared/tablet/icon-hamburger.svg";

const Navbar = () => {
	return (
		<div className="flex justify-center h-[58px] border-b items-center bg-black">
			<div className="text-white flex justify-around w-full h-[25px] ">
				<img src={hamburger} alt="hamburger icon" className="w-[16px] h-[15px]"/>
				<img src={logo} alt="logo" className="w-[143px] h-[25px]"/>
				<img src={cart} alt="cart icon" className="w-[23px] h-[20px]"/>
			</div>
		</div>
	);
};
export default Navbar;
