import Navbar from "../components/Navbar";
import speakerNoBg from "../assets/home/desktop/image-speaker-zx9.png"
import earphonesImg from "../assets/home/mobile/image-earphones-yx1.jpg"
import Footer from "../components/Footer";
import Items from "../components/Items"

const HomePage = () => {
	return (
		<div className="">
			<Navbar />

			<div className="bg-heroMobile h-[600px] w-[375px] bg-cover flex place-content-center">
				<div className="text-white flex flex-col items-center w-[328px] h-[290px] mt-[198px] gap-4">
					<h1 className="tracking-[0.5em] text-transform: uppercase text-sm font-thin opacity-50">
						New Product
					</h1>
					<h2 className="font-bold text-4xl text-transform: uppercase tracking-wider">
						XX99 mark ii{" "}
						<span className="block">
							headphones
						</span>
					</h2>
					<p className="text-center text-[15px] w-[328px] h-[75px] leading-6">
						Experience natural, lifelike
						audio and exceptional build
						quality made for the passionate
						music enthusiast.
					</p>
					<button className="text-transform: uppercase text-sm w-[160px] h-[48px] bg-main-orange tracking-[1px]">
						see product
					</button>
				</div>
			</div>

      <Items />

			<div className="relative">
				<div className="w-[558px] h-[558px] rounded-full border border-white absolute -left-24"></div>
			</div>
			<div className="text-white w-[327px] h-[600px] bg-main-orange mx-6 rounded-lg mt-[121px] flex flex-col items-center">
				<div className="w-[320px] h-[320px] border border-white mx-[3.5px] rounded-full">
					<div className="w-[279px] h-[279px] border border-white mx-[20.5px] mt-[19px] rounded-full">
						<img
							src={speakerNoBg}
							alt="speakers"
							className="w-[172.25px] h-[207px] my-[30px] mx-auto"
						/>
					</div>
				</div>
				<h3 className="font-bold text-4xl text-transform: uppercase w-[280px] tracking-[1.29px] text-center mx-[23.5px] -mt-6">
					zx9{" "}
					<span className="block">speaker</span>
				</h3>
				<p className="w-[280px] h-[75px] mx-[20px] text-center mt-7 font-medium text-[15px]">
					Upgrade to premium speakers that are
					phenomenally built to deliver truly
					remarkable sound.
				</p>
				<button className="w-[160px] h-[48px] bg-black text-transform: uppercase mt-6 tracking-[1px]">
					see product
				</button>
			</div>

			<div className="w-[327px] h-[320px] bg-speakerBg bg-cover mx-auto my-6 rounded-lg flex items-center">
				<div className="flex flex-col w-[210px] h-[118px] justify-between ml-6 ">
					<p className="text-transform: uppercase text-[28px] font-bold tracking-[2px]">
						zx7 speaker
					</p>
					<button className="text-transform: uppercase w-[160px] h-[48px] border border-black text-[13px] font-bold ml-[1px] tracking-[1px]">
						see product
					</button>
				</div>
			</div>

			<div className="grid mx-auto h-[424px] w-[327px]">
				<img
					src={earphonesImg}
					alt="earphones in case"
					className="w-[327px] h-[200px] rounded-lg self-start"
				/>
				<div className="bg-second-gray w-[327px] h-[200px] rounded-lg self-end flex flex-col justify-center">
					<div className="w-[250px] h-[118px] flex flex-col justify-between ml-6">
						<h3 className="text-transform: uppercase font-bold text-[28px] tracking-[2px]">
							yx1 earphones
						</h3>
						<button className="text-transform: uppercase w-[160px] h-[48px] border border-black ml-[1px] tracking-[1px] font-bold text-[13px]">
							see product
						</button>
					</div>
				</div>
			</div>
      <Footer/>
		</div>
	);
};

export default HomePage;
