import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Items from "../components/Items"
import headphones from "../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
import xx99 from "../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";
import xx59 from "../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg";


const Headphones = () => {
  return (
		<div>
			<Navbar />
			<div className="h-[100px] bg-black w-full flex justify-center items-center">
				<h1 className="text-transform: uppercase text-white font-bold text-[28px] tracking-[2px]">
					Headphones
				</h1>
			</div>
			<div className="h-[724px] w-[327px] mx-auto mt-[68px] flex flex-col justify-between">
				<img
					src={headphones}
					alt="new product"
					className="rounded-lg h-[352px]"
				/>
				<div className="flex flex-col items-center w-[327px] h-[340px] justify-between">
					<p className="text-transform: uppercase text-main-orange tracking-[10px] text-[14px]">
						new product
					</p>
					<h2 className="text-transform: uppercase text-[28px] font-bold tracking-[1px]">
						xx99 mark ii{" "}
						<span className="block">
							headphones
						</span>{" "}
					</h2>
					<p className="font-medium leading-[25px] text-center text-[15px] opacity-50">
						The new XX99 Mark II headphones
						is the pinnacle of pristine
						audio. It redefines your premium
						headphone experience by
						reproducing the balanced depth
						and precision of studio-quality
						sound.
					</p>
					<button className="w-[160px] h-[48px] bg-main-orange text-white text-transform: uppercase text-[13px] font-bold tracking-[1px]">
						see product
					</button>
				</div>
			</div>

			<div className="h-[681px] w-[327px] mx-auto mt-[121px] flex flex-col justify-between">
				<img
					src={xx99}
					alt="new product"
					className="rounded-lg h-[352px]"
				/>
				<div className="flex flex-col items-center w-[327px] h-[297px] justify-between">
					<h2 className="text-transform: uppercase text-[28px] font-bold tracking-[1px]">
						xx99 mark i{" "}
						<span className="block">
							headphones
						</span>{" "}
					</h2>
					<p className="font-medium leading-[25px] text-center text-[15px] opacity-50">
						As the gold standard for
						headphones, the classic XX99
						Mark I offers detailed and
						accurate audio reproduction for
						audiophiles, mixing engineers,
						and music aficionados alike in
						studios and on the go.
					</p>
					<button className="w-[160px] h-[48px] bg-main-orange text-white text-transform: uppercase text-[13px] font-bold tracking-[1px]">
						see product
					</button>
				</div>
			</div>

			<div className="h-[681px] w-[327px] mx-auto my-[121px] flex flex-col justify-between">
				<img
					src={xx59}
					alt="new product"
					className="rounded-lg h-[352px]"
				/>
				<div className="flex flex-col items-center w-[327px] h-[297px] justify-between">
					<h2 className="text-transform: uppercase text-[28px] font-bold tracking-[1px]">
						xx59 mark i{" "}
						<span className="block">
							headphones
						</span>{" "}
					</h2>
					<p className="font-medium leading-[25px] text-center text-[15px] opacity-50">
						Enjoy your audio almost anywhere
						and customize it to your
						specific tastes with the XX59
						headphones. The stylish yet
						durable versatile wireless
						headset is a brilliant companion
						at home or on the move.
					</p>
					<button className="w-[160px] h-[48px] bg-main-orange text-white text-transform: uppercase text-[13px] font-bold tracking-[1px]">
						see product
					</button>
				</div>
			</div>
			<Items />
			<Footer />
		</div>
  );
}
export default Headphones
