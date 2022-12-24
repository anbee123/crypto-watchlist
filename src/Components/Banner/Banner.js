
import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import { makeStyles} from 'tss-react/mui'
import Carousel from './Carousel';


const useStyles = makeStyles()(() => {
    return {
      banner: {
        backgroundImage: 'url(./bannerphto.jpeg)',
      },
      bannerContent: {
        height: 520,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 25,
    justifyContent: 'space-around',        

      },
      tagline: {
        display: 'flex',
        height: '40%',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',

      }
    };
  });
  
const Banner = ()=>{
    const { classes } = useStyles();
    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
              <div className={classes.tagline}>
                <Typography
                variant='h2'
                style={{
                  fontWeight: 'bold',
                  marginBottom: 15,
                  fontFamily: 'Montserrat',
                }} >
                  Crypto Tracker
                </Typography>
                <Typography 
                variant= 'subtitle2'
                style={{
                  color: 'darkgrey',
                  textTransform: 'capitalize',
                  fontFamily: 'Montserrat'
                }}>
                  Get all the info regarding your favorite crypto currency
                </Typography>
              </div>
<Carousel />
            </Container>
        </div>
    )
}
export default Banner