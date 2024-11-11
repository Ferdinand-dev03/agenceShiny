import styled from "styled-components"
import color from "../../uttils/style/color"
import { useContext } from "react"
import { ThemeContext } from "../../uttils/Context"
import { useTheme } from "../../uttils/Hooks"
import EmailInput from "./EmailInput"


const FooterContainer =styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  margin-bottom: 55px;
`
const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${color.secondary};
`

const Footer= ()=>{

  const {theme, toggleTheme} = useTheme()

  return(
    <FooterContainer>
      <EmailInput theme={theme}/>
      <NightModeButton onClick={()=> toggleTheme()}>
        Changer de mode : {theme === 'light' ? '🌞' : '🌙' }
      </NightModeButton>
    </FooterContainer>
  )
}

export default Footer