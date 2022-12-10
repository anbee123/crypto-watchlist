import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import CoinPage from "./Pages/CoinPage";
import './App.css';
import { makeStyles} from 'tss-react/mui'


function App() {
  const useStyles = makeStyles(()=> ({
    App: {
backgroundColor: "#14161a",
color: "white",
minHeight: "100vh",
    }
  }));
const classes = useStyles()




  return (
    <div className="App">
      < BrowserRouter >
        <div className= {classes.App}>
          <Header />
          <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/coins/:id" element={<CoinPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
