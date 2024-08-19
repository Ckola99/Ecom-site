import { Link } from "react-router-dom";
import bestGear from "/assets/shared/mobile/image-best-gear.jpg";
import logo from "/assets/shared/desktop/logo.svg";
import instaLogo from "/assets/shared/desktop/icon-instagram.svg";
import facebookLogo from "/assets/shared/desktop/icon-facebook.svg";
import twitterLogo from "/assets/shared/desktop/icon-twitter.svg";
import {useLocation} from 'react-router-dom';

const Footer = () => {
	const location = useLocation();

	return (
		<div className="">
			{location.pathname !== "/checkout" && (
				<div className="mt-[121px] h-[698px] w-[327px] mx-auto">
					<img
						src={bestGear}
						alt=""
						className="w-[327px] h-[300px] rounded-lg"
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
						Located at the heart of New York
						City, Audiophile is the premier
						store for high end headphones,
						earphones, speakers, and audio
						accessories. We have a large
						showroom and luxury
						demonstration rooms available
						for you to browse and experience
						a wide range of our products.
						Stop by our store to meet some
						of the fantastic people who make
						Audiophile the best place to buy
						your portable audio equipment.
					</p>
				</div>
			)}

			<div className="w-full h-[654px] bg-black mt-[121px] flex flex-col items-center text-white">
				<div className="w-[101px] h-[4px] bg-main-orange"></div>
				<img
					src={logo}
					alt="logo"
					className="my-10 w-[143px] h-[25px]"
				/>
				<div className="w-[108px] h-[148px] text-transform: uppercase text-center text-[13px] tracking-[2px] font-bold">
					<ul className="flex flex-col justify-between h-full">
						<li>
							<Link
								to="/"
								className="block hover:underline"
							>
								home
							</Link>
						</li>
						<li>
							<Link
								to="headphones"
								className="block hover:underline"
							>
								headphones
							</Link>
						</li>
						<li>
							<Link
								to="speakers"
								className="block hover:underline"
							>
								speakers
							</Link>
						</li>
						<li>
							<Link
								to="earphones"
								className="block hover:underline"
							>
								earphones
							</Link>
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
				<p className="opacity-50 font-bold text-[15px] leading-[25px]">
					Copyright 2021. All Rights Reserved
				</p>
				<div className="mt-16 w-[104px] h-[24px] flex justify-between">
					<img
						src={facebookLogo}
						alt="facebook logo"
					/>
					<img
						src={twitterLogo}
						alt="facebook logo"
					/>
					<img
						src={instaLogo}
						alt="facebook logo"
					/>
				</div>
			</div>
		</div>
	);
};
export default Footer;
