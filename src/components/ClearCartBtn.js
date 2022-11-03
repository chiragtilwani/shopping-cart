import React from 'react'
import { makeStyles } from '@mui/styles'
import { useSelector } from 'react-redux'

const useStyles = makeStyles({
  clearCart: {
    border: '.3rem solid #534666',
    width: '10rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '3rem',
    padding: '1rem 0',
    fontSize: '1.2rem',
    fontWeight: 'bolder',
    color: 'var(--clr-primary-dark)',
    letterSpacing: '.05rem',
    transitionDuration: '.2s',
    cursor: 'pointer',
    borderRadius: '.8rem',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,.5)',
      color: 'white'
    },
    '&:disabled': {
      backgroundColor: 'rgba(0,0,0,.5)',
    }
  }
})

const ClearCartBtn = (props) => {
  const classes = useStyles()
  const { amount } = useSelector((state) => state.cart);
  console.log(amount)
  return (
    <button className={classes.clearCart} onClick={props.handleClickOpen} disabled={amount === 0 ? true : false}>Clear Cart</button>
  )
}

export default ClearCartBtn