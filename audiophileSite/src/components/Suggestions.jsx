import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Suggestions = ({ product }) => {

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);

		// Clean up the event listener on component unmount
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="w-[327px] h-[983px] mb-24 mt-[140px] mx-auto flex flex-col items-center md:w-[691px] md:h-[563px] md:grid md:grid-rows-[92px_471px] md:mt-[70px] lg:w-[80%]">
			<h1 className="text-transform: uppercase font-bold text-2xl leading-[36px] tracking-[0.86px] text-center mb-5">
				You may also like
			</h1>

			<div className="md:grid md:grid-cols-3 md:gap-[11px] flex flex-col gap-10 lg:grid-cols-[31%_31%_31%] lg:gap-[3%]">
				{product.others.map((product) => {
				const productImage = `/assets/shared/${windowWidth < 768 ? "mobile" : "tablet"}/image-${product.slug}.jpg`;
				const productLink = `/product/${product.slug}`;

				return (
					<div
						key={product.slug}
						className="w-[327px] h-[265px] flex flex-col justify-between items-center md:w-[223px] md:h-[471px] lg:w-full "
					>
						<div className="w-[327px] h-[120px] overflow-hidden rounded-lg md:w-[223px] md:h-[318px] lg:w-full lg:bg-second-gray">
							<img
								src={
									productImage
								}
								alt={
									product.name
								}
								className="md:h-full lg:w-full lg:object-contain"
							/>
						</div>
						<h2 className="text-2xl font-bold tracking-[1.71px] uppercase">
							{product.name}
						</h2>
						<Link to={productLink}>
							<button className="w-[160px] h-[48px] bg-main-orange text-white text-transform: uppercase text-[13px] font-bold tracking-[1px]">
								see product
							</button>
						</Link>
					</div>
				);
			})}
			</div>
		</div>
	);
};
export default Suggestions;
