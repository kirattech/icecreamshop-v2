import '../App.css';
import NavBar from './NavBar'
import {Container, Grid} from '@mui/material'
import Shop from '../ice_cream_pics/48-flavours-1024x597.jpg';

const Intro = () => {
    return(
            <Container maxWidth="xl" sx={{ bgcolor: '#ffe3e0', height: '110vh', width:'215vh'}}>
                <NavBar id="navigation" />
            
                <br/>
                <br/>
                <br/>
                <br/>

                <h1 className="header"> Taking orders now </h1>

                <p className="text"> 
                    <i> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet scelerisque 
                    mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas est lorem, 
                    blandit a ornare vel, hendrerit elementum lacus.  
                    <br/>
                    <br/>
                    
                    </i> 
                </p>

                <Grid display="flex" justifyContent = "center" >
                    <img src ={Shop} />
                </Grid>

                <br />
            </ Container>
    );
}

export default Intro
