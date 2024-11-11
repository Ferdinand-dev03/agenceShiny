import React, { useContext } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { SurveyContext } from '../uttils/Context'
import { Loader } from '../uttils/style/Atoms'
import color from '../uttils/style/color'
import useFetch, { useTheme } from '../uttils/Hooks'

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${color.primary};
`

const QuestionContent = styled.span`
  margin: 30px;
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${color.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`
const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const Survey = () => {
  const  {questionNumber}  = useParams()
  const questionInt = parseInt(questionNumber, 7)

  const prevQuestion = questionInt === + 1 ? 1 : questionInt - 1
  const nextQuestion = questionInt + 1

  const {theme} = useTheme()
  const [answers, SaveAnswers] = useContext(SurveyContext)

  function saveReply(answer) {
    SaveAnswers({ [questionInt]: answer })
  }
  const {data, dataLogin, error} = useFetch(`http://localhost:8000/survey`)
  const {surveyData} = data
  console.log(surveyData)

  if (error) {
    return (
      <span>Oups il ya une erreur🙈 de connection a la base de donnee</span>
    )
  }

  if (!surveyData || !surveyData[questionInt]) {
    return (
    <SurveyContainer>
      <QuestionTitle>Question {questionInt} </QuestionTitle>
      <Loader theme={theme}/>
    </SurveyContainer>) ;
  }
  
  

  return (
    <SurveyContainer>
      
      {!dataLogin ? (
        <QuestionContent>
          {surveyData[questionInt]}
        </QuestionContent>
      ) : (
        <Loader theme={theme} />
      )}
      <ReplyWrapper>
        <ReplyBox
          onClick={() => saveReply(true)}
          isSelected={answers[questionInt] === true}
        >
          Oui
        </ReplyBox>
        <ReplyBox
          onClick={() => saveReply(false)}
          isSelected={answers[questionInt] === false}
        >
          Non
        </ReplyBox>
      </ReplyWrapper>
      <LinkWrapper>
        <Link to={`/survey/${prevQuestion}`} > Precedent </Link>
        {surveyData[questionInt + 1] ? (
          <Link to={`/survey/${nextQuestion}`}> Suivant </Link>
        ) : (

          <Link to="Results">Results</Link>

        )}
        <Outlet />
      </LinkWrapper>
    </SurveyContainer>
  )
}

export default Survey
