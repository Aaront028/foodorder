import React from 'react'
import classes from './Header.module.css'
import heroImage from '../../assets/hero-image.jpg'

function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={heroImage} alt="A table full of delicious food!" />
      </div>
    </React.Fragment>
  )
}

export default Header
