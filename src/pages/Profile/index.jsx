import React, { useEffect, useState } from "react";
import { useTheme } from "../../uttils/Hooks";


const Profile = ({id})=> {

    const [profileData, setProfileData] = useState({});
  
    useEffect( ()=> {
      fetch(`http://localhost:8000/freelance?id=${id}`).then(res => res.json()).then(jsonRes => {
        setProfileData(jsonRes?.freelanceData)
      });

    }, [id])

    // const {data, error, dataLogin} = useFetch(`http://localhost:8000/freelance?id=${id}`)
    // const profile = data?.profile || []
    const {theme} = useTheme()
    

    const {
        picture,
        name,
        location,
        tjm,
        job,
        skills,
        available,
        
    } = profileData;

    console.log({profileData})

    return(
        <div >
            <img src={picture} alt={name} height={150} width={150} />
            <h1 theme={theme}> {name}</h1>
            <span  theme={theme}>{location}</span>
            <h2  theme={theme}>{job}</h2>
            <div>
                {skills && 
                    skills.map(skill => (
                        <div key={`skill-${skill}-${id}`}>
                            {skill}
                        </div>
                    ))}
            </div>
            <div> {available ? 'Disponible maintenant' : 'Indisponible'} </div>
            <span> {tjm} $ / jour </span>
        </div>
    )
}


export default Profile


