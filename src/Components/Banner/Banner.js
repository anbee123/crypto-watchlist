
import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import { makeStyles} from 'tss-react/mui'


const useStyles = makeStyles()(() => {
    return {
      banner: {
        backgroundImage: 'url(./bannerphto.jpeg)',
      },
      bannerContent: {
        height: 400,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 25,
    justifyContent: 'space-around',        

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
              </div>
            </Container>
        </div>
    )
}
export default Banner