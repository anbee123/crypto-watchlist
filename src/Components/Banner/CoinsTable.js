import axios from "axios";
import { useEffect, useState } from "react"
import { CoinList } from "../../config/api";
import { CryptoState } from "../../CryptoContext";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from "@mui/system";
import { LinearProgress, Table, TableContainer, TableHead, TextField, Typography, TableRow, TableCell, TableBody, makeStyles } from "@mui/material";
import { makeStyles} from 'tss-react/mui'
import { useNavigate } from "react-router-dom";

const CoinsTable = () => {
    const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { currency, symbol } = CryptoState();
  const useStyles = makeStyles()(() => {
    return {
        row: {
            backgroundColor: "#16171a",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#131111",
            },
            fontFamily: "Montserrat",
        },
        pagination: {
            "& .MuiPaginationItem-root": {
              color: "gold",
            },
        }
    };
  });
    const navigate = useNavigate()

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });


    const classes = useStyles();

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
                                {handleSearch().map((row) => {
                                    const profit = row.price_change_percentage_24h > 0;

                    
                                    return (

                                        <TableRow

                                            onClick={()=>navigate(`/coins/${row.id}`)}
                                            className={classes.row}
                                            key={row.name}
                                        >
                                            <TableCell 
                                            component="th" 
                                            scope="row"
                                            style={{
                                                display:"flex",
                                                gap: 15,
                                            }}

                                            ></TableCell>

                                        </TableRow>
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