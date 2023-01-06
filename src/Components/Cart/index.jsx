import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function index({ restaurantId }) {
	const allCartItems = useSelector((state) => state.cart);
	const username = useSelector((state) => state.auth.currentUser.username);

	const cartArray = allCartItems.filter(
		(cartItem) => cartItem.username === username
	);

	const cartItems = cartArray.length ? cartArray[0].cartItems : [];

	console.log("user's cart is -> ", cartItems);

	return (
		<div className='p-4 border '>
			<h1 className='text-3xl font-bold'> Cart </h1>
			<p className='text-sm text-gray-500'>{cartItems.length} Items</p>
			{cartItems?.map((elem) => (
				<CartItem
					key={elem.dishId}
					dish={elem}
				/>
			))}
			<h1 className='text-lg font-bold flex justify-between'>
				<p>Subtotal</p>
				<p className='text-base'>
					₹{" "}
					{(cartItems.length > 0 &&
						cartItems.reduce((total, curr) => total + +curr.totalPrice, 0)) ||
						0}
				</p>
			</h1>
		</div>
	);
}

export default index;
