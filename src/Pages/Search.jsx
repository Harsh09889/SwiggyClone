import { motion } from "framer-motion";

const Search = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className='h-screen bg-black'>
			This is Search Page
		</motion.div>
	);
};

export default Search;
