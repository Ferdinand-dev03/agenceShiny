import React, { useEffect, useState } from "react";
import DefaultPicture from '../assets/profile.png'
import Card from "../components/card";
import PropTypes from "prop-types";
import styled from "styled-components";
import useFetch, { useTheme } from "../uttils/Hooks";
import color from "../uttils/style/color";
import { Loader } from "../uttils/style/Atoms";
import Results from "./Results";
import { Link } from "react-router-dom";

const freelanceProfileData = [
  {
    name: 'Ferdinand',
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'Doue',
    jobTitle: 'Developpeur Web',
    picture: DefaultPicture,
  },
  {
    name: 'Kouya',
    jobTitle: 'Dev App',
    picture: DefaultPicture,
  },
]

const CardsContainer = styled.div`
display: grid;
gap: 24px;
grid-template-columns: repeat(2, 1fr);


`

const PageTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${color.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired
}

Card.defaultProps = {
  title: '',
  label: '',
  picture: DefaultPicture
}

export default function Freelances(){

  const {theme} = useTheme()
  const {data, error, dataLogin} = useFetch(`http://localhost:8000/freelances`)
  const freelancersList = data?.freelancersList || []
  console.log(freelancersList)

  
  if(error) return <p>Oups error de connection</p>
  return(
    <div className="card">
      <PageTitle theme={theme}>Trouvez vos prestataires 👩🏾‍💻👩🏾‍💻👩🏾‍💻</PageTitle>
      <PageSubtitle theme={theme}> Chez Shiny nous reunissons les meilleurs profils pour vous </PageSubtitle>

      { dataLogin ? (<LoaderWrapper>
        <Loader theme={theme}/>
      </LoaderWrapper>
      ) :
      <CardsContainer>
        {
          freelancersList.map((profile, index)=> (
          < Link key={`frelance-${profile.id}`} to={`/profile/${profile.id}`}>
                <Card
                  key={`${profile.id}-${index}`}
                  label={profile.job}
                  title={profile.name}
                  picture={profile.picture}
                  theme={theme}
                  
                />
          </Link>
        ))}
      
      </CardsContainer>}
    </div>
  )
}