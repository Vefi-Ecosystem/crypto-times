import React from 'react'
import Bit from '../assets/bitcoin.png'
import { Background } from './Background'



function CtaWrapper({children}) {
  return (
    <Background>
      <div className='bg'>
        <img src={Bit} alt="" />
      </div>
      {children}
    </Background>
  )
}

export default CtaWrapper