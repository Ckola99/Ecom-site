import { useParams, useNavigate } from "react-router-dom";

const Checkout = () => {
	const navigate = useNavigate();

	return (
		<div className="">
			<button
				onClick={() => navigate(-1)}
				className="text-[15px] font-medium leading-[25px] ml-[25px] mt-[25px] opacity-50"
			>
				Go Back
			</button>
			<form></form>
		</div>
	);
};
export default Checkout;
