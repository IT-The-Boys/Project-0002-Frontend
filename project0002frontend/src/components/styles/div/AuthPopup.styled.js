import { FaWindowClose } from 'react-icons/fa';
import styled from 'styled-components';


export const StyledAuthPopupBG = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(51, 51, 51, 0.3);
  backdrop-filter: blur(1px);

  /*
    opacity: 0;
  transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 200ms;*/
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledAuthPopup = styled.div`

  position: relative;
  box-sizing: border-box;
  min-height: 200px;
  min-width: 200px;
  max-height: 80%;
  max-width: 80%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: #100e17;
  color: white;
  border-radius: 10px;
  border: 3px solid white; 
`;

export const StyledAuthPopupHeader = styled.div`
    padding:3px;
    min-width: 400px;
    min-height: 36px;
    display:flex;
    flex-direction:row;
`

export const StyledAuthPopupContent = styled.div`
 padding:3px;
 width: 100%;
 min-height: 164px;
`
export const StyledAuthPopupTab = styled.div`
    cursor: pointer;
    color: white;
    line-height:36px;
    text-align:center;
    min-width: 184px;
    min-height: 36px;
    &:hover{
        background-color:white;
        opacity:1;
        color: black;
    }
    
`
export const StyledAuthPopupTitle= styled.span`
    padding-left: 5px;
    padding-right: 20px;
    text-decoration: ${({active})=> active?"underline":"none"}; 
`;

export const StyledAuthPopupCloseBtn = styled(FaWindowClose)`
    padding:5px;
    cursor: pointer;
    float:right;
    margin-left:auto;
    min-width:36px;
    min-height: 36px;
`
