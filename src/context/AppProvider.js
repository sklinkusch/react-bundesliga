import React, { useState } from 'react'
import AppContext from "./AppContext"
import oldTable from "./oldTable"
import matches from "./matches"


const AppProvider = (props) => {
  const [state] = useState({oldTable, matches})
  return (
    <AppContext.Provider value={state}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppProvider