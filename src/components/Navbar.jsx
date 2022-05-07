import React from 'react'
import styled from 'styled-components'
import LogoPic from '../assets/logo.png'

const Container = styled.div`
padding: 20px 30px;
margin: 0;
background: #1D1D1D;


    @media screen and (max-width: 900px){
        padding: 15px;
        position: sticky;
        top: 0;
        z-index: 999;
    }
`
const LogoCon = styled.div`
display: flex;
align-items: center;
    
`
const Logo = styled.img`
    height: 40px;

    @media screen and (max-width: 900px){
        height: 30px;
    }
`



function Navbar() {
  return (
    <Container>
        <LogoCon>
            <Logo src={LogoPic}/>

        </LogoCon>
    </Container>
  )
}

export default Navbar