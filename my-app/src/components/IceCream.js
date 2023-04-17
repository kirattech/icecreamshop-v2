// LOOK INTO CONTEXT API FOR STATE MANAGEMENT

import { Grid, Box, Typography } from '@mui/material';
import { useState } from 'react';
import QuantityCount from './QuantityCount';

const IceCream  = (props) => {
    var [quantity, setQuantity] = useState(0);

    return( 
            <Grid item xs={4} data-testid = "ice-cream"> 
                <Box bgcolor="#F38375" color="white" m="10px" borderRadius="50px"> 
                    <br />

                    <Grid display="flex" justifyContent = "center" >
                        <img src={props.image} height="300" width="215" />
                    </Grid>

                    <Grid display="flex" justifyContent = "center" >
                        <Typography variant="h5"> <b> {props.flavour} </b> | $10.00 </Typography>
                    </Grid>

                    <Grid display="flex" justifyContent="center" >
                        <Typography align="center" variant="body2" m="13px" > {props.desc} </Typography>
                    </Grid>

                    <QuantityCount setQuantity = {setQuantity} quantity = {quantity} />
                    <br />
                </Box>
            </Grid> 
    );
}

export default IceCream