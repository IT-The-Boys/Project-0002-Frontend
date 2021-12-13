import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.headerBG};
  color: ${({ theme }) => theme.colors.headerText};;
  height: 10vh;
  padding: 10px 0;
`

// export const Nav = styled.nav`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 40px;
//   @media (max-width: ${({ theme }) => theme.mobile}) {
//     flex-direction: column;
//   }
// `

// export const Logo = styled.img`
//   @media (max-width: ${({ theme }) => theme.mobile}) {
//     margin-bottom: 40px;
//   }
// `

// export const Image = styled.img`
//   width: 375px;
//   margin-left: 40px;
//   @media (max-width: ${({ theme }) => theme.mobile}) {
//     margin: 40px 0 30px;
//   }
// `