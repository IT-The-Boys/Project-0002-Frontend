import styled from 'styled-components'

export const StyledCarouselBG = styled.div`
    background-color:#100e17;
    border: 3px  solid #fff;
    height:50%;
    flex-direction: row;
    border-radius: 25px;
    position:relative;
    padding: 20px;
  `
export const StyledCarouselControllerContainer = styled.div`
    width:20%;
    float:left;
`

export const StyledCarouselCardContainer = styled.div`
    background-color:#100e17;
    &::-webkit-scrollbar{
        display: none;
    }
    position: relative;
    /* margin-top : ${({ reversed }) => reversed ? "0" : "1"}%; */
    /* margin-bottom: ${({ reversed }) => reversed ? "1" : "0"}%; */
    height: 100%;
    width: 70%;
    float:right;
    display: flex;
    flex-direction: row-reverse;
    &${({ reversed }) => reversed}{
        flex-direction: row;
        }
    /* overflow: auto; */
`

export const StyledCarouselCard = styled.div`
background-color:#100e17;
    display: flex;
    box-shadow: -1rem 0 3rem #000;
    border-radius:20px;
    transition: 0.4s ease-out;
    position: relative;
    &:not(:first-child) {
        margin-left: -${({ count }) => count}px;
        }
    &:hover{
        transform: translateY(-20px);
        transition: 0.4s ease-in;
    }
    &:hover~&{
        position: relative;
        transform: translateX(${({ count }) => count}px);
        transition: 0.4s ease-out;
    }
    
`
export const StyledCarouselReversedCard = styled.div`
    /* display:flex; */
    display: ${({ visible }) => visible ? "flex" : "none"};
    box-shadow: -1rem 0 3rem #000;
    border-radius:20px;
    position: relative;
    transition: 0.4s ease-out;
    margin-left:  -150px;
    height: 80%;
    &:hover&{
        transition: 0.4s ease-in;
    }
    &:hover~&{
        position: relative;
        transition: 0.4s ease-out;
        transform: translate(-140px,20px)
    }
}
`
export const StyledCarouselController = styled.div`
`
