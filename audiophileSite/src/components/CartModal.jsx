import { useDispatch, useSelector } from "react-redux";
import {
	selectItems,
	clearCart,
	addItem,
	removeItem,
} from "../features/AddToCartFeature/AddToCartSlice";
import { Link } from "react-router-dom";

const CartModal = ({ isOpen, handleCloseModal }) => {
	const itemsInCart = useSelector(selectItems);
	const dispatch = useDispatch();

	const totalAmount = itemsInCart.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	return isOpen ? (
		<div
			className="fixed inset-0 flex bg-gray-800 bg-opacity-50 transition-colors z-[12]"
			onClick={handleCloseModal}
		>
			<div
				className="bg-white p-8 rounded-lg shadow-lg w-[327px] max-h-[488px] mx-auto mt-[80px] flex flex-col justify-between overflow-auto"
				onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking inside it
			>
				<h1 className="flex justify-between font-bold text-lg tracking-[1.29px]">
					Cart ({itemsInCart.length})
					<button
						className="font-medium text-[15px] leading-[25px] underline opacity-50"
						onClick={() =>
							dispatch(clearCart())
						}
					>
						Remove all
					</button>
				</h1>
				<div className="flex flex-col gap-5">
					{itemsInCart.length > 0 ? (
						itemsInCart.map(
							(item, index) => {
								const productImage = `/assets/product-${item.slug}/mobile/image-category-page-preview.jpg`;
								const formattedName =
									item.name
										.replace(
											/earphones/i,
											""
										)
										.replace(
											/headphones/i,
											""
										)
										.replace(
											/wireless/i,
											""
										)
										.replace(
											/mark/i,
											"mk"
										)
										.trim();

								return (
									<div
										key={
											index
										}
										className="flex items-center justify-between"
									>
										<img
											src={
												productImage
											}
											alt={
												item.name
											}
											className="w-[64px] h-[64px] rounded-lg"
										/>
										<p className="font-bold w-[76px] h-[50px] text-[15px] leading-[25px] text-transform: uppercase">
											{
												formattedName
											}
											<span className="block text-[14px] opacity-50 leading-[25px">
												$
												{(
													item.price *
													item.quantity
												).toLocaleString()}
											</span>
										</p>
										<div className="w-[96px] h-[32px] bg-second-gray flex justify-around items-center">
											<button
												className="opacity-40 font-bold text-[13px] leading-[1px]"
												onClick={() =>
													dispatch(
														removeItem(
															item
														)
													)
												}
											>
												-
											</button>
											<p className="text-[13px]">
												{
													item.quantity
												}
											</p>
											<button
												className="opacity-40 font-bold text-[13px] leading-[1px]"
												onClick={() =>
													dispatch(
														addItem(
															item
														)
													)
												}
											>
												+
											</button>
										</div>
									</div>
								);
							}
						)
					) : (
						<p className="text-center text-gray-500">
							Your cart is empty.
						</p>
					)}
				</div>
				{itemsInCart.length > 0 && (
					<div className="flex justify-between font-bold text-lg">
						<p className="text-transform: uppercase font-medium text-[15px] opacity-50 leading-[25px]">
							Total
						</p>
						<p>
							${" "}
							{totalAmount.toLocaleString()}
						</p>
					</div>
				)}
				<Link to="checkout">
					<button
						onClick={handleCloseModal}
						className="w-full h-[48px] bg-main-orange text-white text-transform: uppercase text-[13px] font-bold tracking-[1px] mt-4"
					>
						Checkout
					</button>
				</Link>
			</div>
		</div>
	) : null;
};

export default CartModal;

