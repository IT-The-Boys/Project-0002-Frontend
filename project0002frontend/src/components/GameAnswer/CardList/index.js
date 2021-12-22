import { fireEvent } from '@testing-library/react'
import React, { Component } from 'react'
import WhiteCard from '../WhiteCard/WhiteCard'

export default class CardList extends Component {
    render() {
    
        const {answer,users,key,id} = this.props
        // const{user} = this.props.answers.user
    

        return (
            <div className="card-main">
               
                {/* {console.log(answer.cardList)} */}
               

                {
                    answer.cardList.map( (card, index) => 
                        <WhiteCard key={index} sentence={card.sentence} users={users}/>
                    )
                }
                
            </div>
        )
    }
}
