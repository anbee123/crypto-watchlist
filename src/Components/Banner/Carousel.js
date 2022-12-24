

import { makeStyles} from 'tss-react/mui'
import axios from 'axios'


const useStyles = makeStyles()(() => {
  return {
Carousel: {
      height: '50%',
      display: 'flex',
      alignItems: 'center',
    },
  };
});

const Carousel = () =>{
    const { classes } = useStyles();
    const fetchTrendingCoins =async ()=>{
        const { data } = await axios.get()

    }
    return (
        <div className={classes.carousel}>
Carousel
        </div>
    ) 
}
export default Carousel