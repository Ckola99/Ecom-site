const AddToCart = () => {
  return (
    <div className="w-[296px] h-[48px] flex justify-between">
	<div className="w-[120px] h-[48px] bg-second-gray flex justify-around items-center">
		<button className="opacity-40 font-bold text-[13px] leading-[1px]">-</button>
		<p className="text-[13px]">1</p>
		<button className="opacity-40 font-bold text-[13px] leading-[1px]">+</button>
	</div>
	<div className="w-[160px] h-[48px] bg-main-orange flex justify-center items-center">
		<p className="text-white text-transform: uppercase font-bold text-[13px] leading-[1px]">add to cart</p>
	</div>
    </div>
  )
}
export default AddToCart
