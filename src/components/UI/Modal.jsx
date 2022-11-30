import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = ({ onHideCart }) => {
  return (
    <div
      className={classes.backdrop}
      onClick={onHideCart}
    ></div>
  )
}
const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  )
}

const portalElement = document.getElementById('overlays')

export const Modal = ({ children, onHideCart }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={onHideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  )
}
