import IceCreamList from './IceCreamList'
import {Container, Button} from '@mui/material'

const IceCreamMenu = () => {
    return(
        <div>
        <Container maxWidth="xl" sx={{ bgcolor: '#FFBEB7', height: '225vh', width:'215vh'}}>
            <br />
            <h1 className="header"> Our Menu </h1>
            <p className="text"> 
                <i> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet scelerisque 
                    mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas est lorem, 
                    blandit a ornare vel, hendrerit elementum lacus. Proin hendrerit ligula nisi, quis varius 
                    neque blandit a. Morbi faucibus est nisl, sed euismod turpis sodales ut. Interdum et 
                    malesuada fames ac ante ipsum primis in faucibus. 
                </i> 
            </p>

            <IceCreamList />
            
            <Button 
                variant = "contained" 
                disableRipple={true} 
                style={{backgroundColor:'#EF6351', marginLeft:"590px"}}> 
                    <b> Place order </b> 
            </Button>
        </Container>
     </div>
    )
}

export default IceCreamMenu