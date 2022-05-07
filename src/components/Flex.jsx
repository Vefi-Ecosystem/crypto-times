import React from 'react'
import styled from 'styled-components'

const Container = styled.div` 
position: relative;
height: 19px;
width: 100%;
/* z-index: -1; */

@media screen and (max-width:800px){
        height: 18px;
     
}


`
const FlexCon = styled.div`
/* position: relative;
top: -200px;

height: 250px; */



    position: absolute;
    /* top: 50px; */
    bottom: -118px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
z-index: 900;

@media screen and (max-width:800px){
       bottom: -108px;
        width: 100%;
}


svg {
    position: relative;
    display: block;
    width: calc(146% + 1.3px);
    height: 118px;
    transform: rotateY(180deg);


    @media screen and (max-width:900px){
        height: 108px;
        width: calc(146% + 1.5px);
}
    @media screen and (max-width:800px){
        height: 98px;
        width: 160%;
        overflow: hidden;

}
}

 .shape-fill {
    fill: #1D1D1D;
}

/** For mobile devices **/
@media (max-width: 767px) {
    .custom-shape-divider-bottom-1647072783 svg {
        width: calc(195% + 1.3px);
        height: 95px;
    }
}

/* width: 100%; */



`

function Flex() {
  return (
    <Container>
        <FlexCon>
        {/* <svg width="100%" height="449" viewBox="0 0 1360 449"  xmlns="http://www.w3.org/2000/svg">
<path  clipRule="evenodd" d="M1360 0H0V233L56.6667 259.98C113.333 286.96 226.667 340.921 340 349.914C402.413 354.867 451.061 347.182 501.104 339.276C541.933 332.827 583.691 326.23 634.611 326.23C747.945 326.23 906.667 358.908 1020 385.888C1133.33 412.868 1246.67 430.855 1303.33 439.848L1360 448.842V0Z" fill="#ffffff"/>
</svg> */}
<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>

        </FlexCon>
    </Container>
  )
}

export default Flex