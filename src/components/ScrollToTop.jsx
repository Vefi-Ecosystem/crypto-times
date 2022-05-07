import React from 'react'
import {useState, useEffect} from 'react'
import styled from 'styled-components'
import {FaArrowUp} from 'react-icons/fa'
 
const Container = styled.div`

`

const Button = styled.button`
position: fixed;
bottom: 50px;
right: 20px;
outline: none;
border: none;
border-radius: 50%;
height: 40px;
width: 40px;
background: #F8B133;
cursor: pointer;
transition: all ease-in 0.5s;

.icon{
    height: 30px;
    width: 20px;
    color: #ffff;
}


@media screen and (max-width:900px){
    bottom: 80px;
}
`

function ScrollToTop() {

const [backToTop, setBackToTop] = useState(false)

// const ToggleVisibility = () =>{
//     if(window.pageYOffset > 300){
//         setIsVisible(true);
//     }else {
//         setIsVisible(false);
//     }
// }

 const scrollToTop = () =>{
     window.scrollTo({
         top: 0,
         behavior: 'smooth',
     });
 }

 useEffect(() =>{
     window.addEventListener('scroll', () => {
         if(window.scrollY > 1000 ){
             setBackToTop(true)
         }else{
            setBackToTop(false)
         }
     });
    
 }, []);

  return (
   
        <Container>
        
    {
        backToTop && (
                <Button type='button' onClick={scrollToTop}>
            <FaArrowUp aria-hidden='true' className='icon'/>
        </Button> 
        )
    }
    </Container>
    
   
  )
}

export default ScrollToTop