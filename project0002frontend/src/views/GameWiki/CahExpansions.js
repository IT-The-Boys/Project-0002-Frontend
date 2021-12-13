// import { StyledCarousel, StyledCarouselBG, StyledCarouselCard, StyledCarouselCardTitle, StyledCarouselLink} from 'components/styles/div/CahExpansions.styled';
// import React from 'react'
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// const ExpansionCard = ({ expansion }) => {
//     return (
//         <StyledCarouselCard>

//             <Link to={expansion.name.toLowerCase()}>
//                 <StyledCarouselCardTitle>
//                     {expansion.title}
//                 </StyledCarouselCardTitle>
//             </Link>

//         </StyledCarouselCard>
//     )

// }

// const CahExpansions = () => {
//     const { expansionList } = useSelector((state) => state.cahWiki);
//     return (
//         <StyledCarouselBG>
//             {expansionList.length > 0 ?
//                 <StyledCarousel>
//                     {expansionList.map(exp => <Link to={exp.name.toLowerCase()}>{exp.title}</Link>)}
//                 </StyledCarousel> : null
//             }
//         </StyledCarouselBG>
//     )
// }

// export default CahExpansions
