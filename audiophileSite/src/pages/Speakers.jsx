import Items from "../components/Items";
import zx9 from "/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg";
import zx7 from "/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg";
import { Link } from "react-router-dom";


const Speakers = () => {
  return (
		<div>
			<div className="h-[100px] bg-black w-full flex justify-center items-center">
				<h1 className="text-transform: uppercase text-white font-bold text-[28px] tracking-[2px]">
					Speakers
				</h1>
			</div>
			<div className="h-[724px] w-[327px] mx-auto mt-[68px] flex flex-col justify-between">
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
						zx9
						<span className="block">
							speaker
						</span>
					</h2>
					<p className="font-medium leading-[25px] text-center text-[15px] opacity-50">
						Upgrade your sound system with
						the all new ZX9 active speaker.
						It’s a bookshelf speaker system
						that offers truly wireless
						connectivity -- creating new
						possibilities for more pleasing
						and practical audio setups.
					</p>
					<Link to="/product/zx9-speaker">
						<button className="w-[160px] h-[48px] bg-main-orange text-white text-transform: uppercase text-[13px] font-bold tracking-[1px]">
							see product
						</button>
					</Link>
				</div>
			</div>

			<div className="h-[681px] w-[327px] mx-auto my-[121px] flex flex-col justify-between">
				<img
					src={zx7}
					alt="new product"
					className="rounded-lg h-[352px]"
				/>
				<div className="flex flex-col items-center w-[327px] h-[297px] justify-between">
					<h2 className="text-transform: uppercase text-[28px] font-bold tracking-[1px] text-center">
						zx7{" "}
						<span className="block">
							speaker
						</span>{" "}
					</h2>
					<p className="font-medium leading-[25px] text-center text-[15px] opacity-50">
						Stream high quality sound
						wirelessly with minimal loss.
						The ZX7 bookshelf speaker uses
						high-end audiophile components
						that represents the top of the
						line powered speakers for home
						or studio use.
					</p>
					<Link to="/product/zx7-speaker">
						<button className="w-[160px] h-[48px] bg-main-orange text-white text-transform: uppercase text-[13px] font-bold tracking-[1px]">
							see product
						</button>
					</Link>
				</div>
			</div>
			<Items />
		</div>
  );
}
export default Speakers
