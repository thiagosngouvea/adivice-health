import React, { useState, createContext } from 'react'

export const GlobalContext = createContext()


export const GlobalContextProvider = ({children}) => {

    const [ consultas, setConsultas ] = useState([])
    const [ doctors, setDoctors ] = useState([])
    const [ updateDoctors, setUpdateDoctors ] = useState(false)
    const [ updateConsultas, setUpdateConsultas ] = useState(false)
    

    return(
      <GlobalContext.Provider value={{ 
            consultas, 
            setConsultas, 
            doctors,
            setDoctors,
            updateDoctors,
            setUpdateDoctors,
            updateConsultas,
            setUpdateConsultas
            }}
        >
        {children}
      </GlobalContext.Provider>
    )

}