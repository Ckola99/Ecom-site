import { useNavigate } from "react-router-dom";
import { selectItems } from "../features/AddToCartFeature/AddToCartSlice";
import { useSelector } from "react-redux";
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {
	const navigate = useNavigate();
	const cart = useSelector(selectItems);

  const totalAmount = cart.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

  const shipping = 50;

	return (
		<div className="bg-[#FAFAFA] h-[2200px]">
			<button
				onClick={() => navigate(-1)}
				className="text-[15px] font-medium leading-[25px] ml-[25px] my-[25px] opacity-50"
			>
				Go Back
			</button>
      <CheckoutForm />
			<div className="bg-white rounded-lg w-[327px] mx-auto mt-10 h-[612px]">
				<h1 className="text-transform: uppercase py-7 px-5 font-bold text-[18px]">
					summary
				</h1>
				<div className="flex flex-col gap-5">
					{cart.map((item, index) => {
						const productImage = `/assets/product-${item.slug}/mobile/image-category-page-preview.jpg`;
            const formattedName = item.name
							.replace(
								/earphones/i,
								""
							)
							.replace(
								/headphones/i,
								""
							)
							.replace(/wireless/i, "")
							.replace(/mark/i, "mk")
							.trim();

						return (
							<div
								key={index}
								className="flex justify-between px-5"
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
									<p className="font-bold w-[76px] h-[50px] text-[15px]">
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
        <div className="px-5 py-7 flex flex-col gap-3">

          <p className="text-transform: uppercase flex justify-between font-bold"><span className="font-medium opacity-50">Total</span>${" "}{totalAmount.toLocaleString()}</p>

          <p className="text-transform: uppercase font-bold flex justify-between"><span className="font-medium opacity-50">shipping</span>${" "}{shipping}</p>

          <p className="text-transform: uppercase flex justify-between font-bold"><span className="font-medium opacity-50">vat (included)</span>${" "}{(Number((0.20 * totalAmount).toFixed(0))).toLocaleString()}</p>

        </div>



         <p className="text-transform: uppercase flex justify-between font-bold px-5 text-main-orange"><span className="font-medium text-black opacity-50">Grand total</span>${" "}{(totalAmount + shipping).toLocaleString()}</p>


         <button className="w-[285px] h-[48px] bg-main-orange text-white text-transform: uppercase text-[13px] font-bold tracking-[1px] mx-[21px] mt-10">
							continue & pay
					</button>


			</div>
		</div>
	);
};

export default Checkout;
