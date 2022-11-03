import * as React from 'react';
import { makeStyles } from '@mui/styles'
import ClearCartBtn from './components/ClearCartBtn';
import NavBar from './components/NavBar'
import YourCart from './components/YourCart';
import { calculateTotal } from './features/cart/cartSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { clearCart } from './features/cart/cartSlice';

const useStyles = makeStyles({
  container: {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'var(--clr-grey-10)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '2.5rem',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: '0rem'
    }
  }
})

function App() {
  const classes = useStyles()
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  useEffect(() => { dispatch(calculateTotal()) }, [cartItems])

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleClickClear() {
    dispatch(clearCart())
    handleClose()
  }
  return <div className={classes.container}>
    <NavBar />
    <YourCart />
    <ClearCartBtn handleClickOpen={handleClickOpen} />
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Clear Cart"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Once you click CLEAR all items from your cart will be removed.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>CANCEL</Button>
        <Button onClick={handleClickClear} autoFocus >
          CLEAR
        </Button>
      </DialogActions>
    </Dialog>
  </div>;
}
export default App;
