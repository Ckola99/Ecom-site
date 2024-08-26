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
				<div className="w-[101px] h-[4px] bg-main-orange md:self-start md:ml-10 lg:ml-[10%]"></div>
				<div className="lg:grid lg:grid-cols-2 lg:w-[80%] lg:mt-[5%] flex flex-col items-center w-full">
					<img
						src={logo}
						alt="logo"
						className="my-10 w-[143px] h-[25px] md:self-start md:ml-10 lg:m-0"
					/>
					<div className="w-[108px] h-[148px] text-transform: uppercase text-center text-[13px] tracking-[2px] font-bold md:self-start md:ml-10 md:h-[25px] lg:ml-0 lg:w-auto lg:place-self-end">
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

				<p className="my-10 w-[327px] h-[150px] font-medium text-[15px] text-center opacity-50 leading-[25px] md:w-[689px] md:text-left md:mb-0 lg:w-[38%] lg:self-start lg:ml-[10%] ">
					Audiophile is an all in one stop to
					fulfill your audio needs. We're a small
					team of music lovers and sound
					specialists who are devoted to helping
					you get the most out of personal audio.
					Come and visit our demo facility - we’re
					open 7 days a week.
				</p>
				<div className="md:w-[689px] md:flex md:flex-row md:justify-between flex flex-col items-center lg:w-[80%]">
					<p className="opacity-50 font-bold text-[15px] leading-[25px]">
						Copyright 2021. All Rights
						Reserved
					</p>
					<div className="mt-16 w-[104px] h-[24px] flex justify-between md:mt-0">
						<svg
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							className="hover:fill-main-orange fill-white"
						>
							<path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
						</svg>
						<svg
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							className="hover:fill-main-orange fill-white"
						>
							<path d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z" />
						</svg>
						<svg
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							className="hover:fill-main-orange fill-white"
						>
							<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Footer;
