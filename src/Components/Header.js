
import { AppBar, Toolbar, Typography, Select, MenuItem } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { makeStyles } from 'tss-react/mui'
import { useNavigate } from "react-router-dom"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles()(() => {
  return {
    title: {
      flex: 1,
      color: 'gold',
      fontFamily: 'Monstserrat',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  };
});


const Header = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const { currency, setCurrency } = CryptoState()
  console.log(currency)
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color='transparent' position='static'>
        <Container>
          <Toolbar>
            <Typography
              onClick={() => navigate("/")}
              className={classes.title}
              variant='h6'> Crypto Tracker </Typography>
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}>
              <MenuItem value={'USD'}>USD</MenuItem>
              <MenuItem value={'VND'}>VND</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}
export default Header;