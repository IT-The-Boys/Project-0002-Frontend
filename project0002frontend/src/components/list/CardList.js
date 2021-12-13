import CahCard from 'components/card/CahCard'
import ControllerCard from 'components/card/ControllerCard'
import { StyledCarousel, StyledCarouselBG, StyledCarouselCard } from 'components/styles/div/CahCarousel.styled'
import { StyledGrid, StyledGridCard } from 'components/styles/div/CahGrid.styled'
import React, { useState } from 'react'
import { StyledCarouselReversedCard } from '../styles/div/CahCarousel.styled'

const CardList = ({ cardList, editMode, view }) => {
    const count = 100;
    const [reversed, setReversed] = useState(false)
    return (
        <>

            {
                {
                    0:
                        <StyledCarouselBG>
                            <StyledCarousel reversed={reversed}>
                                {/* {editMode && cardList.length>0 && <button> Save </button>} */}
                                {cardList.map((card, index) => <>
                                    {
                                        reversed ?
                                            <StyledCarouselReversedCard count={count} reversed={reversed}>
                                                <CahCard card={card} key={index} />
                                            </StyledCarouselReversedCard> :
                                            <StyledCarouselCard count={count} reversed={reversed}>
                                                <CahCard card={card} key={index} />
                                            </StyledCarouselCard>
                                    }
                                </>
                                )
                                }

                                {editMode ? reversed ?
                                    <StyledCarouselReversedCard>
                                        <ControllerCard disabled={!editMode} />
                                        <button onClick={() => setReversed(!reversed)}>swt</button>
                                    </StyledCarouselReversedCard>
                                    : <StyledCarouselCard count={count} reversed={reversed}>
                                        <ControllerCard disabled={!editMode} />
                                        <button onClick={() => setReversed(!reversed)}>swt</button>
                                    </StyledCarouselCard>
                                    : null
                                }
                            </StyledCarousel>
                        </StyledCarouselBG>,
                    1:
                        <StyledGrid>
                            {editMode ?
                                <StyledGridCard>
                                    <ControllerCard disabled={!editMode} />
                                </StyledGridCard>
                                : null
                            }
                            {cardList.map((card, index) =>
                                <StyledGridCard>
                                    <CahCard card={card} key={index} border={true} />
                                </StyledGridCard>
                            )
                            }
                        </StyledGrid >,
                    undefined: null
                }[view]
            }
        </>

    )
}

export default CardList
