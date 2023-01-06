// import { motion } from "framer-motion";
import SearchIcon from '@mui/icons-material/Search';
import biryaniImg from './Images/biriyani1-img.png'
import burger from './Images/burgur-img.png'
import cakeDessert from './Images/cakeDessert-img.png'
import iceCream from './Images/iceCream-img.png'
import north from './Images/northIndian-img.png'
import south from './Images/southIndian-img.png'
import pizza from './Images/pizza-img.png'
import roll from './Images/rolls-img.png'



const Search = () => {
	return (
	<>
	<div className='   max-w-[50%] h-screen mt-14 m-auto '>

<div >	<input className="p-5 text-lg ml-16  border border-slate-300 w-[800px]  h-14 " type="text " placeholder="Search for restaurants and food..."  />{<SearchIcon style={{ position:'absolute', right:'31%',top:'17%'}}/>}</div>
<div className='text-lg font-bold ml-12 p-5'>Popular Cuisines</div>
<div className='grid grid-cols-8 text-center w-[80%] 	list-style-type: none ml-24'>
	<ul><li><img src={biryaniImg} alt="bir" /></li></ul>
	<ul><li><img src={pizza} alt="bir" /></li></ul>
	<ul><li><img src={burger} alt="burger" /></li></ul>
	<ul><li><img src={cakeDessert} alt="bir" /></li></ul>
	<ul><li><img src={north} alt="bir" /></li></ul>
	<ul><li><img src={south} alt="bir" /></li></ul>
	<ul><li><img src={roll} alt="bir" /></li></ul>
	<ul><li><img src={iceCream} alt="bir" /></li></ul>
</div><br /><br />
<div className=' w-[800px] ml-16  '>
	<div className='grid grid-cols-2  gap-2  bg-slate-100 '>
		<div className=' w-[90%] h-56 p-5 m-5 bg-white rounded-[20px]'>1</div>
		<div className=' w-[90%] h-56 p-5 m-5 bg-white rounded-[20px]'>1</div>
		<div className=' w-[90%] h-56 p-5 m-5 bg-white rounded-[20px]'>1</div>
		<div className=' w-[90%] h-56 p-5 m-5 bg-white rounded-[20px]'>1</div>
		<div className=' w-[90%] h-56 p-5 m-5 bg-white rounded-[20px]'>1</div>
		<div className=' w-[90%] h-56 p-5 m-5 bg-white rounded-[20px]'>1</div>
		<div className=' w-[90%] h-56 p-5 m-5 bg-white rounded-[20px]'>1</div>
		<div className=' w-[90%] h-56 p-5 m-5 bg-white rounded-[20px]'>1</div>
		<div className=' w-[90%] h-56 p-5 m-5 bg-white rounded-[20px]'>1</div>
</div>
</div>
</div>
	</>
		
	);
};

export default Search;
{/* <div className=' flex max-w-[1200px] h-screen  mt-14 m-auto '>

	 <div style={{margin:'0 auto'}}>	<input style={{width:'900px'}} className="p-5 text-lg   border border-slate-700   h-14 " type="text " placeholder="Search for restaurants and food"  />{<SearchIcon style={{ position:'absolute', right:'28%',top:'16%'}}/>}</div>
	 <div className=''> asdfgh</div>
	 </div>
	  */}