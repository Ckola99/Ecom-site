import { useSelector, useDispatch } from "react-redux";
import {
	closeConfirmationModal,
	selectState,
} from "../features/ConfirmationFeature/ConfirmationSlice";
import checkMark from "/assets/checkout/icon-order-confirmation.svg";
import { clearCart, selectItems } from "../features/AddToCartFeature/AddToCartSlice";
import { useNavigate } from "react-router-dom";
import { clearCheckoutFormData } from "../features/CheckoutFeature/CheckoutSlice";

const ConfirmationModal = () => {
	const modalOpen = useSelector(selectState);
	const dispatch = useDispatch();
	const cart = useSelector(selectItems);
	const formatName = (name) => {
		return name
			.replace(/earphones/i, "")
			.replace(/headphones/i, "")
			.replace(/wireless/i, "")
			.replace(/mark/i, "mk")
			.trim();
	};

  const totalAmount = cart.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

  const grandTotal = totalAmount + 50;
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(closeConfirmationModal());
    dispatch(clearCart());
    dispatch(clearCheckoutFormData());
    navigate("/");
  }

	return (
		modalOpen && (
			<div
				className="fixed inset-0 flex bg-gray-800 bg-opacity-50 transition-colors z-[12]"
				onClick={() =>
					dispatch(closeConfirmationModal())
				}
			>
				<div
					className="bg-white p-8 rounded-lg shadow-lg w-[327px] max-h-[600px] mx-auto mt-[80px] flex flex-col justify-between overflow-auto"
					onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking inside it
				>
					<img
						src={checkMark}
						alt="confirmation check"
						className="h-[64px] w-[64px]"
					/>
					<h1 className="font-bold text-2xl text-transform: uppercase leading-[28px] tracking-[0.86px]">
						Thank you{" "}
						<span className="block">
							for your order
						</span>
					</h1>
					<p className="text-[15px] leading-[25px] opacity-50 font-medium">
						You will receive an email
						confirmation shortly
					</p>
					<div className="w-[263px] h-[232px] overflow-hidden rounded-lg">
						<div className="bg-second-gray h-[140px] w-full p-6">
							<div className="flex justify-between">
                <img
								src={
									cart[0]
										.categoryImage
										.mobile
								}
								alt={
									cart[0]
										.name
								}
								className="w-[50px] h-[50px] object-fit"
							/>
              <p class="flex flex-col font-bold text-transform: uppercase">
									{formatName(
										cart[0]
											.name
									)}
									<span className="opacity-50">
										${" "}
										{cart[0].price.toLocaleString()}
									</span>
								</p>
								<p className="font-bold opacity-50">
									x
									{
										cart[0]
											.quantity
									}
								</p>
						</div>
            { cart.length > 1 && ( <div className="border-b border-black opacity-25 w-full my-3"></div>)}
            	{cart.length > 1 && (
							<p className="opacity-50 font-bold text-center">
								and{" "}
								{cart.length -
									1}{" "}
								other item(s)
							</p>
						)}
              </div>

						<div className="w-[263px] h-[92px] bg-black text-white">
							<p className="flex flex-col justify-between p-6 font-bold text-[18px]">
								<span className="opacity-50 text-transform: uppercase font-normal text-[15px]">
									grand
									total
								</span>
								${" "}
								{grandTotal.toLocaleString()}
							</p>
						</div>
					</div>
						<button onClick={handleClick} className="w-full h-[48px] bg-main-orange text-white text-transform: uppercase text-[13px] font-bold tracking-[1px]">
							back home
						</button>
				</div>
			</div>
		)
	);
};

export default ConfirmationModal;
