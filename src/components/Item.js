import React from 'react'
import { makeStyles } from '@mui/styles'
import { IoMdAdd } from 'react-icons/io'
import { GrFormSubtract } from 'react-icons/gr'
import { useDispatch } from 'react-redux'
import { removeItem, increase, decrease } from '../features/cart/cartSlice'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        backgroundColor: 'var(--clr-primary-light)',
        height: '5rem',
        borderBottom: '.2rem solid grey',
        '&:hover': {
            backgroundColor: '#617d98'
        }
    },
    innerContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    imgSpan: {
        display: 'inline-block',
        width: '5rem',
        padding: '.4rem'
    },
    img: {
        width: '100%',
        height: '100%'
    },
    titlePriceContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: '1rem'
    },
    title: {
        fontSize: '1rem',
        fontWeight: 600
    },
    price: {
        fontSize: '.8rem',
        fontWeight: 500,
        letterSpacing: '.08rem'
    },
    removeBtn: {
        backgroundColor: 'transparent',
        border: 'none',
        marginTop: '.2rem',
        letterSpacing: '.05rem',
        cursor: 'pointer',
        padding: '.3rem',
        transitionDuration: '.2s',
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,.2)',
        }
    },
    inc_dec_amnt: {
        width: '5rem',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    amountSpan: {
        margin: '.4rem 0rem',
        backgroundColor: '#c1c4c6',
        width: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '.05rem solid'
    },
    inc_dec_btn: {
        cursor: 'pointer',
        transitionDuration: '.2s',
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none',
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,.2)'
        }
    }
})

const Item = (props) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    return (
        <div className={classes.container}>
            <div className={classes.innerContainer}>
                <span className={classes.imgSpan}>
                    <img src={props.img} className={classes.img} alt={props.title} />
                </span>
                <div className={classes.titlePriceContainer}>
                    <span className={classes.title}>{props.title}</span>
                    <span className={classes.price}>${props.price}</span>
                    <button className={classes.removeBtn} onClick={() => { dispatch(removeItem(props.id)) }}>Remove</button>
                </div>
            </div>
            <div className={classes.inc_dec_amnt}>

                <button className={classes.inc_dec_btn} onClick={() => { dispatch(increase(props.id)) }}><IoMdAdd /></button>
                <span className={classes.amountSpan}>{props.amount}</span>
                <button className={classes.inc_dec_btn} onClick={() => { dispatch(decrease(props.id)) }} disabled={props.amount === 1 ? true : false}><GrFormSubtract /></button>
            </div>
        </div>
    )
}

export default Item