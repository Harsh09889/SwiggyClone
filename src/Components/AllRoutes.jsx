import { Routes, Route } from "react-router-dom";
import Checkout from "../Pages/Checkout";
import HomePage from "../Pages/HomePage";
import Restaurant from "../Pages/Restaurant";
import Search from "../Pages/Search";

const AllRoutes = () => {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<HomePage />}
				/>
				<Route
					path='/search'
					element={<Search />}
				/>
				<Route
					path='/restaurants/:id'
					element={<Restaurant />}
				/>
				<Route
					path='/checkout'
					element={<Checkout />}
				/>
			</Routes>
		</>
	);
};

export default AllRoutes;
