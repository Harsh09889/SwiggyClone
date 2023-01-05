import React from 'react'

function Wallet() {
  return (
    <div className=' h-96 w-80 '>
        <div className='gap-10 h-48 p-10 border border-zinc-400 '>
            <img style={{width:'40px',height:'30px'}} src=""  /><br/>
            <h1>Amazon Pay</h1><br/>
            <button style={{color:"white",backgroundColor:'RGB(96, 178, 70)',width:'100px',height:'35px'}}>PAY</button>
        </div><br />
        
        <div className='gap-10 h-48 p-10 border border-zinc-400 '>
            <img style={{width:'40px',height:'30px'}} src="" alt="Paytm" /><br/>
            <h1>Paytm</h1><br/>
            <button style={{color:"red"}}>Link Account</button>
        </div><br />
        <div className='gap-10 h-48 p-10 border border-zinc-400 '>
            <img style={{width:'40px',height:'30px'}} src="	" alt="PhonePe" /><br/>
            <h1>PhonePe</h1><br/>
            <button style={{color:"red"}}>Link Account</button>
        </div><br />
        <div className='gap-10 h-48 p-10 border border-zinc-400 '>
            <img style={{width:'40px',height:'30px'}} src="	" alt="Mobikwik" /><br/>
            <h1>MobiKwik</h1><br/>
            <button style={{color:"red" }}>Link Account</button>
        </div>
    </div>
  )
}

export default Wallet