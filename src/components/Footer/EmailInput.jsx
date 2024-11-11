import { Component, useState } from "react";
import styled from "styled-components";
import color from "../../uttils/style/color";
import { useTheme } from "../../uttils/Hooks";

const InputWrapper = styled.div`
  color: ${({ theme }) => (theme === 'light' ? color.dark : 'white')};
  display: flex;
  flex-direction: column;
`

const StyledLabel = styled.label`
  color: ${({ theme }) => (theme === 'light' ? color.dark : 'white')};
`

const StyledInput = styled.input`
  border: none;
  color: ${({ theme }) => (theme === 'light' ? color.dark : 'white')};
  background-color: transparent;
  border-bottom: 1px solid
    ${({ theme }) => (theme === 'light' ? color.dark : 'white')};
  margin-top: 5px;
  margin-bottom: 15px;
`


const EmailInput = () => {

        const {theme} = useTheme()
        const [inputValue, setInputValue] = useState('')
        return(
            <InputWrapper theme={theme}>
                <StyledLabel theme={theme} >Adresse email</StyledLabel>
                <StyledInput theme={theme}
                onChange={(e)=> setInputValue(e.target.value)}/>

                {inputValue}
            </InputWrapper>
        )
    }

export default EmailInput