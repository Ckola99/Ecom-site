import { Link } from "react-router-dom";

const Suggestions = ({ product }) => {
	return (
		<div className="w-[327px] h-[983px] mb-24 mt-[140px] mx-auto flex flex-col items-center justify-between">
			<h1 className="text-transform: uppercase font-bold text-2xl leading-[36px] tracking-[0.86px]">
				You may also like
			</h1>

			{product.others.map((product) => {

				const productImage = `/assets/shared/mobile/image-${product.slug}.jpg`;
				const productLink = `/product/${product.slug}`;

				return (
					<div
						key={product.slug}
						className="w-[327px] h-[265px] flex flex-col justify-between items-center"
					>
						<div className="w-[327px] h-[120px] overflow-hidden rounded-lg">
							<img
								src={
									productImage
								}
								alt={
									product.name
								}
								className=""
							/>
						</div>
						<h2 className="text-2xl font-bold tracking-[1.71px]">
							{product.name}
						</h2>
						<Link to={productLink} >
							<button className="w-[160px] h-[48px] bg-main-orange text-white text-transform: uppercase text-[13px] font-bold tracking-[1px]">
								see product
							</button>
						</Link>
					</div>
				);
			})}
		</div>
	);
};
export default Suggestions;
