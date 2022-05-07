import styled from 'styled-components'

export const Background = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;


  .bg {
    position: absolute;
    z-index: -1;
    opacity: 30%;

    

    &:nth-child(1) {
        top: -300px;
        left: 280px;
        img{
            width: 1500px;
        }
  

        @media screen and (max-width:800px){
       top: -120px;
       left: -90px;

       img{
            width: 700px;
        }
}
    }
  }

`