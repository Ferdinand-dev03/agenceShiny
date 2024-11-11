
import { useContext } from 'react'
import styled from 'styled-components'
import color from '../uttils/style/color'
import useFetch, { useTheme } from '../uttils/Hooks'
import { SurveyContext } from '../uttils/Context'
import { Loader, StyledLink } from '../uttils/style/Atoms'
import EmptyList from '../components/Empty/Empty'


const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? color.backgroundLight : color.backgroundDark}; 
`

const ResultsTitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: bold;
  font-size: 28px;
  max-width: 60%;
  text-align: center;
  & > span {
    padding-left: 10px;
  }
`

const DescriptionWrapper = styled.div`
  padding: 60px;
`

const JobTitle = styled.span`
  color: ${({ theme }) =>
    theme === 'light' ? color.primary : color.backgroundLight};
  text-transform: capitalize;
`

const JobDescription = styled.div`
  font-size: 18px;
  & > p {
    color: ${({ theme }) => (theme === 'light' ? color.secondary : '#ffffff')};
    margin-block-start: 5px;
  }
  & > span {
    font-size: 20px;
  }
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export function formatQueryParams(answers) {
  const answerNumbers = Object.keys(answers)

  return answerNumbers.reduce((previousParams, answerNumber, index) => {
    const isFirstParam = index === 1
    const separator = isFirstParam ? '' : '&'
    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
  }, '')
}
// tester le code

export function formatJobList(title, listLength, index){

  if(index === listLength){
    return title
  }

  return `${title}`
}

const Results = ()=> {

  const {theme} = useTheme()
  const {data, error, loading} = useFetch(`http://localhost:8000/results`)
  const results = data?.results || []
  if(results.length < 1){
    return <EmptyList theme={theme}/>
  }
  console.log(results)
  if(error){
    return <span> Il y a une erreur</span>
  }
 
  console.log(results)

  return loading ? (
    <LoaderWrapper>
      <Loader data-testid='loader'/>
    </LoaderWrapper>
    ) : (

    <ResultsContainer>
      <ResultsTitle theme={theme}>
      Les competences dont vous avez besoin :
      {
        results.map((result, index) => (
        <JobTitle
          key={`result-title-${index}-${result.title}`}
          theme={theme}
        >
          {formatJobList(result.title , result.description.length(), index)}
        </JobTitle>
        ))}
      </ResultsTitle>
      <DescriptionWrapper>
        {results &&
        results.map((result, index)=> (
          <JobDescription
            theme={theme}
            key={`result-detail-${index}-${result.title}`}
          >
            <JobTitle theme={theme}>{result.title}</JobTitle>
            <p data-testid='job-description'>{result.description}</p>
          </JobDescription>
        ))}
      </DescriptionWrapper>
    </ResultsContainer>
    
  )
}

export default Results