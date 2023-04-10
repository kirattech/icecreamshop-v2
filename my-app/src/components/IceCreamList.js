import {Grid} from "@mui/material";
import IceCream from "./IceCream";
import Flavours from '../data/Flavours.js';

const IceCreamList = (props) => {
    return(
        <Grid container sx={{margin: '25px 5px 20px -9px'}} rowSpacing="10px" columnSpacing="15px">
            {
                Flavours.map(
                    (flavour) => {
                        return <IceCream
                            flavour = {flavour.name} 
                            desc = {flavour.desc} 
                            image = {flavour.image}
                            key = {flavour.id}
                            quantityFunc = {flavour.quantityFunc}
                        />
                    }
                )
            }
        </Grid>
    )
}

export default IceCreamList