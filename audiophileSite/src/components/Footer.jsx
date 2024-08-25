import { Link } from "react-router-dom";
import bestGear from "/assets/shared/mobile/image-best-gear.jpg";
import bestGearTablet from "/assets/shared/tablet/image-best-gear.jpg";
import bestGearDesktop from "/assets/shared/desktop/image-best-gear.jpg";
import logo from "/assets/shared/desktop/logo.svg";
import instaLogo from "/assets/shared/desktop/icon-instagram.svg";
import facebookLogo from "/assets/shared/desktop/icon-facebook.svg";
import twitterLogo from "/assets/shared/desktop/icon-twitter.svg";
import {useLocation} from 'react-router-dom';
import { useState, useEffect } from "react";

const Footer = () => {
	const location = useLocation();

	const [screenSize, setScreenSize] = useState("mobile");

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

	return (
		<div className="">
			{location.pathname !== "/checkout" && (
				<div className="my-[121px] h-[698px] w-[327px] mx-auto md:w-[689px] md:h-[633px] md:mt-121px md:mb-[60px] lg:w-[80%] lg:grid lg:grid-cols-2">
					<img
						src={
							screenSize === "mobile"
								? bestGear
								: screenSize ===
								  "tablet"
								? bestGearTablet
								: screenSize ===
								  "desktop"
								? bestGearDesktop
								: bestGear
						}
						alt=""
						className="w-[327px] h-[300px] rounded-lg md:w-full md:h-[300px] lg:h-[588px] lg:col-start-2"
					/>
					<div className="lg:col-start-1 lg:flex lg:flex-col lg:my-0 lg:row-start-1 lg:place-content-center">
						<h3 className="text-[28px] text-center font-bold text-transform: uppercase my-10 md:w-[573px] md:text-[40px] md:leading-[44px] md:tracking-[1.43px] md:mx-auto lg:text-left lg:w-[80%] lg:mx-0">
							Bringing you the{" "}
							<span className="text-main-orange">
								best
							</span>{" "}
							audio gear
						</h3>

						<p className="text-center font-medium text-[15px] opacity-50 md:w-[573px] md:mx-auto lg:text-left lg:w-[80%] lg:mx-0">
							Located at the heart of
							New York City,
							Audiophile is the
							premier store for high
							end headphones,
							earphones, speakers, and
							audio accessories. We
							have a large showroom
							and luxury demonstration
							rooms available for you
							to browse and experience
							a wide range of our
							products. Stop by our
							store to meet some of
							the fantastic people who
							make Audiophile the best
							place to buy your
							portable audio
							equipment.
						</p>
					</div>
				</div>
			)}

			<div className="w-full h-[654px] bg-black flex flex-col items-center text-white md:h-auto md:pb-[60px]">
				<div className="w-[101px] h-[4px] bg-main-orange md:self-start md:ml-10"></div>
				<div className="">
					<img
						src={logo}
						alt="logo"
						className="my-10 w-[143px] h-[25px] md:self-start md:ml-10"
					/>
					<div className="w-[108px] h-[148px] text-transform: uppercase text-center text-[13px] tracking-[2px] font-bold md:self-start md:ml-10 md:h-[25px]">
						<ul className="flex flex-col justify-between h-full md:flex-row md:w-[429px] md:h-[25px]">
							<li>
								<Link
									to="/"
									className="block hover:text-main-orange"
								>
									home
								</Link>
							</li>
							<li>
								<Link
									to="/category/headphones"
									className="block hover:text-main-orange"
								>
									headphones
								</Link>
							</li>
							<li>
								<Link
									to="/category/speakers"
									className="block hover:text-main-orange"
								>
									speakers
								</Link>
							</li>
							<li>
								<Link
									to="/category/earphones"
									className="block hover:text-main-orange"
								>
									earphones
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<p className="my-10 w-[327px] h-[150px] font-medium text-[15px] text-center opacity-50 leading-[25px] md:w-[689px] md:text-left md:mb-0">
					Audiophile is an all in one stop to
					fulfill your audio needs. We're a small
					team of music lovers and sound
					specialists who are devoted to helping
					you get the most out of personal audio.
					Come and visit our demo facility - we’re
					open 7 days a week.
				</p>
				<div className="md:w-[689px] md:flex md:flex-row md:justify-between flex flex-col items-center">
					<p className="opacity-50 font-bold text-[15px] leading-[25px]">
						Copyright 2021. All Rights
						Reserved
					</p>
					<div className="mt-16 w-[104px] h-[24px] flex justify-between md:mt-0">
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
		</div>
	);
};
export default Footer;
