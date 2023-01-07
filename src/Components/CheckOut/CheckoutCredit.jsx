import React from 'react'
import { TextField, Grid, Button } from "@material-ui/core";



export default function CheckoutCredit() {
 return (
 <>
<div className='text-xl font-semibold'><h1 >Add new card</h1> <br /> </div>
<div className='grid grid-cols-5 content-center gap-1'>
  <div><p className='text-xs ' style={{paddingTop:'15px'}}>WE ACCEPT</p></div>
 <div><img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-png-transparent-svg-vector-bie-supply-0.png" width="50px"  height='50px' alt=" " /></div>
 <div><img src="https://www.freepnglogos.com/uploads/visa-inc-png-18.png" height='50px' width="50px" style={{paddingTop:'15px'}} alt="" /></div>
<div><img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.png" height='50px'  style={{paddingTop:'12px'}} width="50px" alt="" /></div>
<div><img src="https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/banking-and-finance/zeta-logo.png" height='50px' width="50px" alt="" /></div>
</div>


<hr style={{border:'1px solid black'}}/> <br />
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                name="inn"
                // onChange={handleFormFieldChange}
                variant="outlined"
                fullWidth
                label="Card Number"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="holder"
                // onChange={handleFormFieldChange}
                variant="outlined"
                fullWidth
                label="Card Holder"
              />
            </Grid>
    
            <Grid item xs={6}>
              <TextField
                name="expiration"
                // onChange={handleFormFieldChange}
                variant="outlined"
                fullWidth
                label="Expiration Date"
              />
            </Grid>
    
            <Grid item xs={6}>
              <TextField
                name="cvv"
                // onChange={handleFormFieldChange}
                variant="outlined"
                fullWidth
                label="CVV"
              />
            </Grid>
            <input type="checkbox"   />
                <label className='text-sm font-light'> Save this card for faster checkout next time.</label>
            <Grid style={{ marginTop: 20 }} justify="center" container>
              <Button size="large" variant="contained" color="primary">
                PAY
              </Button>
            </Grid>
          </Grid>
        </form>
        </>
  )
}
