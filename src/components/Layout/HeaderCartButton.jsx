import { useContext, useEffect, useState } from 'react'
import { CartIcon } from '../Cart/CartIcon'
import { CartContext } from '../../store/cart-context.js'

import classes from './HeaderCartButton.module.css'

export const HeaderCartButton = ({ onClick }) => {
  const [btnIsHighlited, setBtnIsHighlited] = useState()

  const cartCtx = useContext(CartContext)
  
  const { items } = cartCtx

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  const btnClasses = `${classes.button} ${btnIsHighlited ? classes.bump : ''}`

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBtnIsHighlited(true)

    const timer = setTimeout(() => {
      setBtnIsHighlited(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button
      className={btnClasses}
      onClick={onClick}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>You Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}
