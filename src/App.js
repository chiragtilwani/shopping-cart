import {makeStyles} from '@mui/styles'
import ClearCartBtn from './components/ClearCartBtn';
import NavBar from './components/NavBar'
import YourCart from './components/YourCart';
import {calculateTotal} from './features/cart/cartSlice'
import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'

const useStyles =makeStyles({
  container :{
    width:'100vw',
    height:'100vh',
    backgroundColor :'var(--clr-grey-10)',
    display:'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom:'2.5rem',
    overflowY:'scroll',
    '&::-webkit-scrollbar':{
      width:'0rem'
  }
  }
})

function App() {
  const classes =useStyles()
  const { cartItems} = useSelector((state) => state.cart);
  const dispatch=useDispatch()

  useEffect(()=>{dispatch(calculateTotal())},[cartItems])

  return <div className={classes.container}>
    <NavBar/>
    <YourCart/>
    <ClearCartBtn/>
  </div>;
}
export default App;
