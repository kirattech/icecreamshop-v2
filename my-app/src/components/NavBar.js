import {AppBar, Toolbar, Typography, Stack, Button} from "@mui/material"

const NavBar = () => {
    const elements = [
        {name:"About",
        id:1},
        {name:"Order",
         link:"../App.js",
         id:2}, 
        {name:"Reservation",
        id:3}, 
        {name:"Contact",
        id:4}];
    
    return(
        <AppBar style={{backgroundColor:"#EF6351"}}> 
            <Stack direction = "row">
                <Toolbar>     
                    <h2 sx = {{flexGrow: 1}} style = {{fontFamily:'Brush Script MT'}}> Ice Cream Shop </h2>
                </Toolbar>

                {elements.map(
                    (element) => {
                        return <Button 
                                disableRipple={true} 
                                color="inherit" 
                                href={element.link}
                                key={element.id}>
                                    {element.name}      
                        </Button>
                    }
                )}
            </Stack>
        </AppBar>
    )
}

export default NavBar