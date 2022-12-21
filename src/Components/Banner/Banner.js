
import { makeStyles} from 'tss-react/mui'


const useStyles = makeStyles()(() => {
    return {
      App: {
        backgroundImage: 'url(./bannerpic.png)',
      },
    };
  });
  
const Banner = ()=>{
    const { classes } = useStyles();
    return (
        <div className={classes.banner}>
        </div>
    )
}
export default Banner