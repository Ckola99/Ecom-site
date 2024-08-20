import { useForm } from "react-hook-form";

const CheckoutForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();

	const onSubmit = (data) => {
    	console.log(data);
  	};

	const paymentMethod = watch("paymentMethod");

	return (
		<form
			className="bg-white w-[327px] h-[1378px] mx-auto rounded-lg py-6 px-5"
			onSubmit={handleSubmit(onSubmit)}
		>
			<h1 className="text-transform: uppercase mb-8 font-bold">
				Checkout
			</h1>

			{/* Billing Details */}
			<fieldset className="mb-6">
				<legend className="text-transform: uppercase text-main-orange font-bold mb-4">
					Billing Details
				</legend>

				<div>
					<label htmlFor="name">Name</label>
					<input
						id="name"
						type="text"
						{...register("name", {
							required: "Name is required",
						})}
						aria-invalid={
							errors.name
								? "true"
								: "false"
						}
					/>
					{errors.name && (
						<span role="alert">
							{errors.name.message}
						</span>
					)}
				</div>

				<div>
					<label htmlFor="email">Email</label>
					<input
						id="email"
						type="email"
						{...register("email", {
							required: "Email is required",
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
								message: "Enter a valid email address",
							},
						})}
						aria-invalid={
							errors.email
								? "true"
								: "false"
						}
					/>
					{errors.email && (
						<span role="alert">
							{errors.email.message}
						</span>
					)}
				</div>

				<div>
					<label htmlFor="phone">
						Phone Number
					</label>
					<input
						id="phone"
						type="tel"
						{...register("phone", {
							required: "Phone number is required",
							pattern: {
								value: /^\+?[1-9]\d{1,14}$/,
								message: "Enter a valid phone number",
							},
						})}
						aria-invalid={
							errors.phone
								? "true"
								: "false"
						}
					/>
					{errors.phone && (
						<span role="alert">
							{errors.phone.message}
						</span>
					)}
				</div>
			</fieldset>

			{/* Shipping Info */}
			<fieldset className="mb-6">
				<legend className="text-transform: uppercase text-main-orange font-bold mb-4">
					Shipping Info
				</legend>

				<div>
					<label htmlFor="address">
						Your Address
					</label>
					<input
						id="address"
						type="text"
						{...register("address", {
							required: "Address is required",
						})}
						aria-invalid={
							errors.address
								? "true"
								: "false"
						}
					/>
					{errors.address && (
						<span role="alert">
							{errors.address.message}
						</span>
					)}
				</div>

				<div>
					<label htmlFor="zipCode">
						Zip Code
					</label>
					<input
						id="zipCode"
						type="text"
						{...register("zipCode", {
							required: "Zip Code is required",
							pattern: {
								value: /^[0-9]{5}$/,
								message: "Enter a valid Zip Code",
							},
						})}
						aria-invalid={
							errors.zipCode
								? "true"
								: "false"
						}
					/>
					{errors.zipCode && (
						<span role="alert">
							{errors.zipCode.message}
						</span>
					)}
				</div>

				<div>
					<label htmlFor="city">City</label>
					<input
						id="city"
						type="text"
						{...register("city", {
							required: "City is required",
						})}
						aria-invalid={
							errors.city
								? "true"
								: "false"
						}
					/>
					{errors.city && (
						<span role="alert">
							{errors.city.message}
						</span>
					)}
				</div>

				<div>
					<label htmlFor="country">Country</label>
					<input
						id="country"
						type="text"
						{...register("country", {
							required: "Country is required",
						})}
						aria-invalid={
							errors.country
								? "true"
								: "false"
						}
					/>
					{errors.country && (
						<span role="alert">
							{errors.country.message}
						</span>
					)}
				</div>
			</fieldset>

			{/* Payment Details */}
			<fieldset className="mb-6">
				<legend className="text-transform: uppercase text-main-orange font-bold mb-4">
					Payment Details
				</legend>

				<div>
					<label>Payment Method</label>
					<div>
						<input
							type="radio"
							id="eMoney"
							value="e-Money"
							{...register(
								"paymentMethod",
								{
									required: "Please select a payment method",
								}
							)}
						/>
						<label htmlFor="eMoney">
							e-Money
						</label>
					</div>
					<div>
						<input
							type="radio"
							id="COD"
							value="Cash on Delivery"
							{...register(
								"paymentMethod",
								{
									required: "Please select a payment method",
								}
							)}
						/>
						<label htmlFor="COD">
							Cash on Delivery
						</label>
					</div>
					{errors.paymentMethod && (
						<span role="alert">
							{
								errors
									.paymentMethod
									.message
							}
						</span>
					)}
				</div>

				{/* Conditional rendering of e-Money fields */}
				{paymentMethod === "e-Money" && (
					<>
						<div>
							<label htmlFor="eMoneyNumber">
								e-Money Number
							</label>
							<input
								id="eMoneyNumber"
								type="text"
								{...register(
									"eMoneyNumber",
									{
										required: "e-Money Number is required",
										pattern: {
											value: /^[0-9]{9}$/, // Example pattern for a 9-digit number
											message: "Enter a valid e-Money Number",
										},
									}
								)}
								aria-invalid={
									errors.eMoneyNumber
										? "true"
										: "false"
								}
							/>
							{errors.eMoneyNumber && (
								<span role="alert">
									{
										errors
											.eMoneyNumber
											.message
									}
								</span>
							)}
						</div>

						<div>
							<label htmlFor="eMoneyPIN">
								e-Money PIN
							</label>
							<input
								id="eMoneyPIN"
								type="text"
								{...register(
									"eMoneyPIN",
									{
										required: "e-Money PIN is required",
										pattern: {
											value: /^[0-9]{4}$/, // Example pattern for a 4-digit PIN
											message: "Enter a valid e-Money PIN",
										},
									}
								)}
								aria-invalid={
									errors.eMoneyPIN
										? "true"
										: "false"
								}
							/>
							{errors.eMoneyPIN && (
								<span role="alert">
									{
										errors
											.eMoneyPIN
											.message
									}
								</span>
							)}
						</div>
					</>
				)}
			</fieldset>
		</form>
	);
};
export default CheckoutForm;
