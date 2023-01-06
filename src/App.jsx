import AllRoutes from "./Components/AllRoutes";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "react-loading-skeleton/dist/skeleton.css";


function App() {
	return (
		<>
			<Navbar />
			<AllRoutes />
			<Footer/>
		</>
	);
}

export default App;
