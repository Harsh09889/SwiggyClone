import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../Redux/Cart/CartActions";

function DishSearchComponent({ dish: food, restaurantId }) {
	const cartItems = useSelector((state) => state.cart);
	const isAuth = useSelector((state) => state.auth.auth.isAuth);
	const currentUser = useSelector((state) => state.auth.currentUser);

	const [currentUserCartDishes, setCurrentUserCartDishes] = useState([]);

	useEffect(() => {
		if (isAuth && cartItems.length > 1) {
			const [currentUserCart] = cartItems.filter(
				(elem) => elem.username === currentUser.username
			);
			setCurrentUserCartDishes(currentUserCart.cartItems);
		}
	}, [cartItems]);

	const dispatch = useDispatch();

	function handleAddToCart(dishId, price) {
		// Add cart payload will have {username,dishId,restaurantId,price}
		const payload = {
			username: "harsh09889",
			dishId,
			restaurantId,
			price,
		};
		dispatch(addToCart(payload));
	}

	function handleRemoveFromCart(dishId) {
		// Add cart payload will have {username,dishId,restaurantId,price}
		const payload = {
			username: "harsh09889",
			dishId,
			restaurantId,
		};
		dispatch(removeFromCart(payload));
	}

	return (
		<div className='py-4 border-b flex justify-between items-end'>
			<div>
				{food.veg ? (
					<img
						className='h-6 w-6'
						src='https://img.icons8.com/color/512/vegetarian-food-symbol.png'
						alt='veg'
					/>
				) : (
					<img
						className='h-6 w-6'
						src='https://img.icons8.com/color/512/non-vegetarian-food-symbol.png'
						alt='non veg'
					/>
				)}
				<h1 className='font-medium text-base first-letter:capitalize'>
					{food.name}{" "}
				</h1>
				<h1 className='text-sm mb-2'>{food.price} </h1>
				<p className='text-gray-400 text-xs'>{food.desc} </p>
			</div>
			<div className='relative px-4 flex'>
				<div className='h-20 w-30'>
					<img
						className='h-full w-full rounded-md'
						src={food.image}
						alt={food.name}
					/>
				</div>
				<div className='absolute text-xs flex justify-between items-center h-8 w-24 shadow-lg px-2  -bottom-2 left-1/2 -translate-x-1/2  bg-white'>
					<button
						onClick={(e) => handleRemoveFromCart(food.id)}
						className='text-lg font-bold text-green-400 w-4 h-full'>
						{" "}
						{"-"}{" "}
					</button>

					{/* //TODO */}
					<p>
						{currentUserCartDishes.filter(
							(elem) =>
								elem.dishId === food.id && elem.restaurantId === restaurantId
						)[0]?.quantity || 0}
					</p>

					<button
						onClick={(e) => handleAddToCart(food.id, food.price)}
						className='text-lg font-bold text-green-400 w-4 h-full'>
						{" "}
						{"+"}{" "}
					</button>
				</div>
			</div>
		</div>
	);
}

export default DishSearchComponent;
