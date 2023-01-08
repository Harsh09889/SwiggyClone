import {useState} from "react";

export default function CheckoutCredit() {
  const [firstName,setFirstName]=useState('')
    const [cardNumber,setCardNumber]=useState('')
    const [cvv,setCvv]=useState('')
    const [expiry,setExpiry]=useState('')
    const [error,setError]=useState(false)

    const handleSubmit=(e)=>{
      e.preventDefault();
      if(firstName.length==0||cardNumber.length==0){
          setError(true)
      }
    
  }

  return (
    <>
      <div className="text-xl font-semibold">
        <h1>Add new card</h1> <br />{" "}
      </div>
      <div className="grid grid-cols-5 content-center gap-1">
        <div>
          <p className="text-xs " style={{ paddingTop: "15px" }}>
            WE ACCEPT
          </p>
        </div>
        <div>
          <img
            src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-png-transparent-svg-vector-bie-supply-0.png"
            width="50px"
            height="50px"
            alt=" "
          />
        </div>
        <div>
          <img
            src="https://www.freepnglogos.com/uploads/visa-inc-png-18.png"
            height="50px"
            width="50px"
            style={{ paddingTop: "15px" }}
            alt=""
          />
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.png"
            height="50px"
            style={{ paddingTop: "12px" }}
            width="50px"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/banking-and-finance/zeta-logo.png"
            height="50px"
            width="50px"
            alt=""
          />
        </div>
      </div>
      <hr style={{ border: "1px solid black" }} /> <br />
	  <div>
		<form className="m-4" onSubmit={handleSubmit}>
			

			<input className="w-[350px] h-12 p-4  border border-x-stone-600" type="text" placeholder="Card Number" maxLength={16} onChange={e=>setCardNumber(e.target.value)} /><br />
      {error&&cardNumber.length<=0?
               <label className="text-red-500 text-xs">★ Card Number can't be Empty</label>:""}
			<div className="flex">
        <div>

			<input className="w-[200px] h-12 p-4 border border-x-stone-500 " type="text"  placeholder="Valid through(MM/YY)" onChange={e=>setExpiry(e.target.value)}/>
      {error&&expiry.length<=0?
               <label className="text-red-500 text-xs">★ MM/YY Required</label>:""}<br/>
               </div>
               <div>
<input className="w-[150px] h-12 p-4 border border-x-stone-500 "  type="text" placeholder="CVV" maxLength={3} onChange={e=>setCvv(e.target.value)} />
{error&&cvv.length<=0?
               <label className="text-red-500 text-xs">★ CVV Required</label>:""}<br/>
        </div>
			</div>
			<input className="w-[350px] h-12 p-4  border border-x-stone-500" type="text" placeholder="Name on Card"  onChange={e=>setFirstName(e.target.value)}/><br />
      {error&&firstName.length<=0?
               <label className="text-red-500 text-xs">★ Name can't be Empty</label>:""}<br/>
			<input type="checkbox" />&nbsp;
			<label className='text-xs font-light'>Securely save this card for a faster checkout next time.</label><br /><br /> 	
			<input className="w-[350px] h-12   text-white text-lg bg-green-500" type="submit" name='submit' />
			
		</form>
		</div>
    </>
  );
}
