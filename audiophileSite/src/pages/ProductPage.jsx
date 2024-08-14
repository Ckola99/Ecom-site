import { useParams, useNavigate } from "react-router-dom";
import productsData from "../data.json";
import AddToCart from "../components/AddToCart";
import Items from "../components/Items";
import Suggestions from "../components/Suggestions";


const ProductPage = () => {

	const { productSlug } = useParams();
	const product = productsData.find((p) => p.slug === productSlug);
	const picUrl = `/assets/product-${productSlug}/mobile/image-category-page-preview.jpg`;
	const productPic1 = `/assets/product-${productSlug}/mobile/image-gallery-1.jpg`;
	const productPic2 = `/assets/product-${productSlug}/mobile/image-gallery-2.jpg`;
	const productPic3 = `/assets/product-${productSlug}/mobile/image-gallery-3.jpg`;
	const navigate = useNavigate();
	const formattedPrice = product.price.toLocaleString();

	if (!product) {
		return <div>Product not found</div>;
	}

	return (
		<div>
			<button onClick={() => navigate(-1)} className="text-[15px] font-medium leading-[25px] ml-[25px] mt-[25px]">
				Go Back
			</button>
			<div className="mt-[30px] w-[327px] h-auto mx-auto flex flex-col gap-7">
				<img
					src={picUrl}
					alt={product.name}
					className="w-[327px] h-[327px] rounded-lg mx-auto"
				/>
				{product.new ? (<p className="text-transform: uppercase text-main-orange tracking-[10px] text-[14px]">
					new product
				</p>) : null }
				<h2 className="font-bold text-[28px] tracking-[1px]">
					{product.name}
				</h2>
				<p className="text-[15px] leading-[25px] opacity-50">
					{product.description}
				</p>
				<p className="font-bold ">${" "}{formattedPrice}</p>
				<AddToCart />
			</div>
			<div className="w-[327px] h-[515px] flex flex-col mx-auto my-[70px] justify-between">
				<h2 className="font-bold text-2xl leading-[36px] tracking-[0.86px] text-transform: uppercase">
					Features
				</h2>
        			<p className="text-[15px] leading-[25px] opacity-50">{product.features}</p>
			</div>
			<div className="w-[327px] h-[217px] mx-auto flex flex-col justify-between">
				<h2 className="text-transform: uppercase font-bold text-2xl leading-[36px] tracking-[0.86px]">
					in the box
				</h2>
				<div className="w-[210px] h-[157px]">
					{product.includes.map((item, index) => (
						<p
							key={index}
							className="text-[15px] leading-[25px] font-medium w-"
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
			<div className="w-[327px] h-[756px] mx-auto my-[70px] flex flex-col justify-between">
					<div className="w-[327px] h-[174px] overflow-hidden rounded-lg">
						<img src={productPic1} alt={product.name} />
					</div>
					<div className="w-[327px] h-[174px] rounded-lg overflow-hidden">
						<img src={productPic2} alt={product.name} />
					</div>
					<div className="w-[327px] h-[368px] rounded-lg overflow-hidden">
						<img src={productPic3} alt={product.name} />
					</div>
			</div>
			<Suggestions product={product}/>
			<Items />
		</div>
	);
};

export default ProductPage;
