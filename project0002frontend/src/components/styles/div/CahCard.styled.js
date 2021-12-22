import { FaEdit, FaPlus, FaTrash, FaTrashRestore } from 'react-icons/fa';
import styled from 'styled-components';

const multi = 3;
const height = 88;
const width = 63;

const cardType = {
    black_card: {
        backgroundColor: "#17141D",
        color: "#fff",
        border: "3px solid #fff",
    },
    white_card: {
        backgroundColor: "#fff",
        color: "#17141D",
        border: "3px solid #000",
    },
    deleted_black_card: {
        backgroundColor: "#17141D",
        color: "#fff",
        border: "5px solid #DC143C",
    },
    deleted_white_card: {
        backgroundColor: "#fff",
        color: "#17141D",
        border: "5px solid #DC143C",
    },
    edited_black_card: {
        backgroundColor: "#17141D",
        color: "#fff",
        border: "5px solid #006400",
    },
    edited_white_card: {
        backgroundColor: "#fff",
        color: "#17141D",
        border: "5px solid #006400",
    },
    undefined_card: {
        backgroundColor: "#17141D",
        color: "#fff",
        border: "5px solid #A9A9A9",
    },
    invalid_black_card: {
        backgroundColor: "#17141D",
        color: "#fff",
        border: "5px solid #FF4500"
    },
    invalid_white_card: {
        backgroundColor: "#fff",
        color: "#17141D",
        border: "5px solid #FF4500",
    }
}


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
    visibility: hidden;
`
export const StyledCahCardBody = styled.div`
    width: 100%;
    min-height: ${(multi - 1) * height}px;
    background-image:url(${({ stamp }) => stamp});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 0 50%;

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
export const StyledCahCard = styled.div`
    &:hover ${StyledCahCardHeader} {
        visibility: visible;
    }
    min-width:${multi * width}px;
    min-height:${multi * height}px;
    max-width:${multi * width}px;
    max-height:${multi * height}px;
    background-color: ${({ type }) => cardType[type].backgroundColor};
    color: ${({ type }) => cardType[type].color};
    border: ${({ border, type }) => !border && ["black_card", "white_card"].includes(type) ? null : cardType[type].border};
    border-radius:${multi * width / 10}px;
    float: left;
`