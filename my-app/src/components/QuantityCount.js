//this is a TEST message

import { Stack, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'; 
import React, { useState } from "react";

const QuantityCount = (props) => {
    var [quantity, setQuantity] = useState(0);
    var [disabled, setDisabled] = useState(true);

    const addQuantity = () => {
        setDisabled(false);
        setQuantity((quantity) => quantity + 1);
        props.setQuantity((quantity) => quantity + 1);
    }

    const subtractQuantity = () => {
        setQuantity((quantity) => quantity - 1);
        props.setQuantity((quantity) => quantity - 1);
        
        if(quantity === 1) {
            return setDisabled(true);
        }
    }

    return(
        <Stack direction = "row" justifyContent={"center"}>
            <IconButton onClick={subtractQuantity} disabled = {disabled} data-testid = "subtract">
                <RemoveCircleIcon />
            </IconButton>

            <p data-testid = "quantity"> {quantity} </p>

            <IconButton onClick={addQuantity}>
                <AddCircleIcon />
            </IconButton>
        </Stack>
    )
}

export default QuantityCount;