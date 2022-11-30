import { useContext } from 'react'
import { CartIcon } from '../Cart/CartIcon'
import { CartContext } from '../../store/cart-context.js'

import classes from './HeaderCartButton.module.css'

export const HeaderCartButton = ({ onClick }) => {
  const ctx = useContext(CartContext)

  const numberOfCartItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  return (
    <button
      className={classes.button}
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
