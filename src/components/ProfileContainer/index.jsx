import React from "react";
import { useParams } from "react-router-dom";
import Profile from "../../pages/Profile";
import { useTheme } from "../../uttils/Hooks";



const ProfileContainer = () => {

    const {id} = useParams()
    const {theme} = useTheme()

    return(
        <Profile id = {id} theme={theme}/>
    )
}
export default ProfileContainer