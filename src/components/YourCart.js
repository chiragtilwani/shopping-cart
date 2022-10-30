import React from 'react'
import { makeStyles } from '@mui/styles'
import { useSelector } from 'react-redux'
import Item from './Item'

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
        marginTop:'3rem',
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
        maxHeight: '90%',
        '&::-webkit-scrollbar':{
            width:'0rem'
        }
    }
})

const YourCart = () => {
    const classes = useStyles()
    const { cartItems, total } = useSelector(state => state.cart)
    console.log(cartItems)
    return (
        <div className={classes.container}>
            <div style={{ height: '80%' }}>
                <h2 className={classes.h2}>Your Cart</h2>
                <div className={classes.listContainer}>
                    {cartItems.map(item => <Item key={item.id} {...item} />)}
                </div>

            </div>
            <div className={classes.h3Container}>
                <h3 className={classes.totalBill_h2}>Total</h3>
                <h3 className={classes.totalBill_h2}>${total}</h3>
            </div>
        </div>
    )
}

export default YourCart