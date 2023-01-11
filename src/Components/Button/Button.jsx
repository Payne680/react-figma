import React from 'react'
import ButtonStyle from './Button.module.css'

export default function Button({children}) {
  return (
    <div>
      <button className={ButtonStyle.button}>{children}</button>
    </div>
  )
}