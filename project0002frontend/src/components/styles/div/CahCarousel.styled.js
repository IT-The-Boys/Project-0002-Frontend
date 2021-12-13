import styled from 'styled-components'

export const StyledCarouselBG = styled.div`
    background-color:#100e17;
    border: 3px  solid #fff;
    border-radius: 25px;
    position:relative;
    padding: 20px 0;
  `
export const StyledCarousel = styled.div`
    position: relative;
    margin-top : 1%;
    margin-left: 1%;
    height: 100%;
    width: 90%;
    display: flex;
    flex-direction: row-reverse;
    &${({ reversed }) => reversed}{
        flex-direction: row;
        }
`
export const StyledCarouselCard = styled.div`
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
    display: flex;
    box-shadow: -1rem 0 3rem #000;
    border-radius:20px;
    transition: 0.4s ease-out;
    position: relative;
    margin-bottom: 20px;

&:not(:last-child) {
    /* transform: translate(150px, 20px); */
    margin-top: 20px;
    transition: 0.4s ease-out;
    margin-left: -150px;
    }
&:hover{
    transform: translate(150px,0px);
    transition: 0.4s ease-in;
    /* position: relative;
    transform: translateX(-190px);
    transition: 0.4s ease-out; */
}

`

