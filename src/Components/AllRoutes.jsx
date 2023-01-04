import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Restaurant from "../Pages/Restaurant";

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
					element={<HomePage />}
				/>
				<Route
					path='/restaurants/:id'
					element={<Restaurant />}
				/>
				<Route
					path='/checkout'
					element={<HomePage />}
				/>
			</Routes>
		</>
	);
};

export default AllRoutes;
