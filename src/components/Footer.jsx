import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import LogoPic from '../assets/logo.png'


const Container  = styled.div`
    background: #1D1D1D;




`
const Foot = styled.div`
    padding: 40px 30px;

    display: flex;
    /* align-items: center; */
    justify-content: space-between;


    @media screen and (max-width:900px){
        padding: 30px 20px;
        flex-direction: column;
    }



`
const Div1  = styled.div` 
display: flex;
justify-content: flex-start;
align-items: flex-start;
`
const LogoCon = styled.div`
display: flex;
align-items: center;
    
`
const Logo = styled.img`
height: 40px;
    
`


const Div2  = styled.div`
padding-top: 25px;
display: flex;
flex-direction: column;
justify-content: space-between;
color: #c4c4c4;

`
const Address = styled.address`
font-style: normal;
font-size: 20px;
margin-bottom: 20px;

@media screen and (max-width:900px){
    display: none;
}
`
const DetCon  = styled.div` 
font-size: 20px;



`
const Number  = styled.div`

font-family: SF Pro Display;
margin-bottom: 10px;

@media screen and (max-width:900px){
    font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 12px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.015em;
}`
const Mail  = styled.div` 
font-family: SF Pro Display;

@media screen and (max-width:900px){
    font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 12px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.015em;
}

`
const Div3  = styled.div`
padding-top: 25px;
color: #c4c4c4;


@media screen and (max-width:900px){
    display: none;
}
`
const FootLinks  = styled.div` 
display: flex;
flex-direction: column;
justify-content: flex-start;
`
const FootLink  = styled(Link)`
text-decoration: none;
font-size: 20px;
line-height: 20px;
padding:  5px 0;
color: #FFFF;
`

const Div4  = styled.div` 
padding-top: 25px;

@media screen and (max-width:900px){
    display: none;
}


`
const Copy  = styled.div` 
text-align: center;
padding: 20px;
color: #FFFF;
font-family: SF Pro Display;

`

function Footer() {
  return (
    <Container>
     <Foot>
     <Div1>
        <LogoCon>
            <Logo src={LogoPic}/>
           
        </LogoCon>
        </Div1>
        <Div2>
            <Address>
            Road 3,Lekki Phase 1, <br/>Lagos Nigeria
            </Address>
            <DetCon>
                <Number>+234 (0) 907 000 0000</Number>
                <Mail>pr@mycryptotimes.tv</Mail>
            </DetCon>
        </Div2>
        <Div3>
            <FootLinks>
                <FootLink  to='#'>About</FootLink>
                <FootLink  to='#'>Growers</FootLink>
                <FootLink  to='#'>Merchants</FootLink>
                <FootLink  to='#'>Partners</FootLink>
                <FootLink  to='#'>Contact</FootLink>
            </FootLinks>
        </Div3>
        <Div4>
            <FootLinks>
                <FootLink to='#'>Facebook</FootLink>
                <FootLink  to='#'>Twitter</FootLink>
                <FootLink  to='#'>LinkedIn</FootLink>
                <FootLink  to='#'>Instagram</FootLink>
            </FootLinks>
            </Div4>
     </Foot>

     <Copy>
     © 2022 Cryptotimes TV. All rights reserved.
     </Copy>
    </Container>
  )
}

export default Footer