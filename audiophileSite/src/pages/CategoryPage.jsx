import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import productsData from "../data.json";
import Items from "../components/Items"

const CategoryPage = () => {
	const { category } = useParams();
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	// Filter items based on the category from the URL parameter
	let categoryItems = productsData.filter((p) => p.category === category);

	// Sort items to have new products first
	categoryItems = categoryItems.sort(
		(a, b) => (b.new ? 1 : -1) - (a.new ? 1 : -1)
	);

	const format = (productName) => {
		// Split the slug by dashes
  		const parts = productName.split(' ');
  		parts.pop();
  		const name = parts.join(' ');

		return name;
	}

	// Update window width on resize
	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);

		// Clean up the event listener on component unmount
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="">
			<div className="h-[100px] bg-black w-full flex justify-center items-center md:h-[250px]">
				<h1 className="uppercase text-white font-bold text-[28px] tracking-[2px] md:text-[40px]">
					{category}
				</h1>
			</div>

			{categoryItems.map((item) => (
				<div
					key={item.id}
					className="h-auto w-[327px] mx-auto mt-[68px] flex flex-col justify-between md:w-[689px] items-center"
				>
					<img
						src={
							windowWidth < 768
								? item
										.categoryImage
										.mobile
								: item
										.categoryImage
										.tablet
						}
						alt={item.name}
						className="rounded-lg h-[352px] md:w-[689px]"
					/>
					<div className={`flex flex-col items-center w-[327px] h-auto gap-5 justify-between md:w-[572px] ${!item.new && "mt-5"}`}>
						{item.new && <p className="uppercase text-main-orange tracking-[10px] text-[14px] mt-5">new product</p>}
						<h2 className="uppercase text-[28px] font-bold tracking-[1px] md:text-[40px] text-center">
							{format(item.name)}
							<span className="block">{item.category}</span>
						</h2>
						<p className="font-medium leading-[25px] text-center text-[15px] opacity-50">
							{item.description}
						</p>
						<Link
							to={`/product/${item.slug}`}
						>
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
