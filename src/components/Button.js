import React from 'react'

const Button = ({text, classText, onClick}) => {
  return (
    <div>
        <button className={classText} onClick={onClick} >{text}</button>
    </div>
  )
}

export default Button