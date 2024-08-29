import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import productsData from "../data.json";
import AddToCart from "../components/AddToCart";
import Items from "../components/Items";
import Suggestions from "../components/Suggestions";

// Utility functions
const determineScreenSize = (width) => {
	if (width >= 1024) return "desktop";
	if (width >= 768) return "tablet";
	return "mobile";
};

const formatPrice = (price) => price.toLocaleString();

const generateImageUrl = (productSlug, screenSize, imageType) => {
	return `/assets/product-${productSlug}/${screenSize}/image-${imageType}.jpg`;
};

const ProductPage = () => {
	const [screenSize, setScreenSize] = useState(determineScreenSize(window.innerWidth));

	const handleResize = () => setScreenSize(determineScreenSize(window.innerWidth));

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const { productSlug } = useParams();
	const product = productsData.find((p) => p.slug === productSlug);
	const navigate = useNavigate();

	if (!product) {
		return <div>Product not found</div>;
	}

	// Image URLs
	const picUrl = generateImageUrl(productSlug, screenSize, "category-page-preview");
	const productPic1 = generateImageUrl(productSlug, screenSize, "gallery-1");
	const productPic2 = generateImageUrl(productSlug, screenSize, "gallery-2");
	const productPic3 = generateImageUrl(productSlug, screenSize, "gallery-3");

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

			<ProductDetails product={product} picUrl={picUrl} formattedPrice={formatPrice(product.price)} />
			<ProductFeatures features={product.features} />
			<ProductInTheBox items={product.includes} />

			<ImageGallery images={[productPic1, productPic2, productPic3]} productName={product.name} />

			<Suggestions product={product} />
			<Items />
		</div>
	);
};

// Extracted Components

const ProductDetails = ({ product, picUrl, formattedPrice }) => (
	<div className="mt-[30px] w-[327px] h-auto mx-auto flex flex-col gap-7 md:grid md:grid-cols-[281px_339px] md:w-[689px] md:h-[480px] md:gap-[69px] lg:w-[80%] lg:grid-cols-2 lg:gap-[11%] lg:h-[560px]">
		<div className="md:bg-second-gray md:flex md:items-center md:w-[281px] md:rounded-lg lg:w-full">
			<img
				src={picUrl}
				alt={product.name}
				className="w-[327px] h-[327px] rounded-lg mx-auto md:w-[181px] md:h-[201px] md:object-cover lg:w-[65%] lg:h-[69%]"
			/>
		</div>
		<div className="md:w-[339px] md:h-[auto] md:flex md:flex-col md:gap-6 md:justify-center flex flex-col gap-6 lg:w-[90%]">
			{product.new && (
				<p className="text-transform: uppercase text-main-orange tracking-[10px] text-[14px] md:tracking-[8.57px]">
					new product
				</p>
			)}
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
);

const ProductFeatures = ({ features }) => (
	<div className="lg:grid lg:grid-cols-[57%_32%] lg:w-[80%] lg:mx-auto lg:mt-20 lg:gap-[11%]">
		<div className="w-[327px] h-auto flex flex-col mx-auto my-[70px] justify-between md:w-[689px] gap-7 lg:m-0">
			<h2 className="font-bold text-2xl leading-[36px] tracking-[0.86px] text-transform: uppercase">
				Features
			</h2>
			<p className="text-[15px] leading-[25px] opacity-50 font-medium">
				{features}
			</p>
		</div>
	</div>
);

const ProductInTheBox = ({ items }) => (
	<div className="w-[327px] h-[217px] mx-auto flex flex-col justify-between md:w-[549px] md:h-[159px] md:grid md:grid-cols-2 md:mx-0 md:ml-10 md:gap-[11px] lg:ml-0 lg:flex lg:flex-col">
		<h2 className="text-transform: uppercase font-bold text-2xl leading-[36px] tracking-[0.86px]">
			in the box
		</h2>
		<div className="w-[210px] h-[157px] md:flex md:flex-col md:justify-between md:justify-self-end">
			{items.map((item, index) => (
				<p key={index} className="text-[15px] leading-[25px] font-medium w-">
					<span className="text-main-orange font-bold mr-5">{item.quantity}x</span>
					<span className="opacity-50">{item.item}</span>
				</p>
			))}
		</div>
	</div>
);

const ImageGallery = ({ images, productName }) => (
	<div className="w-[327px] h-[756px] mx-auto my-[70px] flex flex-col justify-between md:grid md:grid-cols-[277px_413px] md:w-[690px] md:h-[368px] md:mt-[120px] md:gap-[18px] lg:w-[80%] lg:grid-cols-[40%_57%] lg:h-[592px]">
		{images.map((image, index) => (
			<div key={index} className="w-[327px] h-[174px] overflow-hidden rounded-lg md:w-[277px] lg:w-full lg:h-full">
				<img src={image} alt={`${productName} - Image ${index + 1}`} className="lg:w-full" />
			</div>
		))}
	</div>
);

export default ProductPage;
