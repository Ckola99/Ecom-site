import {
	addItem,
	removeItem,
	selectItems,
} from "../features/AddToCartFeature/AddToCartSlice";
import { useDispatch, useSelector } from "react-redux";

const AddToCart = ({ product }) => {
	const itemsInCart = useSelector(selectItems);
	const dispatch = useDispatch();

	// Find the current product in the cart
	const cartItem = itemsInCart.find((item) => item.id === product.id);

	const handleAdd = () => {
		dispatch(addItem(product));
	};

	const handleRemove = () => {
		if (cartItem && cartItem.quantity > 0) {
			dispatch(removeItem(product));
		}
	};

	return (
		<div className="w-[296px] h-[48px] flex justify-between">
			<div className="w-[120px] h-[48px] bg-second-gray flex justify-around items-center">
				<button
					className="opacity-40 font-bold text-[13px] leading-[1px] hover:main-orange"
					onClick={handleRemove}
				>
					-
				</button>
				<p className="text-[13px]">
					{cartItem ? cartItem.quantity : 0}
				</p>
				<button
					className="opacity-40 font-bold text-[13px] leading-[1px] hover:main-orange"
					onClick={handleAdd}
				>
					+
				</button>
			</div>
			<button
				className="w-[160px] h-[48px] bg-main-orange flex justify-center items-center"
				onClick={handleAdd}
			>
				<p className="text-white text-transform: uppercase font-bold text-[13px] leading-[1px] hover:bg-[#FBAF85]">
					add to cart
				</p>
			</button>
		</div>
	);
};

export default AddToCart;
