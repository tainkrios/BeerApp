import { useContext, useState } from 'react'

import { CartItem } from './CartItem'
import { Checkout } from './Checkout'
import { Modal } from '../UI/Modal'
import classes from './Cart.module.css'

import { CartContext } from './../../store/cart-context'

export const Cart = ({ onHideCart }) => {
  const [isCheckout, setIsCheckout] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [didSubmit, setDidSubmit] = useState(false)
  const cartCtx = useContext(CartContext)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  }

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 })
  }

  const orderHandler = () => {
    setIsCheckout(true)
  }

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true)
    const response = await fetch(
      'https://react-http-c9f0c-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderItems: cartCtx.items,
        }),
      }
    )

    if (!response.ok) {
      throw new Error('Something went wrong!')
    }

    setIsSubmitting(false)
    setDidSubmit(true)
    cartCtx.clearCart()
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  )

  const modalActions = (
    <div className={classes.actions}>
      <button
        className={classes['button--alt']}
        onClick={onHideCart}
      >
        Close
      </button>
      {hasItems && (
        <button
          className={classes.button}
          onClick={orderHandler}
        >
          Order
        </button>
      )}
    </div>
  )

  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout
          onSubmit={submitOrderHandler}
          onCancel={onHideCart}
        />
      )}
      {!isCheckout && modalActions}
    </>
  )

  const isSubmittingModalContent = <p>Sending order data...</p>

  const didSubmitModalContent = <p>Successfully sent the order!</p>

  return <Modal onHideCart={onHideCart}>
    {!isSubmitting && !didSubmit && cartModalContent}
    {isSubmitting && isSubmittingModalContent}
    {!isSubmitting && didSubmit && didSubmitModalContent}
  </Modal>
}
