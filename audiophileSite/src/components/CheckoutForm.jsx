import { useForm } from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

// validation schema
const validationSchema = yup.object({
	Name: yup.string().required('Missing name'),
	"Email Address": yup.string().required('Missing email').email('Invalid email format'),
	"Phone Number": yup.string().required('Missing phone number'),
	"Your Address": yup.string().required('Missing address'),
	"ZIP Code": yup.string().required('Missing ZIP Code'),
	City: yup.string().required('Missing city'),
	Country: yup.string().required('Missing country'),
	paymentMethod: yup.string().required('Please select payment method'),
	eMoneyNumber: yup.string().when('paymentMethod', {
		is: 'e-Money',
		then: yup.string().required('Please enter e-Money number'),
	}),
	eMoneyPIN: yup.string().when('paymentMethod', {
		is: 'e-Money',
		then: yup.string().required('Please enter e-Money PIN'),
	}),
}).required()

const Input = ({ label, register, type }) => {
	return (
		<div className="w-[280px] h-[81px] flex flex-col justify-between">
			<label
				htmlFor={label}
				className="font-bold text-[12px]"
			>
				{label}
			</label>
			<input
				className="w-full h-[56px] border border-black rounded-lg "
				id={label}
				type={type}
				{...register(label)}
			/>
		</div>
	);
};

const RadioButton = ({ label, id, value, register, name }) => {
	return (
		<div className="flex items-center mb-2 border border-black rounded-lg w-[280px] h-[56px]">
			<input
				type="radio"
				id={id}
				value={value}
				className="mx-4 w-[20px] h-[20px]"
				{...register(name)}
			/>
			<label htmlFor={id} className="font-bold text-[14px]">
				{label}
			</label>
		</div>
	);
};

const CheckoutForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm({
		resolver: yupResolver(validationSchema)
	});

	console.log('errors', errors)

	const onSubmit = (data) => {
		console.log(data);
	};

	const paymentMethod = watch("paymentMethod");

	return (
		<form
			className="bg-white w-[327px] h-auto mx-auto rounded-lg py-6 px-5"
			onSubmit={handleSubmit(onSubmit)}
		>
			<h1 className="text-transform: uppercase mb-8 font-bold">
				Checkout
			</h1>

			{/* Billing Details */}
			<fieldset className="mb-6 flex h-auto flex-col gap-5">
				<legend className="text-transform: uppercase text-main-orange font-bold mb-4">
					Billing Details
				</legend>

				<Input
					label="Name"
					register={register}
					type="text"
				/>
				<Input
					label="Email Address"
					register={register}
					type="email"
				/>
				<Input
					label="Phone Number"
					register={register}
					type="tel"
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
				/>
				<Input
					label="ZIP Code"
					register={register}
					type="text"
				/>
				<Input
					label="City"
					register={register}
					type="text"
				/>
				<Input
					label="Country"
					register={register}
					type="text"
				/>
			</fieldset>

			{/* Payment Details */}
			<fieldset className="mb-6">
				<legend className="text-transform: uppercase text-main-orange font-bold mb-4">
					Payment Details
				</legend>

				<div>
					<label className="block font-bold mb-2 text-[12px]">
						Payment Method
					</label>
					<div className="flex flex-col gap-2">
						<RadioButton
						label="e-Money"
						id="eMoney"
						value="e-Money"
						register={register}
						name="paymentMethod"
					/>
					<RadioButton
						label="Cash on Delivery"
						id="COD"
						value="Cash on Delivery"
						register={register}
						name="paymentMethod"
					/>
					</div>
					{errors.paymentMethod && (
						<span
							role="alert"
							className="text-red-500"
						>
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
					<div className="mt-4 flex flex-col gap-5">
						<Input
							label="e-Money Number"
							register={register}
							type="text"
						/>
						<Input
							label="e-Money PIN"
							register={register}
							type="text"
						/>
					</div>
				)}
			</fieldset>
		</form>
	);
};

export default CheckoutForm;
