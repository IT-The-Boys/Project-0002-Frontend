import CahCard from 'components/card/CahCard'
import ControllerCard from 'components/card/ControllerCard'
import { StyledCarouselBG, StyledCarouselCard, StyledCarouselCardContainer, StyledCarouselControllerContainer } from 'components/styles/div/CahCarousel.styled'
import { StyledGrid, StyledGridBG, StyledGridCard } from 'components/styles/div/CahGrid.styled'
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { StyledCarouselReversedCard } from '../styles/div/CahCarousel.styled'

const CardCarousel = ({ reversed, cardList, editMode }) => {
    const ref = useRef()
    const displayX = 10;
    const [currentIndex, setCurrentIndex] = useState(0)
    const calcDisplayIndex = (index) => {
        let indexStart = Math.max(0, cardList.length - displayX - currentIndex);
        let indexEnd = Math.min(cardList.length, indexStart + displayX);
        return (index >= indexStart && index < indexEnd);
    }
    useEffect(() => {
        const container = ref.current
        if (container) {
            const onWheel = e => {
                e.preventDefault();
                let newIndex = currentIndex + e.deltaY / 100;
                console.log(newIndex)
                setCurrentIndex(Math.min(Math.max(newIndex, 0), cardList.length - displayX));
                container.scrollTo({
                    left: container.scrollLeft + e.deltaY,
                    behavior : "smooth"
                })
            }
            container.addEventListener("wheel", onWheel);
            return () => {
                container.removeEventListener("wheel", onWheel);
            }
        }

    }, [currentIndex])
    return (
        <StyledCarouselBG>
            {editMode &&
                <StyledCarouselControllerContainer>
                    <ControllerCard />
                </StyledCarouselControllerContainer>
            }
            <StyledCarouselCardContainer reversed={reversed}  ref={ref}>
                {
                    reversed ?
                        <>  {
                            cardList.map((card, index) =>

                                <StyledCarouselReversedCard reversed={reversed} key={index} visible={calcDisplayIndex(index)}>
                                    <CahCard card={card} border={false} idx={index} />
                                </StyledCarouselReversedCard>
                            )}

                        </> :
                        <>
                            {cardList.map((card, index) =>
                                <StyledCarouselCard key={index}>
                                    <CahCard card={card} idx={index} />
                                </StyledCarouselCard>
                            )}
                        </>
                }
            </StyledCarouselCardContainer>

        </StyledCarouselBG >
    )
}
const CardGrid = ({ cardList, editMode }) => {
    return (
        <StyledGridBG>
            <StyledGrid>
                {editMode &&
                    <StyledGridCard>
                        <ControllerCard />
                    </StyledGridCard>
                }
                {cardList.map((card, index) =>
                    <StyledGridCard key={index}>
                        <CahCard card={card} border={true} idx={index} />
                    </StyledGridCard>
                )}
            </StyledGrid>
        </StyledGridBG>
    )
}


const CardList = ({ cardList, editMode, view }) => {
    // const count = 100;
    // const [reversed, setReversed] = useState(false)
    return (
        <>

            {
                {
                    0:
                        <CardCarousel editMode={editMode} cardList={cardList} reversed={true} />,
                    1:
                        <CardGrid editMode={editMode} cardList={cardList} />,
                    undefined: null
                }[view]
            }
        </>

    )
}

export default CardList
