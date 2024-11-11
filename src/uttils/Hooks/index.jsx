import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../Context"



export default function useFetch(url){

  const [data, setData] = useState({})
  const [dataLogin, setDataLogin] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {

    if(!url) return
    setDataLogin(true)
    async function fetchQuestions() {
      
      try {
        const res = await fetch(url)
        const data  = await res.json()
        setData(data)
        console.log(data)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setDataLogin(false)
      }
    }
    fetchQuestions()
  }, [url])

  return {data, dataLogin, error}
}

export function useTheme(){

  const {toggleTheme, theme} = useContext(ThemeContext)
  return {toggleTheme, theme}
}