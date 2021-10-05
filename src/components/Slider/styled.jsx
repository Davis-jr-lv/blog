import styled from '@emotion/styled'

export const Wrapper = styled.div`

  width:100%;
  overflow:hidden;
  justify-contenr:center;
  padding:0px 38px;
  .carousel{
    position:relative;
    ul{
      display:flex;
      flex-wrap:no-wrap;
      li{
        margin:0px 5px 0px 5px;
      }
    }
    .carousel__next-button{
      position:absolute;
      top: 45%;
      right:-5px;
      height: 50px;
      width: 50px;
      background:white;
      border-radius:50%;
      padding:10px;
    }
    .carousel__back-button{
      position:absolute;
      top: 45%;
      left:-10px;
      height: 50px;
      width: 50px;
      background:white;
      border-radius:50%;
      padding:10px;
    }
  }
`