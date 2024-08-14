import Items from "../components/Items"
import zx9 from "/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg";

const Earphones = () => {
  return (
		<div>
			<div className="h-[100px] bg-black w-full flex justify-center items-center">
				<h1 className="text-transform: uppercase text-white font-bold text-[28px] tracking-[2px]">
					earphones
				</h1>
			</div>
			<div className="h-[724px] w-[327px] mx-auto my-[68px] flex flex-col justify-between">
				<img
					src={zx9}
					alt="new product"
					className="rounded-lg h-[352px]"
				/>
				<div className="flex flex-col items-center w-[327px] h-[340px] justify-between">
					<p className="text-transform: uppercase text-main-orange tracking-[10px] text-[14px]">
						new product
					</p>
					<h2 className="text-transform: uppercase text-[28px] font-bold tracking-[1px] text-center">
						yx1 wireless
						<span className="block">
							earphones
						</span>
					</h2>
					<p className="font-medium leading-[25px] text-center text-[15px] opacity-50">
						Tailor your listening experience
						with bespoke dynamic drivers
						from the new YX1 Wireless
						Earphones. Enjoy incredible
						high-fidelity sound even in
						noisy environments with its
						active noise cancellation
						feature.
					</p>
					<button className="w-[160px] h-[48px] bg-main-orange text-white text-transform: uppercase text-[13px] font-bold tracking-[1px]">
						see product
					</button>
				</div>
			</div>

			<Items />
		</div>
  );
}
export default Earphones
