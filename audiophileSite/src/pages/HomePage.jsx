import Navbar from "../components/Navbar";
import headsets from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speaker from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import arrow from "../assets/shared/desktop/icon-arrow-right.svg";
import speakerNoBg from "../assets/home/desktop/image-speaker-zx9.png"
import earphonesImg from "../assets/home/mobile/image-earphones-yx1.jpg"
import bestGear from "../assets/shared/mobile/image-best-gear.jpg"
import logo from "../assets/shared/desktop/logo.svg";
import instaLogo from "../assets/shared/desktop/icon-instagram.svg";
import facebookLogo from "../assets/shared/desktop/icon-facebook.svg";
import twitterLogo from "../assets/shared/desktop/icon-twitter.svg";


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

			<div className="w-[327px] h-[683px] grid mx-6 mt-10 gap-2">
				<div className="relative w-[327px] h-[217px] ">
					<img
						src={headsets}
						alt="mark one headsets"
						className="h-[134px] absolute left-[95px]"
					/>
					<div className="bg-second-gray w-[327px] h-[165px] rounded-lg mt-[52px] flex flex-col items-center">
						<h3 className="text-transform: uppercase font-bold text-base tracking-[1.07px] pt-[77px]">
							headphones
						</h3>
						<div className="flex items-center mt-[20px]">
							<p className="font-bold text-transform: uppercase opacity-50 ">
								shop
							</p>
							<img
								src={arrow}
								alt="arrow"
								className="w-[5px] h-[10px] ml-[13px]"
							/>
						</div>
					</div>
				</div>

				<div className="relative w-[327px] h-[217px] ">
					<img
						src={speaker}
						alt="speakers"
						className="h-[144px] absolute left-[85px]"
					/>
					<div className="bg-second-gray w-[327px] h-[165px] rounded-lg mt-[52px] flex flex-col items-center">
						<h3 className="text-transform: uppercase font-bold text-base tracking-[1.07px] pt-[77px]">
							speakers
						</h3>
						<div className="flex items-center mt-[20px]">
							<p className="font-bold text-transform: uppercase opacity-50 ">
								shop
							</p>
							<img
								src={arrow}
								alt="arrow"
								className="w-[5px] h-[10px] ml-[13px]"
							/>
						</div>
					</div>
				</div>

				<div className="relative w-[327px] h-[217px] ">
					<img
						src={earphones}
						alt="earphones"
						className="h-[154px] absolute left-[70px]"
					/>
					<div className="bg-second-gray w-[327px] h-[165px] rounded-lg mt-[52px] flex flex-col items-center">
						<h3 className="text-transform: uppercase font-bold text-base tracking-[1.07px] pt-[77px]">
							earphones
						</h3>
						<div className="flex items-center mt-[20px]">
							<p className="font-bold text-transform: uppercase opacity-50 ">
								shop
							</p>
							<img
								src={arrow}
								alt="arrow"
								className="w-[5px] h-[10px] ml-[13px]"
							/>
						</div>
					</div>
				</div>
			</div>

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
					<div className="w-[250px] h-[118px] border border-black flex flex-col justify-between ml-6">
						<h3 className="text-transform: uppercase font-bold text-[28px] tracking-[2px]">
							yx1 earphones
						</h3>
						<button className="text-transform: uppercase w-[160px] h-[48px] border border-black ml-[1px] tracking-[1px] font-bold text-[13px]">
							see product
						</button>
					</div>
				</div>
			</div>

			<div className="mt-[121px] h-[698px] w-[327px] mx-auto">
				<img
					src={bestGear}
					alt=""
					className="w-[327px] h-[300px]"
				/>
				<h3 className="text-[28px] text-center font-bold text-transform: uppercase my-10">
					Bringing you the{" "}
					<span className="block">
						<span className="text-main-orange">
							best
						</span>{" "}
						audio gear
					</span>
				</h3>
				<p className="text-center font-medium text-[15px] opacity-50">
					Located at the heart of New York City,
					Audiophile is the premier store for high
					end headphones, earphones, speakers, and
					audio accessories. We have a large
					showroom and luxury demonstration rooms
					available for you to browse and
					experience a wide range of our products.
					Stop by our store to meet some of the
					fantastic people who make Audiophile the
					best place to buy your portable audio
					equipment.
				</p>
			</div>

			<div className="w-[375px] h-[654px] bg-black mt-[121px] flex flex-col items-center text-white">
				<div className="w-[101px] h-[4px] bg-main-orange"></div>
				<img
					src={logo}
					alt="logo"
					className="my-10 w-[143px] h-[25px]"
				/>
				<div className="w-[108px] h-[148px] text-transform: uppercase text-center text-[13px] tracking-[2px] font-bold">
					<ul className="flex flex-col justify-between h-full">
						<li>
							<a
								href="#home"
								className="block hover:underline"
							>
								home
							</a>
						</li>
						<li>
							<a
								href="#headphones"
								className="block hover:underline"
							>
								headphones
							</a>
						</li>
						<li>
							<a
								href="#speakers"
								className="block hover:underline"
							>
								speakers
							</a>
						</li>
						<li>
							<a
								href="#earphones"
								className="block hover:underline"
							>
								earphones
							</a>
						</li>
					</ul>
				</div>

				<p className="my-10 w-[327px] h-[150px] font-medium text-[15px] text-center opacity-50 leading-[25px]">
					Audiophile is an all in one stop to
					fulfill your audio needs. We're a small
					team of music lovers and sound
					specialists who are devoted to helping
					you get the most out of personal audio.
					Come and visit our demo facility - we’re
					open 7 days a week.
				</p>
				<p className="opacity-50 font-bold text-[15px] leading-[25px]">Copyright 2021. All Rights Reserved</p>
        <div className="mt-16 w-[104px] h-[24px] flex justify-between">
          <img src={facebookLogo} alt="facebook logo" />
          <img src={twitterLogo} alt="facebook logo" />
          <img src={instaLogo} alt="facebook logo" />
        </div>
			</div>
		</div>
	);
};

export default HomePage;
