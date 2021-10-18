import React from 'react'

const BaseModal = (props) => {
    return (
        <div style={{backgroundColor:"black", height:props.height, width:props.width }}>
            
        </div>
    )
}

BaseModal.defaultProps = {
    width:"100px",
    height:"100px",
}

export default BaseModal
