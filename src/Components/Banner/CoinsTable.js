import axios from "axios";
import { useEffect, useState } from "react"
import { CoinList } from "../../config/api";
import { CryptoState } from "../../CryptoContext";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from "@mui/system";
import { LinearProgress, Table, TableContainer, TableHead, TextField, Typography, TableRow, TableCell, TableBody } from "@mui/material";
import { classnames } from "tss-react/tools/classnames";
import { useNavigate } from "react-router-dom";


const CoinsTable = () => {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState()

    const { currency } = CryptoState()
    const fetchCoins = async () => {
        setLoading(true)
        const { data } = await axios.get(CoinList(currency))

        setCoins(data)
        setLoading(false)
    };
    console.log(coins)
    useEffect(() => {
        fetchCoins();
    }, [currency]);
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });
   
    const handleSearch = () => {
        return coins.filter((coin)=> (
            coin.name.toLowercase().includes(search) || 
            coin.symbol.toLowercase().includes(search)
        ))
    }

    return (

        <ThemeProvider theme={darkTheme}>
            <Container style={{ textAlign: 'center' }} >
                <Typography
                    variant='h4'
                    style={{ margin: 18, fontFamily: 'Montserrat' }} >
                    Cryptocurrency Prices by Market Cap
                </Typography>
                <TextField
                    label="Search for a Crypto Currency.."
                    variant="outlined"
                    style={{ marginBottom: 20, width: "100%" }}
                    onChange={(e) => setSearch(e.target.value)} />

                <TableContainer>
                    {loading ? (
                        <LinearProgress style={{ backgroundColor: "gold" }} />
                    ) : (
                        <Table>
                            <TableHead style={{ backgroundColor: "#EEBC1D" }}>
                                <TableRow>
                                    {['Coins', 'Price', '24h Change', 'Market Cap'].map((head) => (
                                        <TableCell
                                            style={{
                                                color: "black",
                                                fontWeight: "700",
                                                fontFamily: " Montserrat",
                                            }}
                                            key={head}
                                            align={head === "Coin" ? " " : "right"} >
                                            {head}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {handleSearch().map((row)=>{
                                const profit = row.price_change_percentage_24h > 0;
                                const navigate = useNavigate();
                                function handleClick() {
                                    navigate(`/coins/${row.id}`)
                                  }
                                return (
                                    
                                    <TableRow 
                        
                                    onClick={handleClick}
                                    className={classnames.row}
                                    key={row.name}
                                    ></TableRow>
                                )
                            })}
                            </TableBody>
                        </Table>
                    )}
                </TableContainer>

            </Container>
        </ThemeProvider>
    )
}
export default CoinsTable