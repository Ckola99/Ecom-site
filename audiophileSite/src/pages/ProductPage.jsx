import { useParams, useNavigate } from "react-router-dom";
import productsData from "../data.json";
import AddToCart from "../components/AddToCart";
import Items from "../components/Items";
import Suggestions from "../components/Suggestions";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

const ProductPage = () => {
	const [screenSize, setScreenSize] = useState("mobile");

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1024) {
				setScreenSize("desktop");
			} else if (window.innerWidth >= 768) {
				setScreenSize("tablet");
			} else {
				setScreenSize("mobile");
			}
		};

		window.addEventListener("resize", handleResize);

		// Check initial width on component mount
		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const { productSlug } = useParams();
	const product = productsData.find((p) => p.slug === productSlug);
	const picUrl = `/assets/product-${productSlug}/${
		screenSize === "tablet"
			? "tablet"
			: screenSize === "desktop"
			? "desktop"
			: "mobile"
	}/image-category-page-preview.jpg`;
	const productPic1 = `/assets/product-${productSlug}/${
		screenSize === "tablet"
			? "tablet"
			: screenSize === "desktop"
			? "desktop"
			: "mobile"
	}/image-gallery-1.jpg`;
	const productPic2 = `/assets/product-${productSlug}/${
		screenSize === "tablet"
			? "tablet"
			: screenSize === "desktop"
			? "desktop"
			: "mobile"
	}/image-gallery-2.jpg`;
	const productPic3 = `/assets/product-${productSlug}/${
		screenSize === "tablet"
			? "tablet"
			: screenSize === "desktop"
			? "desktop"
			: "mobile"
	}/image-gallery-3.jpg`;
	const navigate = useNavigate();
	const formattedPrice = product.price.toLocaleString();

	if (!product) {
		return <div>Product not found</div>;
	}

	return (
		<div>
			<Helmet>
				<title>{product.name} - Buy Now</title>
				<meta
				name="description"
				content={`Discover the features and details of the ${product.name}. Explore high-quality images, pricing, and more on our product page. Buy now and enjoy top-notch performance!`}
				/>
			</Helmet>
			<button
				onClick={() => navigate(-1)}
				className="text-[15px] font-medium leading-[25px] ml-[25px] mt-[25px] opacity-50 lg:ml-[8.5%] hover:text-main-orange"
			>
				Go Back
			</button>
			<div className="mt-[30px] w-[327px] h-auto mx-auto flex flex-col gap-7 md:grid md:grid-cols-[281px_339px] md:w-[689px] md:h-[480px] md:gap-[69px] lg:w-[80%] lg:grid-cols-2 lg:gap-[11%] lg:h-[560px]">
				<div className="md:bg-second-gray md:flex md:items-center md:w-[281px] md:rounded-lg lg:w-full">
					<img
						src={picUrl}
						alt={product.name}
						className="w-[327px] h-[327px] rounded-lg mx-auto md:w-[181px] md:h-[201px] md:object-cover lg:w-[65%] lg:h-[69%]"
					/>
				</div>
				<div className="md:w-[339px] md:h-[auto] md:flex md:flex-col md:gap-6 md:justify-center flex flex-col gap-6 lg:w-[90%]">
					{product.new ? (
						<p className="text-transform: uppercase text-main-orange tracking-[10px] text-[14px] md:tracking-[8.57px]">
							new product
						</p>
					) : null}
					<h2 className="text-transform: uppercase font-bold text-[28px] tracking-[1px]">
						{product.name}
					</h2>
					<p className="text-[15px] leading-[25px] opacity-50 font-medium lg:w-full">
						{product.description}
					</p>
					<p className="font-bold ">
						$ {formattedPrice}
					</p>
					<AddToCart product={product} />
				</div>
			</div>
			<div className=" lg:grid lg:grid-cols-[57%_32%] lg:w-[80%] lg:mx-auto lg:mt-20 lg:gap-[11%]">
				<div className="w-[327px] h-auto flex flex-col mx-auto my-[70px] justify-between md:w-[689px] gap-7 lg:m-0 lg:w-full">
					<h2 className="font-bold text-2xl leading-[36px] tracking-[0.86px] text-transform: uppercase">
						Features
					</h2>
					<p className="text-[15px] leading-[25px] opacity-50 font-medium">
						{product.features}
					</p>
				</div>
				<div className="w-[327px] h-[217px] mx-auto flex flex-col justify-between md:w-[549px] md:h-[159px] md:grid md:grid-cols-2 md:ml-[8%] md:gap-[11px] lg:ml-0 lg:flex lg:flex-col">
					<h2 className="text-transform: uppercase font-bold text-2xl leading-[36px] tracking-[0.86px]">
						in the box
					</h2>
					<div className="w-[210px] h-[157px] md:flex md:flex-col md:justify-between  md:justify-self-end ">
						{product.includes.map(
							(item, index) => (
								<p
									key={
										index
									}
									className="text-[15px] leading-[25px] font-medium w-"
								>
									{" "}
									<span className="text-main-orange font-bold mr-5">
										{
											item.quantity
										}
										x
									</span>{" "}
									<span className="opacity-50">
										{
											item.item
										}
									</span>
								</p>
							)
						)}
					</div>
				</div>
			</div>
			<div className="w-[327px] h-[756px] mx-auto my-[70px] flex flex-col justify-between md:grid md:grid-cols-[277px_413px] md:w-[690px] md:h-[368px] md:mt-[120px] md:gap-[18px] lg:w-[80%] lg:grid-cols-[40%_57%] lg:h-[592px]">
				<div className="w-[327px] h-[174px] overflow-hidden rounded-lg md:row-start-1 md:row-span-1 md:w-[277px] lg:w-full lg:h-full">
					<img
						src={productPic1}
						alt={product.name}
						className="lg:w-full lg:h-full"
					/>
				</div>
				<div className="w-[327px] h-[174px] rounded-lg overflow-hidden md:col-start-1 md:col-span-1 md:row-start-2 md:row-span-1 md:w-[277px] lg:w-full lg:h-full">
					<img
						src={productPic2}
						alt={product.name}
						className="lg:w-full lg:h-full"
					/>
				</div>
				<div className="w-[327px] h-[368px] rounded-lg overflow-hidden md:col-start-2 md:col-span-1 md:row-start-1 md:row-span-2 md:w-[395px] lg:w-full lg:h-full">
					<img
						src={productPic3}
						alt={product.name}
						className="lg:w-full lg:h-full"
					/>
				</div>
			</div>
			<Suggestions product={product} />
			<Items />
		</div>
	);
};

export default ProductPage;
