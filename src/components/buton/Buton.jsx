import './buton.css'

import React from 'react'

const Buton = ({onClick}) => {
  return (
    <button className='buton' onClick={onClick}>Giriş Yap</button>
  )
}

export default Buton