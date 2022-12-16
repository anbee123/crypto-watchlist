import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import CoinPage from "./Pages/CoinPage";
import './App.css';
import { makeStyles} from 'tss-react/mui'


const useStyles = makeStyles()(() => {
  return {
    App: {
      backgroundColor: 'black',
      color: 'white',
    },
  };
});

function App() {
  const { classes } = useStyles();
  

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
