import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function index() {
	const allCartItems = useSelector((state) => state.cart);
	const username = useSelector((state) => state.auth.currentUser.username);

	const cartArray = allCartItems.filter(
		(cartItem) => cartItem.username === username
	);

	const cartItems = cartArray.length ? cartArray[0].cartItems : [];

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
			<Link
				to={"/checkout"}
				className='bg-green-500 text-white w-full block text-center py-3
				 mt-4'>
				{" "}
				Checkout
			</Link>
		</div>
	);
}

export default index;
