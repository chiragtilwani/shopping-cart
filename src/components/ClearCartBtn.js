import React from 'react'
import {makeStyles} from '@mui/styles'
import {useDispatch} from 'react-redux'
import {clearCart} from '../features/cart/cartSlice'

const useStyles = makeStyles({
    clearCart:{
        border:'.3rem solid #534666',
        width:'10rem',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:'3rem',
        padding:'1rem 0',
        fontSize:'1.2rem',
        fontWeight:'bolder',
        color:'var(--clr-primary-dark)',
        letterSpacing:'.05rem',
        transitionDuration:'.2s',
        cursor:'pointer',
        borderRadius:'.8rem',
        '&:hover':{
            backgroundColor:'rgba(0,0,0,.5)',
            color:'white'
        }
    }
})

const ClearCartBtn = () => {
    const classes= useStyles()
    const dispatch=useDispatch()
  return (
    <div className={classes.clearCart} onClick={()=>{dispatch(clearCart())}}>Clear Cart</div>
  )
}

export  default ClearCartBtn