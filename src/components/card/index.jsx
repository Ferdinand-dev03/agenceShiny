import React, { Component, useState } from "react";
import styled from "styled-components";
import color from "../../uttils/style/color";

const CardLabel = styled.span`
  color: ${({theme})=> (theme === 'light' ? 'blue' : '#5843e4')}
  font-size: 22px;
  font-weight: bold;
  `

  const CardImage= styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%
  `

  const CardWrapper = styled.div`
  background-color: ${({ theme }) => (theme === 'light' ? '#666' : '#ffee')};
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 30px;
  width: 300px;
  transition: 0.5s;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3;
  }

  `
  const CardTitle = styled.div`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#666')};
  font-size: 22px;
  font-weight: normal;
  align-self: center;
  height: 25px;
  display: flex;
  align-items: center;
`

export default function Card({label, title, picture, theme}){

  const [isFavorite, setFavorite] = useState(false)
  const handleFavorite = ()=>{
    setFavorite(!isFavorite)
  }
  const star = isFavorite ? '⭐' : ''

  return(
        <CardWrapper theme={theme} onClick={handleFavorite}>
          <CardLabel theme={theme}> {label}</CardLabel>
          <CardImage src={picture} alt="freelance"/>
          <CardTitle theme={theme}> 
            {star} {title} {star}
          </CardTitle>
          </CardWrapper>

  )
}

// class Card extends Component {
//   contructor(props){

//       super(props) 
//       this.state = {
//         isFavorites: false,
//       }
//     }
//     setFavorite = () => {
//       this.setState({ isFavorites: !this.state.isFavorites})
//     }
//     render(){
//       const { theme, label, title, picture} = this.props
//       const { isFavorites} = this.state
//       const star = isFavorites? '⭐' : ''

//       return(

//         <CardWrapper>
//             <CardLabel theme={theme}> {label}</CardLabel>
//             <CardImage src={picture} alt="freelance"/>
//             <CardTitle theme={theme}> 
//               {star} {title} {star}
//             </CardTitle>
//         </CardWrapper>
  
//       )
  
//     }
  
//   }

//   export default Card
