import { useContext } from 'react'

import classes from './MealItem.module.css'
import { MealItemForm } from './MealItemForm'
import { CartContext } from './../../../store/cart-context';

export const MealItem = ({ name, description, price, id }) => {
  const cartCtx = useContext(CartContext)
  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{`$${price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  )
}
