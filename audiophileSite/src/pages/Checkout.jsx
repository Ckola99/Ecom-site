import { useNavigate } from "react-router-dom";
import { selectItems } from "../features/AddToCartFeature/AddToCartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
	openConfirmationModal
} from "../features/ConfirmationFeature/ConfirmationSlice";
import ConfirmationModal from "../components/ConfirmationModal"
import { setCheckoutFormData } from "../features/CheckoutFeature/CheckoutSlice";
import COD from "/assets/checkout/icon-cash-on-delivery.svg"
import { Helmet } from "react-helmet";

// validation schema
const validationSchema = yup
	.object({
		Name: yup.string().required("Missing name"),
		"Email Address": yup
			.string()
			.required("Missing email")
			.email("Invalid email format"),
		"Phone Number": yup.string().required("Missing phone number"),
		"Your Address": yup.string().required("Missing address"),
		"ZIP Code": yup.string().required("Missing ZIP Code"),
		City: yup.string().required("Missing city"),
		Country: yup.string().required("Missing country"),
		paymentMethod: yup.string().required("Select payment method"),
		"e-Money Number": yup.string().when("paymentMethod", {
			is: (value) => value === "e-Money",
			then: (schema) =>
				schema.required("enter e-Money number"),
		}),
		"e-Money PIN": yup.string().when("paymentMethod", {
			is: (value) => value === "e-Money",
			then: (schema) => schema.required("enter e-Money PIN"),
		}),
	})
	.required();

const Input = ({ label, register, type, errors }) => {
	const hasError = !!errors[label];

	return (
		<div className="w-[280px] h-[81px] flex flex-col justify-between md:w-full">
			<div className=" flex justify-between">
				<label
					htmlFor={label}
					className={`font-bold text-[12px] ${
						hasError ? "text-red-600" : ""
					}`}
				>
					{label}
				</label>
				{errors[label] && (
					<span
						role="alert"
						className="text-red-600 text-[12px] font-bold"
					>
						{errors[label].message}
					</span>
				)}
			</div>
			<input
				className={`w-full h-[56px] border-2 ${
					hasError
						? "border-red-600"
						: "border-black"
				} rounded-lg pl-6 text-[14px] font-bold opacity-50 focus:outline-none focus:border-main-orange caret-main-orange`}
				id={label}
				type={type}
				{...register(label)}
			/>
		</div>
	);
};

const RadioButton = ({ label, id, value, register, name, errors }) => {
	return (
		<div className="flex items-center mb-2 border border-black rounded-lg w-[280px] h-[56px] focus-within:border focus-within:border-main-orange hover: main-orange md:w-full">
			<input
				type="radio"
				id={id}
				value={value}
				className="mx-4 w-[20px] h-[20px] accent-main-orange border-main-orange focus:border-main-orange focus:ring-0"
				{...register(name)}
			/>
			<label htmlFor={id} className="font-bold text-[14px]">
				{label}
			</label>
		</div>
	);
};

const Checkout = () => {
	const navigate = useNavigate();
	const cart = useSelector(selectItems);

	const totalAmount = cart.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	const shipping = 50;

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm({
		resolver: yupResolver(validationSchema),
	});

	const submitForm = (data) => {
		console.log("data", data);
		dispatch(setCheckoutFormData(data))
	};

	const paymentMethod = watch("paymentMethod");
	const dispatch = useDispatch();

	const handleClick = async () => {
	// Perform form submission and validation
	await handleSubmit(async (data) => {
		// If validation is successful (no errors), proceed
		if (Object.keys(errors).length === 0) {
			await submitForm(data);  // Submit the form data
			dispatch(openConfirmationModal());  // Open the confirmation modal
		}
	})();
};
	return (
		<div className="bg-[#FAFAFA] pb-20 flex flex-col items-center">
			<Helmet>
				<title>Checkout - Complete Your Purchase</title>
				<meta
					name="description"
					content="Complete your purchase on our Checkout page. Review your cart, enter billing and shipping details, and choose your payment method. Enjoy a seamless checkout experience with options like e-Money or Cash on Delivery. Ensure all your information is accurate and proceed to pay securely. Contact us for any assistance."
				/>
			</Helmet>
			<ConfirmationModal />
			<button
				onClick={() => navigate(-1)}
				className="text-[15px] font-medium leading-[25px] ml-[25px] my-[25px] opacity-50 self-start hover:text-main-orange lg:ml-[8.5%] lg:mt-[5%]"
			>
				Go Back
			</button>

			<div className="lg:w-[80%] lg:grid lg:grid-cols-[65%_31.5%] lg:gap-[3%]">
				<form
					className="bg-white w-[327px] h-auto mx-auto rounded-lg py-6 px-5 md:w-[689px] lg:w-full"
					onSubmit={handleSubmit(submitForm)}
				>
					<h1 className="text-transform: uppercase mb-8 font-bold">
						Checkout
					</h1>

					{/* Billing Details */}
					<fieldset className="mb-6 flex h-auto flex-col gap-5 md:grid md:grid-cols-2">
						<legend className="text-transform: uppercase text-main-orange font-bold mb-4">
							Billing Details
						</legend>

						<Input
							label="Name"
							register={register}
							type="text"
							errors={errors}
						/>
						<Input
							label="Email Address"
							register={register}
							type="email"
							errors={errors}
						/>
						<Input
							label="Phone Number"
							register={register}
							type="tel"
							errors={errors}
						/>
					</fieldset>

					{/* Shipping Info */}
					<fieldset className="mb-6 flex h-auto flex-col gap-5">
						<legend className="text-transform: uppercase text-main-orange font-bold mb-4">
							Shipping Info
						</legend>

						<Input
							label="Your Address"
							register={register}
							type="text"
							errors={errors}
						/>
						<div className="md:grid md:grid-cols-2 gap-5">
							<Input
								label="ZIP Code"
								register={
									register
								}
								type="text"
								errors={errors}
							/>
							<Input
								label="City"
								register={
									register
								}
								type="text"
								errors={errors}
							/>
							<Input
								label="Country"
								register={
									register
								}
								type="text"
								errors={errors}
							/>
						</div>
					</fieldset>

					{/* Payment Details */}
					<fieldset className="mb-6">
						<legend className="text-transform: uppercase text-main-orange font-bold mb-4">
							Payment Details
						</legend>

						<div className="md:grid md:grid-cols-2">
							<div className="">
								<label className="block font-bold mb-2 text-[12px]">
									Payment
									Method
								</label>
								<div className="flex justify-between">
									{errors.paymentMethod && (
										<span
											role="alert"
											className="text-red-500 font-bold text-[12px]"
										>
											{
												errors
													.paymentMethod
													.message
											}
										</span>
									)}
								</div>
							</div>
							<div className="flex flex-col gap-2 ">
								<RadioButton
									label="e-Money"
									id="eMoney"
									value="e-Money"
									register={
										register
									}
									name="paymentMethod"
									errors={
										errors
									}
								/>
								<RadioButton
									label="Cash on Delivery"
									id="COD"
									value="Cash on Delivery"
									register={
										register
									}
									name="paymentMethod"
									errors={
										errors
									}
								/>
							</div>
						</div>

						{paymentMethod ===
							"Cash on Delivery" && (
							<div className="hidden lg:flex lg:gap-10 mt-3">
								<img
									src={
										COD
									}
									className="ml-10"
								/>
								<p className="lg:w-[76%] text-[15px] font-medium">
									The
									‘Cash on
									Delivery’
									option
									enables
									you to
									pay in
									cash
									when our
									delivery
									courier
									arrives
									at your
									residence.
									Just
									make
									sure
									your
									address
									is
									correct
									so that
									your
									order
									will not
									be
									cancelled.
								</p>
							</div>
						)}

						{/* Conditional rendering of e-Money fields */}
						{paymentMethod ===
							"e-Money" && (
							<div className="mt-4 flex flex-col gap-5 md:flex-row">
								<Input
									label="e-Money Number"
									register={
										register
									}
									type="text"
									errors={
										errors
									}
								/>
								<Input
									label="e-Money PIN"
									register={
										register
									}
									type="text"
									errors={
										errors
									}
								/>
							</div>
						)}
					</fieldset>
				</form>

				<div className="bg-white rounded-lg w-[327px] grid justify-self-center mt-10 h-auto p-5 md:w-[689px] lg:m-0 lg:w-full lg:p-0 lg:col-start-2 lg:row-span-[50%] lg:flex lg:flex-col lg:h-[80%] lg:overflow-auto">
					<h1 className="text-transform: uppercase py-7 px-5 font-bold text-[18px] ">
						summary
					</h1>
					<div className="flex flex-col gap-5 ">
						{cart.map((item, index) => {
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
									.replace(
										/speaker/i,
										""
									)
									.trim();

							return (
								<div
									key={
										index
									}
									className="flex justify-between px-5 "
								>
									<div className="flex items-center">
										<img
											src={
												productImage
											}
											alt={
												item.name
											}
											className="w-[64px] h-[64px] rounded-lg mr-5"
										/>
										<p className="font-bold w-[76px] h-[50px] text-[15px] text-transform: uppercase">
											{
												formattedName
											}
											<span className="block text-[14px] opacity-50">
												$
												{(
													item.price *
													item.quantity
												).toLocaleString()}
											</span>
										</p>
									</div>
									<p className="font-bold opacity-50 flex items-center">
										x
										{
											item.quantity
										}
									</p>
								</div>
							);
						})}
					</div>
					<div className="px-5 py-7 flex flex-col gap-3 ">
						<p className="text-transform: uppercase flex justify-between font-bold">
							<span className="font-medium opacity-50">
								Total
							</span>
							${" "}
							{totalAmount.toLocaleString()}
						</p>

						{cart.length > 0 && (
							<p className="text-transform: uppercase font-bold flex justify-between">
								<span className="font-medium opacity-50">
									shipping
								</span>
								$ {shipping}
							</p>
						)}

						<p className="text-transform: uppercase flex justify-between font-bold">
							<span className="font-medium opacity-50">
								vat (included)
							</span>
							${" "}
							{Number(
								(
									0.2 *
									totalAmount
								).toFixed(0)
							).toLocaleString()}
						</p>
					</div>

					<p className="text-transform: uppercase flex justify-between font-bold px-5 text-main-orange">
						<span className="font-medium text-black opacity-50">
							Grand total
						</span>
						${" "}
						{cart.length > 0
							? (
									totalAmount +
									shipping
							  ).toLocaleString()
							: 0}
					</p>

					<button
						onClick={handleClick}
						className={`w-[285px] h-[48px] md:w-[623px] lg:w-[81%] ${
							cart.length === 0
								? "bg-white text-black border border-black cursor-not-allowed"
								: "bg-main-orange cursor-pointer text-white"
						} text-transform: uppercase text-[13px] font-bold tracking-[1px] mx-auto mt-10 ${
							cart.length &&
							"hover:bg-[#FBAF85]"
						} mb-5 lg:mb-0`}
						disabled={cart.length === 0}
					>
						continue & pay
					</button>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
