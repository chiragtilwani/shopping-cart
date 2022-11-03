import React from 'react'
import { makeStyles } from '@mui/styles'
import { useSelector } from 'react-redux'
import Item from './Item'
import cartImg from '../cartImg.png'

const useStyles = makeStyles({
    container: {
        backgroundColor: 'rgb(0 0 0 / 20%)',
        height: '80vh',
        width: '60%',
        borderRadius: '.5rem',
        boxShadow: '2rem 1rem 3rem .1rem rgb(0 0 0 / 15%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: '3rem',
    },
    h2: {
        width: '100%',
        height: '10%',
        textAlign: 'center',
        color: 'var(--clr-primary-dark)',
        marginTop: '1rem'
    },
    h3Container: {
        color: 'var(--clr-primary-dark)',
        borderTop: '.2rem solid grey',
        height: '15%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    totalBill_h2: {
        margin: '0 2rem'
    },
    listContainer: {
        overflowY: 'scroll',
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        '&::-webkit-scrollbar': {
            width: '0rem'
        }
    },
    emptyCart_h2: {
        textAlign: 'center',
        margin: "auto auto"
    }
})

const YourCart = () => {
    const classes = useStyles()
    const { cartItems, total, amount } = useSelector(state => state.cart)
    console.log(cartItems)

    return (
        <div className={classes.container}>
            <div style={{ height: '80%' }}>
                <h2 className={classes.h2}>Your Cart</h2>
                <div className={classes.listContainer}>
                    {cartItems.map(item => <Item key={item.id} {...item} />)}
                    {amount === 0 && <h2 className={classes.emptyCart_h2}><img src={cartImg} alt="shopping cart"/> IS EMPTY !</h2>}
                </div>

            </div>
            <div className={classes.h3Container}>
                <h3 className={classes.totalBill_h2}>Total</h3>
                <h3 className={classes.totalBill_h2}>${total.toFixed(2)}</h3>
            </div>
        </div>
    )
}

export default YourCart