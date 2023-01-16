import React from 'react'
import classes from './MealItem.module.css'

function MealItem(props) {
  return (
    <>
      <div className={classes.meal}>{props.name}</div>
      <h3 className={classes.meal}>{props.name}</h3>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{props.price}</div>
    </>
  )
}

export default MealItem
