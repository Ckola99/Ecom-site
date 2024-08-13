import { useParams } from "react-router-dom";
import productsData from "../data.json";
import AddToCart from "../components/AddToCart";
import Items from "../components/Items"

const ProductPage = () => {
	const { productSlug } = useParams();
	const product = productsData.find((p) => p.slug === productSlug);
	console.log(product)
	console.log("Image path:", product.categoryImage.mobile)

	if (!product) {
		return <div>Product not found</div>;
	}

	return (
		<div>
			<h1 className="text-[15px] font-medium leading-[25px] ml-[25px] mt-[25px]">
				Go Back
			</h1>
			<div className="mt-[30px] w-[327px] h-auto mx-auto flex flex-col gap-7">
				<img
					src={product.categoryImage.mobile}
					alt={product.name}
					className="w-[327px] h-[327px] border border-black mx-auto"
				/>
				<p className="text-transform: uppercase text-main-orange tracking-[10px] text-[14px]">
					new product
				</p>
				<h2 className="font-bold text-[28px] tracking-[1px]">
					{product.name}
				</h2>
				<p className="text-[15px] leading-[25px] opacity-50">
					{product.description}
				</p>
				<p className="font-bold ">${product.price}</p>
				<AddToCart />
			</div>
			<div className="w-[327px] h-[515px] flex flex-col mx-auto my-[70px] justify-between">
				<h2 className="font-bold text-2xl leading-[36px] tracking-[0.86px] text-transform: uppercase">
					Features
				</h2>
				<p className="text-[15px] leading-[25px] opacity-50">
					{product.features}
				</p>
			</div>
			<div className="w-[327px] h-[217px] mx-auto flex flex-col justify-between">
				<h2 className="text-transform: uppercase font-bold text-2xl leading-[36px] tracking-[0.86px]">
					in the box
				</h2>
				<div className="w-[199px] h-[157px]">
					{product.includes.map((item, index) => (
						<p
							key={index}
							className="text-[15px] leading-[25px] font-medium "
						>
							{" "}
							<span className="text-main-orange font-bold mr-5">
								{item.quantity}x
							</span>{" "}
							<span className="opacity-50">{item.item}</span>
						</p>
					))}
				</div>
			</div>
			<div className="w-[327px] h-[756px] mx-auto my-[70px] border border-black">

			</div>
			<div className="w-[327px] h-[983px] border border-black mb-24 mt-[140px] mx-auto"></div>
			<Items />
		</div>
	);
};

export default ProductPage;
