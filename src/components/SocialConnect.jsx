import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {FaTwitter} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'
import { RiFacebookBoxFill} from 'react-icons/ri'
import {AiFillInstagram} from 'react-icons/ai'


const Container = styled.div` 
padding: 70px 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
`
const Main = styled.div`
font-family: 'Klavika';
color: #F8B133;
font-size: 25px;
line-height: 29px;
display: flex;
align-items: center;
letter-spacing: -0.015em;
font-weight: 500;

@media screen and (max-width:900px){
  font-size: 16px;
line-height: 14px;
display: flex;
align-items: center;
letter-spacing: -0.015em;

}
`
const Sub = styled.div`
margin-top: 15px;
font-family: Gilroy-Bold;
font-size: 50px;
line-height: 59px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.015em;
color: #1D1D1D;
font-weight: 500;
padding: 0px 30px;



@media screen and (max-width:900px){
  font-size: 28px;
line-height: 33px;
letter-spacing: -0.015em;

}
 `
const Catchy = styled.div`
    font-family: SF Pro Display;
margin-top: 30px;
font-style: normal;
font-weight: normal;
font-size: 28px;
line-height: 36px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.015em;
color: #1D1D1B;



br{
  @media screen and (max-width:900px){
   display: none;
  
}
}

@media screen and (max-width:900px){
    margin-top: 10px;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.015em;
}
`

const SocialCon = styled.div` 
padding: 30px 0;
display: flex;
align-items: center;
justify-content: space-between;

@media screen and (max-width: 900px){
align-items: center;
}

`
const SocialLinkCon = styled.div`
display: flex;
align-items: center;
`
const SocialL1 = styled(Link)` 
display: flex;
align-items: center;
font-family: Klavika;
font-size: 30px;
color: #000;
text-decoration: none;
margin-right: 25px;

@media screen and (max-width:900px){
    /* margin: 4px 0; */

}
`
const SocialL2 = styled(Link)` 
display: flex;
align-items: center;
font-family: Billabong;
font-size: 30px;
color: #000;
text-decoration: none;
margin-right: 25px;
justify-content: center;


@media screen and (max-width:900px){
    /* margin: 4px 0; */

}

`
const SocialL3 = styled(Link)`
display: flex;
align-items: center;
font-family: Pico Black;
font-size: 30px;
color: #000;
text-decoration: none;
margin-right: 25px;


.icon{
  font-size: 28px;
  margin-left:2px;
}

@media screen and (max-width:900px){
    /* margin: 4px 0; */

}
`
const SocialL4 = styled(Link)` 
display: flex;
align-items: center;
font-family: Kenyan Coffee;
font-size: 30px;
color: #000;
text-decoration: none;
justify-content: center;

.icon{
  font-size: 30px;
  margin-left:2px;
}


@media screen and (max-width:900px){
    /* margin: 4px 0; */




}
`
const Tet = styled.p`
margin: 0;

@media screen and (max-width: 768px){
  display: none;
}
`

function SocialConnect() {
  return (
    <Container>
        <Main>GET IN TOUCH WITH US</Main>
        <Sub>Hey! Follow us on Social Media</Sub>
        <Catchy>Stay updated with content around the world of <br/> Blockchain economy by following us on social media </Catchy>
        <SocialCon>
          <SocialLinkCon><SocialL1 to='#'><RiFacebookBoxFill/><Tet>Facebook</Tet></SocialL1></SocialLinkCon>
          <SocialLinkCon> <SocialL2 to='#'><AiFillInstagram/><Tet>Instagram</Tet></SocialL2></SocialLinkCon>
          <SocialLinkCon><SocialL3 to='#'><Tet>Twitter</Tet> <FaTwitter className='icon'/ ></SocialL3></SocialLinkCon>
          <SocialLinkCon><SocialL4 to='#'><BsYoutube className='icon' /><Tet>Youtube</Tet> </SocialL4></SocialLinkCon>
           
        </SocialCon>
    </Container>
  )
}

export default SocialConnect