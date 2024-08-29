import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import productsData from "../data.json";
import Items from "../components/Items";
import { Helmet } from "react-helmet";

const CategoryPage = () => {
	const { category } = useParams();

	// Filter items based on the category from the URL parameter
	let categoryItems = productsData.filter((p) => p.category === category);

	// Sort items to have new products first
	categoryItems = categoryItems.sort(
		(a, b) => (b.new ? 1 : -1) - (a.new ? 1 : -1)
	);

	const format = (productName) => {
		const parts = productName.split(" ");
		parts.pop(); // Remove the last part (e.g., "headphones")
		return parts.join(" ");
	};

	const [screenSize, setScreenSize] = useState(
		window.innerWidth >= 1024 ? "desktop" : window.innerWidth >= 768 ? "tablet" : "mobile"
	);

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

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div>
			<Helmet>
				<title>{`${category} - Product Category`}</title>
				<meta
					name="description"
					content={`Explore our ${category} category to find a curated selection of new and featured products. Browse through our collection of ${category} items, each with detailed descriptions and high-quality images optimized for various devices. Discover the latest trends and styles, and click through to see individual products in detail. Shop now and enhance your experience with our diverse offerings!`}
				/>
			</Helmet>
			<div className="h-[100px] bg-black w-full flex justify-center items-center md:h-[250px]">
				<h1 className="uppercase text-white font-bold text-[28px] tracking-[2px] md:text-[40px]">
					{category}
				</h1>
			</div>

			{categoryItems.map((item, index) => (
				<div
					key={item.id}
					className={`h-auto w-[327px] mx-auto mt-[68px] flex flex-col justify-between md:w-[689px] items-center lg:w-[80%] lg:grid lg:grid-cols-2 lg:h-[560px] gap-[11%] lg:mt-[12%]`}
				>
					<img
						src={
							screenSize === "tablet"
								? item.categoryImage.tablet
								: screenSize === "desktop"
								? item.categoryImage.desktop
								: item.categoryImage.mobile
						}
						alt={item.name}
						className={`rounded-lg h-[352px] md:w-[689px] lg:h-full ${
							index % 2 !== 0 && "lg:col-start-2"
						}`}
					/>
					<div
						className={`flex flex-col items-center w-[327px] h-auto gap-5 justify-between md:w-[572px] ${
							!item.new && "mt-5"
						} lg:items-start ${
							index % 2 !== 0 && "lg:col-start-1 lg:row-start-1"
						}`}
					>
						{item.new && (
							<p className="uppercase text-main-orange tracking-[10px] text-[14px] mt-5">
								new product
							</p>
						)}
						<h2 className="uppercase text-[28px] font-bold tracking-[1px] md:text-[40px] text-center lg:text-left">
							{format(item.name)}
							<span className="block">{item.category}</span>
						</h2>
						<p className="font-medium leading-[25px] text-center text-[15px] opacity-50 lg:text-left lg:w-[80%]">
							{item.description}
						</p>
						<Link to={`/product/${item.slug}`}>
							<button className="w-[160px] h-[48px] bg-main-orange text-white uppercase text-[13px] font-bold tracking-[1px] hover:bg-[#FBAF85]">
								see product
							</button>
						</Link>
					</div>
				</div>
			))}
			<Items />
		</div>
	);
};

export default CategoryPage;
