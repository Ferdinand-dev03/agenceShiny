import { createContext, useContext, useState } from "react";

// creation du context Theme
export const ThemeContext = createContext()


//  instalation du context Provider
export const ThemeProvider = ({ children })=>{

  const [theme, setTheme] = useState('light')
  const toggleTheme = ()=> {
    setTheme( theme === 'light' ? 'dark' : 'light')
  }

  return(
    
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}


// creation du context Survey

export const SurveyContext = createContext()

//  instalation du context Provider

export const SurveyProvider = ({children})=>{
  const [answers, setAnwers] = useState({})
  const SaveAnswers = (newAnswers) => {
    setAnwers({...answers, ...newAnswers})
  }
 
  return (
    <SurveyContext.Provider value={[answers, SaveAnswers]  }>
      {children}
    </SurveyContext.Provider>
  )
}
// export const useTheme = () => {
//   const context = useContext(ThemeContext);
  
//   if (context === undefined) {
//     throw new Error("useTheme must be used within a ThemeProvider");
//   }

//   return context;
// };

