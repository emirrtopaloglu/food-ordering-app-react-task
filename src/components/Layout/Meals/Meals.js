import React from 'react'
import './Meals.css'

function Meals(props) {
  return (
    <div className="meals">
        {props.children}
    </div>
  )
}

export default Meals