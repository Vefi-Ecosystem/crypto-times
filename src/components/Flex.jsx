import React from 'react'
import styled from 'styled-components'

const Container = styled.div` `
const FlexCon = styled.div`
position: relative;
top: -200px;

height: 250px;

@media screen and (max-width:900px){
top: -200px;
height: 100px;
}

`

function Flex() {
  return (
    <Container>
        <FlexCon>
        <svg width="100%" height="449" viewBox="0 0 1360 449"  xmlns="http://www.w3.org/2000/svg">
<path  clipRule="evenodd" d="M1360 0H0V233L56.6667 259.98C113.333 286.96 226.667 340.921 340 349.914C402.413 354.867 451.061 347.182 501.104 339.276C541.933 332.827 583.691 326.23 634.611 326.23C747.945 326.23 906.667 358.908 1020 385.888C1133.33 412.868 1246.67 430.855 1303.33 439.848L1360 448.842V0Z" fill="#1D1D1B"/>
</svg>
        </FlexCon>
    </Container>
  )
}

export default Flex