import headsets from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speaker from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "/assets/shared/desktop/image-category-thumbnail-earphones.png";
import arrow from "/assets/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router-dom";


const Items = () => {

	return (
		<div className="w-[327px] h-[683px] grid mx-auto mt-20 gap-2 md:grid-cols-3 md:w-[689px] md:h-[217px] md:mx-auto lg:w-[80%] lg:mx-auto lg:h-[284px] lg:place-content-end lg:gap-5">
			<div className="relative w-[327px] h-[217px] md:w-[223px] lg:w-full lg:h-full lg:flex lg:flex-col lg:self-end">
				<img
					src={headsets}
					alt="mark one headsets"
					className="h-[134px] absolute left-1/2 -translate-x-1/2"
				/>
				<Link to="/category/headphones">
					<div className="bg-second-gray w-[327px] h-[165px] rounded-lg mt-[52px] flex flex-col items-center md:w-[223px] group hover:cursor-pointer lg:w-full lg:h-[180px]">
						<h3 className="text-transform: uppercase font-bold text-base tracking-[1.07px] pt-[77px]">
							headphones
						</h3>

						<button className="flex items-center mt-[20px]">
							<p className="font-bold text-transform: uppercase opacity-50 group-hover:opacity-100 group-hover:text-main-orange ">
								shop
							</p>
							<img
								src={arrow}
								alt="arrow"
								className="w-[5px] h-[10px] ml-[13px]"
							/>
						</button>
					</div>
				</Link>
			</div>

			<div className="relative w-[327px] h-[217px] lg:w-full lg:h-full lg:flex lg:flex-col lg:self-end">
				<img
					src={speaker}
					alt="speakers"
					className="h-[144px] absolute left-1/2 -translate-x-1/2 md:left-[110px] lg:left-1/2 lg:-translate-x-1/2"
				/>
				<Link to="/category/speakers">
					<div className="bg-second-gray w-[327px] h-[165px] rounded-lg mt-[52px] flex flex-col items-center md:w-[223px] group hover:cursor-pointer lg:w-full lg:h-[180px]">
						<h3 className="text-transform: uppercase font-bold text-base tracking-[1.07px] pt-[77px]">
							speakers
						</h3>

						<button className="flex items-center mt-[20px]">
							<p className="font-bold text-transform: uppercase opacity-50 group-hover:opacity-100 group-hover:text-main-orange ">
								shop
							</p>
							<img
								src={arrow}
								alt="arrow"
								className="w-[5px] h-[10px] ml-[13px]"
							/>
						</button>
					</div>
				</Link>
			</div>

			<div className="relative w-[327px] h-[217px] lg:w-full lg:h-full lg:flex lg:flex-col lg:self-end">
				<img
					src={earphones}
					alt="earphones"
					className="h-[154px] absolute left-1/2 -translate-x-1/2 md:left-[115px] lg:left-1/2 lg:-translate-x-1/2"
				/>
				<Link to="/category/earphones">
					<div className="bg-second-gray w-[327px] h-[165px] rounded-lg mt-[52px] flex flex-col items-center md:w-[223px] group hover:cursor-pointer lg:w-full lg:h-[180px]">
						<h3 className="text-transform: uppercase font-bold text-base tracking-[1.07px] pt-[77px]">
							earphones
						</h3>

						<button className="flex items-center mt-[20px]">
							<p className="font-bold text-transform: uppercase opacity-50 group-hover:opacity-100 group-hover:text-main-orange ">
								shop
							</p>
							<img
								src={arrow}
								alt="arrow"
								className="w-[5px] h-[10px] ml-[13px]"
							/>
						</button>
					</div>
				</Link>
			</div>
		</div>
	);
};
export default Items;
