import {makeStyles} from '@mui/styles'
import NavBar from './components/NavBar'
import YourCart from './components/YourCart';

const useStyles =makeStyles({
  container :{
    width:'100vw',
    height:'100vh',
    backgroundColor :'var(--clr-grey-10)',
    display:'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom:'2.5rem'
  }
})

function App() {
  const classes =useStyles()
  return <div className={classes.container}>
    <NavBar/>
    <YourCart/>
  </div>;
}
export default App;
