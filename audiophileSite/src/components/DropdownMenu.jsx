import headsets from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speaker from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "/assets/shared/desktop/image-category-thumbnail-earphones.png";
import arrow from "/assets/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectState, closeDropdown } from "../features/DropdownFeature/DropdownSlice"

const DropdownMenu = () => {
  const dropDownOpen = useSelector(selectState);
  const dispatch = useDispatch();

  if (!dropDownOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-gray-800 bg-opacity-50 transition-colors z-20"
        onClick={() => dispatch(closeDropdown())}
      ></div>
      <div className="fixed inset-x-0 top-[58px] bottom-0 z-50 bg-white overflow-auto">
        <div className="flex flex-col gap-8 items-center py-8">
          <CategoryItem
            image={headsets}
            alt="mark one headsets"
            title="headphones"
            link="/headphones"
          />
          <CategoryItem
            image={speaker}
            alt="speakers"
            title="speakers"
            link="/speakers"
          />
          <CategoryItem
            image={earphones}
            alt="earphones"
            title="earphones"
            link="/earphones"
          />
        </div>
      </div>
    </>
  );
};

const CategoryItem = ({ image, alt, title, link }) => (
  <div className="relative w-[300px] h-[200px]">
    <img
      src={image}
      alt={alt}
      className="h-[120px] absolute left-1/2 transform -translate-x-1/2 top-0"
    />
    <div className="bg-second-gray w-full h-[150px] rounded-lg mt-[50px] flex flex-col items-center">
      <h3 className="text-transform: uppercase font-bold text-base tracking-[1.07px] pt-[70px]">
        {title}
      </h3>
      <Link to={link}>
        <button className="flex items-center mt-[15px]">
          <p className="font-bold text-transform: uppercase opacity-50">
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
);

export default DropdownMenu;
