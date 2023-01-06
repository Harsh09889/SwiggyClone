import React from 'react'

function Display() {
  return (
    <div>
        	<div
			// id={`dishId${id}`}
			className='flex flex-col px-8 py-4'>
			<h1 className='text-lg leading-5 font-bold first-letter:capitalize'>
				{/* {category} */}
                category
			</h1>
			 <p className='text-sm mb-4'> items </p>
			{/*{dishes.length > 0 &&
				foodItems.map((foodId, idx) => {
					const [food] = dishes.filter((el) => el.id === foodId); */}
				
						<div
							// key={idx}
							className='py-4 border-b flex justify-between items-end'>
							<div>
								{/* {food.veg ? ( */}
									<img
										className='h-6 w-6'
										src='https://img.icons8.com/color/512/vegetarian-food-symbol.png'
										alt='veg'
									/>
								{/* ) : (
									<img
										className='h-6 w-6'
										src='https://img.icons8.com/color/512/non-vegetarian-food-symbol.png'
										alt='non veg' */}
									{/* /> */}
								{/* )} */}
								<h1 className='font-medium text-base first-letter:capitalize'>
									{/* {food.name}{" "} */}
                                    hello
								</h1>
								<h1 className='text-sm mb-2'>100 </h1>
								{/* <p className='text-gray-400 text-xs'>loremzxcvcx jscj djcsdjsdjc nsdjcnsdjnsdj zcnk csdbcjzc </p> */}
							</div>
							<div className='relative px-4 flex'>
								<div className='h-20 w-30'>
									<img
										className='h-full w-full rounded-md'
										src='https://w7.pngwing.com/pngs/917/228/png-transparent-biryani-indian-cuisine-biryani-buffet-take-out-kebab-biryani-food-recipe-cuisine-thumbnail.png'
										// alt={food.name}
                                        alt='1234'
									/>
								</div>

								
								<div className='absolute text-xs flex justify-between items-center h-8 w-24 shadow-lg px-2  -bottom-2 left-1/2 -translate-x-1/2  bg-white'>
									<button
										// onClick={(e) => handleRemoveFromCart(foodId)}
										className='text-lg font-bold text-green-400 w-4 h-full'>
										{" "}
										{"-"}{" "}
									</button>

								
									{/* <p>
										{currentUserCartDishes.filter(
											(elem) =>
												elem.dishId === foodId &&
												elem.restaurantId === restaurantId
										)[0]?.quantity || 0}
									</p> */}

									<button
										// onClick={(e) => handleAddToCart(foodId, food.price)}
										className='text-lg font-bold text-green-400 w-4 h-full'>
										{" "}
										{"+"}{" "}
									</button>
								</div>
							</div>
						</div>
					
				
		</div>
    </div>
  )
}

export default Display