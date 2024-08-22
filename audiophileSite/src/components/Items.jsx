import headsets from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speaker from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "/assets/shared/desktop/image-category-thumbnail-earphones.png";
import arrow from "/assets/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router-dom";
import {
	selectState,
	openDropdown,
	closeDropdown,
} from "../features/DropdownFeature/DropdownSlice";
import { useSelector, useDispatch } from "react-redux";

const Items = () => {
	const isOpen = useSelector(selectState);
	const dispatch = useDispatch();

	const handleClick = () => {
		if (isOpen) {
			dispatch(closeDropdown());
		} else {
			dispatch(openDropdown());
		}
	};

	return (
		<div className="w-[327px] h-[683px] grid mx-auto mt-10 gap-2 md:grid-cols-3 md:w-[689px] md:h-[217px] md:mx-auto">
			<div className="relative w-[327px] h-[217px] md:w-[223px]">
				<img
					src={headsets}
					alt="mark one headsets"
					className="h-[134px] absolute left-1/2 -translate-x-1/2"
				/>
				<div className="bg-second-gray w-[327px] h-[165px] rounded-lg mt-[52px] flex flex-col items-center md:w-[223px]">
					<h3 className="text-transform: uppercase font-bold text-base tracking-[1.07px] pt-[77px]">
						headphones
					</h3>
					<Link to="/headphones">
						<button
							onMouseDown={
								handleClick
							}
							className="flex items-center mt-[20px]"
						>
							<p className="font-bold text-transform: uppercase opacity-50 ">
								shop
							</p>
							<img
								src={arrow}
								alt="arrow"
								className="w-[5px] h-[10px] ml-[13px]"
							/>
						</button>
					</Link>
				</div>
			</div>

			<div className="relative w-[327px] h-[217px] ">
				<img
					src={speaker}
					alt="speakers"
					className="h-[144px] absolute left-1/2 -translate-x-1/2 md:left-[110px]"
				/>
				<div className="bg-second-gray w-[327px] h-[165px] rounded-lg mt-[52px] flex flex-col items-center md:w-[223px]">
					<h3 className="text-transform: uppercase font-bold text-base tracking-[1.07px] pt-[77px]">
						speakers
					</h3>
					<Link to="/speakers">
						<button className="flex items-center mt-[20px]">
							<p className="font-bold text-transform: uppercase opacity-50 ">
								shop
							</p>
							<img
								src={arrow}
								alt="arrow"
								className="w-[5px] h-[10px] ml-[13px]"
							/>
						</button>
					</Link>
				</div>
			</div>

			<div className="relative w-[327px] h-[217px] ">
				<img
					src={earphones}
					alt="earphones"
					className="h-[154px] absolute left-1/2 -translate-x-1/2 md:left-[115px]"
				/>
				<div className="bg-second-gray w-[327px] h-[165px] rounded-lg mt-[52px] flex flex-col items-center md:w-[223px]">
					<h3 className="text-transform: uppercase font-bold text-base tracking-[1.07px] pt-[77px]">
						earphones
					</h3>
					<Link to="/earphones">
						<button className="flex items-center mt-[20px]">
							<p className="font-bold text-transform: uppercase opacity-50 ">
								shop
							</p>
							<img
								src={arrow}
								alt="arrow"
								className="w-[5px] h-[10px] ml-[13px]"
							/>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Items;
