import mealsImage from '../../assets/meals_img.jpg'
import { HeaderCartButton } from './HeaderCartButton'
import classes from './Header.module.css'

export const Header = ({onShowCart}) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Beers</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} />
      </div>
    </>
  )
}
