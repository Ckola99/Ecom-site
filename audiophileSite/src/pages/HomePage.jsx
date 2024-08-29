import speakerNoBg from "/assets/home/desktop/image-speaker-zx9.png";
import earphonesImgMobile from "/assets/home/mobile/image-earphones-yx1.jpg";
import earphonesImgTablet from "/assets/home/tablet/image-earphones-yx1.jpg";
import earphonesImgDesktop from "/assets/home/desktop/image-earphones-yx1.jpg";
import speakerBgMobile from "/assets/home/mobile/image-speaker-zx7.jpg";
import speakerBgTablet from "/assets/home/tablet/image-speaker-zx7.jpg";
import speakerBgDesktop from "/assets/home/desktop/image-speaker-zx7.jpg";
import heroBgMobile from "/assets/home/mobile/image-header.jpg";
import heroBgTablet from "/assets/home/tablet/image-header.jpg";
import heroBgDesktop from "/assets/home/desktop/image-hero.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Items from "../components/Items";

const HomePage = () => {
	const [screenSize, setScreenSize] = useState(
		window.innerWidth >= 1024
			? "desktop"
			: window.innerWidth >= 768
			? "tablet"
			: "mobile"
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

		// Check initial width on component mount
		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// Define images based on screen size
	const heroBg =
		screenSize === "desktop"
			? heroBgDesktop
			: screenSize === "tablet"
			? heroBgTablet
			: heroBgMobile;

	const speakerBg =
		screenSize === "desktop"
			? speakerBgDesktop
			: screenSize === "tablet"
			? speakerBgTablet
			: speakerBgMobile;

	const earphonesImg =
		screenSize === "desktop"
			? earphonesImgDesktop
			: screenSize === "tablet"
			? earphonesImgTablet
			: earphonesImgMobile;

	return (
		<div>
			<Helmet>
				<title>Home - Premium Audio Products</title>
				<meta
					name="description"
					content="Explore our range of premium audio products on our home page. Discover the XX99 Mark II headphones, ZX9 and ZX7 speakers, and YX1 earphones with high-quality images and detailed descriptions. Shop now for top-notch audio experiences!"
				/>
			</Helmet>
			<div
				role="Hero"
				className="h-[600px] w-full flex place-content-center relative md:h-[729px] lg:place-content-start"
			>
				<img
					src={heroBg} // Use dynamically chosen hero image
					alt="hero image"
					className="absolute w-full h-[600px] md:h-[729px]"
				/>
				<div className="text-white flex flex-col items-center w-[328px] h-[290px] mt-[198px] gap-4 z-10 md:w-[379px] md:h-[346px] md:gap-7 lg:items-start lg:ml-[11%]">
					<h1 className="tracking-[0.5em] uppercase text-sm font-thin opacity-50 md:text-[14px] md:tracking-[10px]">
						New Product
					</h1>
					<h2 className="font-bold text-4xl uppercase tracking-wider md:tracking-[2px] md:text-[56px] md:leading-[58px]">
						XX99 mark ii{" "}
						<span className="block">
							headphones
						</span>
					</h2>
					<p className="text-center text-[15px] w-[328px] h-[75px] leading-6 md:w-[349px] lg:text-left">
						Experience natural, lifelike
						audio and exceptional build
						quality made for the passionate
						music enthusiast.
					</p>
					<Link to="/product/xx99-mark-two-headphones">
						<button className="w-[160px] h-[48px] bg-main-orange text-white text-transform: uppercase text-[13px] font-bold tracking-[1px] hover:bg-[#FBAF85]">
							see product
						</button>
					</Link>
				</div>
			</div>

			<Items />

			<div className="w-[327px] h-[600px] mx-auto bg-main-orange mt-[121px] rounded-lg relative overflow-hidden md:w-[689px] md:h-[720px] lg:w-[80%] lg:h-[560px] lg:flex">
				<div className="w-[558px] h-[558px] border border-white rounded-full absolute -right-[110px] -top-[120px] opacity-50 md:h-[944px] md:w-[944px] md:-top-[290px] xl:right-[32%] xl:-top-[5%]"></div>
				<div className="w-[320px] h-[320px] border border-white rounded-full absolute left-1/2 -translate-x-1/2 opacity-50 md:h-[542px] md:w-[542px] md:-top-[90px] xl:left-[300px] lg:top-[180px]"></div>
				<div className="w-[279px] h-[279px] border border-white rounded-full absolute left-1/2 -translate-x-1/2 top-[20px] opacity-50 md:h-[472px] md:w-[472px] md:-top-[55px] xl:left-[300px] xl:top-[215px]"></div>
				<img
					src={speakerNoBg}
					alt="speakers"
					className="w-[172.25px] h-[207px] mt-[45px] mx-auto md:w-[197.21px] md:h-[237px] lg:w-[36%] lg:h-[85%] lg:mt-[95px] relative"
				/>
				<div className="w-[280px] mx-auto text-white text-center md:w-[349px] md:h-[303px] md:mt-[67px] lg:text-left">
					<h3 className="font-bold text-[36px] leading-[40px] tracking-[1.29px] text-transform: uppercase mt-11 md:text-[56px] md:leading-[58px]">
						zx9{" "}
						<span className="block">
							speaker
						</span>
					</h3>
					<p className="w-full text-[15px] leading-[25px] my-5 md:my-7">
						Upgrade to premium speakers that
						are phenomenally built to
						deliver truly remarkable sound.
					</p>
					<Link to="/product/zx9-speaker">
						<button className="w-[160px] h-[48px] bg-black text-transform: uppercase tracking-[1px] text-[13px] z-10 relative">
							see product
						</button>
					</Link>
				</div>
			</div>

			<div className="w-[327px] h-[320px] mx-auto my-6 flex items-center relative md:h-[320px] md:w-[689px] lg:w-[80%]">
				<img
					src={speakerBg} // Use dynamically chosen speaker background
					alt="zx7 speaker"
					className="w-[327px] h-[320px] absolute rounded-lg md:w-[689px] md:h-[320px] lg:w-full"
				/>
				<div className="flex flex-col w-[210px] h-[118px] justify-between ml-6 z-10 md:ml-[60px] lg:ml-[8%]">
					<p className="text-transform: uppercase text-[28px] font-bold tracking-[2px]">
						zx7 speaker
					</p>
					<Link to="/product/zx7-speaker">
						<button className="text-transform: uppercase w-[160px] h-[48px] border border-black text-[13px] font-bold ml-[1px] tracking-[1px] hover:bg-black hover:text-white">
							see product
						</button>
					</Link>
				</div>
			</div>

			<div className="grid grid-rows-2 mx-auto h-[424px] w-[327px] md:grid-cols-2 md:grid-rows-1 md:w-[689px] md:h-[320px] lg:w-[80%] lg:gap-5">
				<img
					src={earphonesImg} // Use dynamically chosen earphones image
					alt="yx1 earphones"
					className="w-[327px] rounded-lg object-cover md:h-full lg:w-full"
				/>
				<div className="flex items-center text-center md:items-center md:text-left md:justify-around lg:h-full bg-second-gray h-full rounded-lg pl-[10%] md:place-items-center md:pl-0 ">
					<h3 className="text-[28px] font-bold tracking-[1.29px] uppercase h-[118px] w-[247px] flex flex-col justify-between items-start">
						yx1 earphones

						<Link to="/product/yx1-earphones">
							<button className="text-transform: uppercase w-[160px] h-[48px] border border-black text-[13px] font-bold tracking-[1px] hover:bg-black hover:text-white">
								see product
							</button>
						</Link>
            </h3>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
