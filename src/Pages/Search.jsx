// import { motion } from "framer-motion";
// import SearchIcon from "@mui/icons-material/Search";
import biryaniImg from "./Images/biriyani1-img.png";
import burger from "./Images/burgur-img.png";
import cakeDessert from "./Images/cakeDessert-img.png";
import iceCream from "./Images/iceCream-img.png";
import north from "./Images/northIndian-img.png";
import south from "./Images/southIndian-img.png";
import pizza from "./Images/pizza-img.png";
import roll from "./Images/rolls-img.png";
import Display from "./Images/Display";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const Search = () => {
	const [dishSearch, setDishSearch] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [filters, setFilters] = useState({});
	const [dishesData, setDishesData] = useState([]);
	const debounceRef = useRef(null);

	// const dishes = dishesData?.filter((dish) => {
	// 	return dish.restaurant.includes(id);
	// });

	function handleDishSearch(e) {
		setDishSearch(e.target.value);
	}

	function handleFilterApply(filter) {
		let newFilters = {};
		let key = filter.split("=")[0];
		if (filters[key]) {
			console.log("came inside");
			for (const k in filters) {
				if (k !== key) {
					newFilters[k] = filters.k;
				}
			}
		} else {
			newFilters = { ...filters, [key]: filter.split("=")[1] };
		}
		setFilters(newFilters);
	}

	useEffect(() => {
		let q = "";

		for (const key in filters) {
			q += `${key}=${filters[key]}&`;
		}

		if (debounceRef.current) clearTimeout(debounceRef.current);

		debounceRef.current = setTimeout(() => {
			(async () => {
				const { data } = await axios.get(
					`https://swiggy-api.glitch.me/dishes?${q}`
				);
				setDishesData(data);
				let toMatch = new RegExp(dishSearch, "i");
				const search = data.filter((dish) => dish.name.match(toMatch));
				setSearchResults(search);
				console.log("called");
			})();
		}, 700);
	}, [dishSearch, filters]);

	return (
		<div className='min-h-screen'>
			<div className='max-w-[1000px] mt-14 m-auto'>
				<div className='flex items-center bg-white border'>
					<input
						onChange={handleDishSearch}
						value={dishSearch}
						className='p-5 text-lg  h-14 w-full border-0 outline-none'
						type='text '
						placeholder='Search for restaurants and food...'
					/>
					{
						<SearchIcon
							style={{
								fontSize: "32px",
								fontWeight: "lighter",
								color: "rgba(0,0,0,0.50)",
								margin: "0 1rem",
							}}
						/>
					}
				</div>
				{/* <div className='my-8 flex gap-4'>
					<button
						onClick={(e) => setRestOrDish(1)}
						className={`p-2 border rounded-3xl font-bold text-sm ${
							restOrDish === 1 && "bg-black text-white"
						}`}>
						Restaurants
					</button>
					<button
						onClick={(e) => setRestOrDish(2)}
						className={`p-2 border rounded-3xl font-bold text-sm ${
							restOrDish === 2 && "bg-black text-white"
						}`}>
						Dishes
					</button>
				</div> */}
				<div className='text-lg font-bold p-5'>Popular Cuisines</div>
				<div className='grid grid-cols-8 text-center w-[90%] mx-auto'>
					<div>
						<img
							src={biryaniImg}
							alt='bir'
						/>
					</div>
					<div>
						<img
							src={pizza}
							alt='bir'
						/>
					</div>
					<div>
						<img
							src={burger}
							alt='burger'
						/>
					</div>
					<div>
						<img
							src={cakeDessert}
							alt='bir'
						/>
					</div>
					<div>
						<img
							src={north}
							alt='bir'
						/>
					</div>
					<div>
						<img
							src={south}
							alt='bir'
						/>
					</div>
					<div>
						<img
							src={roll}
							alt='bir'
						/>
					</div>
					<div>
						<img
							src={iceCream}
							alt='bir'
						/>
					</div>
				</div>
				<br />
				<div className='flex gap-4'>
					<button
						onClick={(e) => handleFilterApply()}
						className='px-4 text-sm rounded-md text-[rgba(0,0,0,0.7)] bg-[#fafafa] border p-1'>
						Sort By
					</button>
					<button
						onClick={(e) => handleFilterApply("veg=true")}
						className='px-4 text-sm rounded-md text-[rgba(0,0,0,0.7)] bg-[#fafafa] border p-1'>
						Veg
					</button>
					<button
						onClick={(e) => handleFilterApply("price_lte=100")}
						className='px-4 text-sm rounded-md text-[rgba(0,0,0,0.7)] bg-[#fafafa] border p-1'>
						Less Than Rs 100
					</button>
					<button
						onClick={(e) => handleFilterApply("rating_gte=4")}
						className='px-4 text-sm rounded-md text-[rgba(0,0,0,0.7)] bg-[#fafafa] border p-1'>
						Rated 4+
					</button>
				</div>
				<br />
				<div className='w-full max-w-[950px] mx-auto '>
					{dishSearch.length > 0 && (
						<div className='grid grid-cols-2  bg-slate-100 '>
							{searchResults.map((dish) => (
								<Display
									key={dish.id}
									dish={dish}
								/>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Search;
{
	/* <div className=' flex max-w-[1200px] h-screen  mt-14 m-auto '>

	 <div style={{margin:'0 auto'}}>	<input style={{width:'900px'}} className="p-5 text-lg   border border-slate-700   h-14 " type="text " placeholder="Search for restaurants and food"  />{<SearchIcon style={{ position:'absolute', right:'28%',top:'16%'}}/>}</div>
	 <div className=''> asdfgh</div>
	 </div>
	  */
}
