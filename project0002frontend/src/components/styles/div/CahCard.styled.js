import { FaEdit, FaPlus, FaTrash, FaTrashRestore } from 'react-icons/fa';
import styled from 'styled-components';
import deleteStamp from 'assets/images/deleteStamp.png'

const multi = 3;
const height = 88;
const width = 63;
const switchType = (value, palette) => {
    switch (value) {
        case "black":
            return palette[0];
        case "white":
            return palette[1];
        default: return palette[2];
    }
}

export const StyledCahCard = styled.div`
    min-width:${multi * width}px;
    min-height:${multi * height}px;
    max-width:${multi * width}px;
    max-height:${multi * height}px;
    background-color: ${({ type }) => switchType(type, ["#17141d", "white", "green"])};
    color: ${({ type }) => switchType(type, ["white", "black", "red"])};
    border: ${({border})=> border?"3px solid black":"none"};
    border-radius:${multi * width / 10}px;
    float: left;
`

export const StyledControllerCard = styled.button`
    min-width:${multi * width}px;
    min-height:${multi * height}px;
    max-width:${multi * width}px;
    max-height:${multi * height}px;
    background-color: yellow;
    cursor: pointer;
    color: green;
    border-radius:${multi * width / 10}px;
    float: left;
    border: 3px solid black;
`
export const StyledCahCardText = styled.div`
    padding:10%;
    font-weight: bolder;
    font-size: 16px;
    word-wrap: break-word;
    color: ${({ type }) => switchType(type, ["white", "black", "red"])};
    font-family: 'Helvetica Neue LT Pro', Arial;
    `
export const StyledCahCardSubText = styled.div`
    font-weight: bolder;
    font-size: 16px;
    padding: 10%;
    word-wrap: break-word;
    color: white;
    font-family: 'Helvetica Neue LT Pro', Arial;
    text-align:right;
`
export const StyledCahCardHeader = styled.div`
    width: 100%;
    height: 10%;
    padding-top:2%;
    padding-right:5%;
`
export const StyledCahCardBody = styled.div`
    width: 100%;
    height: 80%;
`
export const StyledCahCardFooter = styled.div`
    width: 100%;
    height: 10%;
`
export const StyledCahCardEditIcon = styled(FaEdit)`
    cursor: pointer;
    float:right;
    &:active {
            box-shadow:7px 6px 28px 1px rgba(0, 0, 0, 0.24);
            transform: translateY(4px);
    }
`
export const StyledCahCardDeleteIcon = styled(FaTrash)`
    cursor: pointer;
    color:red;
    float:right;
    &:active {
            box-shadow:7px 6px 28px 1px rgba(0, 0, 0, 0.24);
            transform: translateY(4px);
    }
`
export const StyledCahCardRestoreIcon = styled(FaTrashRestore)`
    cursor: pointer;
    color:red;
    float:right;
    &:active {
            box-shadow:7px 6px 28px 1px rgba(0, 0, 0, 0.24);
            transform: translateY(4px);
    }
`

export const StyledCahCardAddIcon = styled(FaPlus)`
    color:red;
    width: 20%;
    height: 20%;
`
export const StyledCahCardStamp = styled.div`
position:absolute;
background-image:url(${({ stamp }) => stamp});
background-size: contain;
background-repeat: no-repeat;
background-position: 0 50%;
margin-top:1%;
width:${multi * width-10}px;
height: ${multi * height- 40}px;
`