import styled from 'styled-components'

export const Wrapper = styled.div`

  .nav{
    &:after{
      content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right:0;
        height: 2px;
        transform: scaleX(0);
        background: #333;
        transition: 0.7s transform cubic-bezier(0.06, 0.9, 0.28, 1);
    }
    &:hover::after{
      transform: scaleX(1)
    }
  }
`
