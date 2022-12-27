import axios from "axios";
import { useEffect, useState } from "react"
import { CoinList } from "../../config/api";
import { CryptoState } from "../../CryptoContext";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from "@mui/system";


const CoinsTable = () => {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(false);

    const { currency } = CryptoState()
    const fetchCoins = async () => {
        setLoading(true)
        const { data } = await axios.get(CoinList(currency))

        setCoins(data)
        setLoading(false)
    };
    console.log(coins)
    useEffect(()=>{
fetchCoins();
    }, [currency]);
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });
    return (

        <ThemeProvider theme={darkTheme}>
            <Container style = {{ textAlign: 'center'}} >
                
            </Container>
            </ThemeProvider>
    )
}
export default CoinsTable