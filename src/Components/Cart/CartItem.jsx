import React from "react";
import { useSelector } from "react-redux";

function CartItem({ dish }) {
	const dishes = useSelector((state) => state.restaurant.dishes);
	const [dishItem] = dishes.filter((elem) => elem.id === dish.dishId);
	return (
		<div className='my-4'>
			<div className='flex justify-between border-b pb-2'>
				<h1 className=' first-letter:capitalize'>{dishItem.name} </h1>
				<p className='text-xs'>₹ {dish.totalPrice} </p>
			</div>
		</div>
	);
}

export default CartItem;
