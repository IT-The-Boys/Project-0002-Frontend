import CahCard from 'components/card/CahCard'
import ControllerCard from 'components/card/ControllerCard'
import { StyledCahCardAddIcon, StyledCahCardSaveIcon } from 'components/styles/div/CahCard.styled'
import { StyledCarouselBG, StyledCarouselCard, StyledCarouselCardContainer, StyledCarouselControllerContainer } from 'components/styles/div/CahCarousel.styled'
import { StyledGrid, StyledGridBG, StyledGridCard } from 'components/styles/div/CahGrid.styled'
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { saveCardsToDB } from 'store/database/cahSlice'
import { togglePopup } from 'store/ui/modalSlice'
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

    }, [cardList?.length, currentIndex])
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
                            cardList?.map((card, index) =>

                                <StyledCarouselReversedCard reversed={reversed} key={index} visible={calcDisplayIndex(index)}>
                                    <CahCard card={card} border={false} idx={index} editMode={editMode} />
                                </StyledCarouselReversedCard>
                            )}

                        </> :
                        <>
                            {cardList.map((card, index) =>
                                <StyledCarouselCard key={index}>
                                    <CahCard card={card} idx={index} editMode={editMode}  />
                                </StyledCarouselCard>
                            )}
                        </>
                }
            </StyledCarouselCardContainer>

        </StyledCarouselBG >
    )
}
const CardGrid = ({ cardList, editMode }) => {
    const {tempCardIdList} = useSelector(state => state.cahWiki);
    return (
        <StyledGridBG>
            <StyledGrid>
                {editMode &&
                    <StyledGridCard>
                        <ControllerCard icon={<StyledCahCardAddIcon />} functional={togglePopup("addCardPopup")}/>
                    </StyledGridCard>
                }
                {tempCardIdList.length>0 &&
                    <StyledGridCard>
                        <ControllerCard icon={<StyledCahCardSaveIcon />} functional={saveCardsToDB()}/>
                    </StyledGridCard>
                }
                {cardList?.map((card, index) =>
                    <StyledGridCard key={index}>
                        <CahCard card={card} border={true} idx={index} editMode={editMode} />
                    </StyledGridCard>
                )}
            </StyledGrid>
        </StyledGridBG>
    )
}


const CardList = ({ cardList, editMode, view }) => {
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
