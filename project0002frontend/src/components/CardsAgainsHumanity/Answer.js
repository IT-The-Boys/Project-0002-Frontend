import WhiteCard from 'components/GameAnswer/WhiteCard'
import React, { useState } from 'react'
import styled from 'styled-components'
// import "./Answer.css"

const AnswerBlock = styled.div`
width: ${props=>(props.cardNumber*23 +20)}%;
height: 42vh;
margin-top:10px;
background-color:#fad1d6;
overflow-y:scroll;
overflow-x:hidden;
position:relative;
padding:10px 15px;
padding-right:5px;
border-top-right-radius:5px;
border-bottom-left-radius:5px;
transition:all 0.5s;

&:after,&:before{
    content:" ";
    width:${props=>(props.cardNumber*5 +20)}%;
    height:30%;
    position:absolute;
    border :0px solid #fff;
    transition:all 0.5s;
    }

    &:after{
        top:-1px;
        left:-1px;
        border-top:5px solid black;
        border-left:5px solid black;
      }
      &:before{
        bottom:-1px;
        right:-1px;
        border-bottom:5px solid black;
        border-right:5px solid black;
      }


  &:hover{
    border-top-right-radius:0px;
    border-bottom-left-radius:0px;
    // background:rgba(0,0,0,.5);
    // color:white;
    &:before,&:after{
      
        width:100%;
        height:99%;
        // width:100%;
        // height:100%;
    //   border-color:red;
    }

    cursor:pointer;
        position:relative;
        padding:10px 20px;
        background:white;
        font-size:24px;
        border-top-right-radius:10px;
        border-bottom-left-radius:10px;
        transition:all 0.5s;

}
`;

const Answer = ({answer}) => {
    const [select, setSelect] = useState(false);
    const size=answer.cardList.length;
    const clickHandler=()=>{
        if (select) {
            console.log(answer.user)
            alert(answer.user)
            // alert(answer)
            setSelect(false);
    
        }
        else {
            setSelect(true);
        }
    

    }
    return (
        
        <AnswerBlock onClick={clickHandler} cardNumber={size}>
            <div class="clear"></div>
            {answer.cardList.map( (card, index) => 
                        <WhiteCard key={index} sentence={card.sentence}/>
                    )
            }
        </AnswerBlock>
    )
}

export default Answer
