
import { AppBar, Toolbar, Typography, Select, MenuItem } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

 const Header =() =>{
    return (
<AppBar color= 'transparent' position='static'>
<Container>
    <Toolbar>
        <Typography> Crypto Tracker </Typography>
        <Select 
        variant="outlined"
        style={{
            width:100,
            height: 40,
            marginLeft: 15,
        }}>
<MenuItem value={'USD'}>USD</MenuItem>
<MenuItem value={'EUR'}>EUR</MenuItem>
        </Select>
    </Toolbar>
</Container>
</AppBar>
    )
 }
 export default Header;