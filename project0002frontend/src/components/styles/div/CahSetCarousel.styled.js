import styled from 'styled-components'

export const StyledSetCarouselBG = styled.div`
    background-color:#100e17;
    border: 3px  solid #fff;
    border-radius: 25px;
    position:relative;
    padding: 20px 0;
  `
export const StyledSetCarousel = styled.div`
    position: relative;
    margin-top : ${({ reversed }) => reversed?"0":"1"}%;
    margin-left: 5%;
    margin-bottom: ${({ reversed }) => reversed?"1":"0"}%;;
    height: 100%;
    width: 90%;
    display: flex;
    flex-direction: row-reverse;
    &${({ reversed }) => reversed}{
        flex-direction: row;
        }
`
export const StyledSetCarouselCard = styled.div`
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
export const StyledSetCarouselReversedCard = styled.div`
    &:last-child{
        display: flex;
    box-shadow: -1rem 0 3rem #000;
    border-radius:20px;
    transition: 0.4s ease-out;
    position: relative;
    margin-right: auto;
    }
    &:not(:last-child) {
        display: flex;
    box-shadow: -1rem 0 3rem #000;
    border-radius:20px;
    position: relative;
    transition: 0.4s ease-out;
    position: right 20px;
        margin-left:  -150px;
        }

    &:hover&:not(:last-child){
        transition: 0.4s ease-in;
    }
    &:hover~&:not(:last-child){
        position: relative;
        transition: 0.4s ease-out;
        transform: translate(-140px,20px)
    }
}
`

