import React from "react"
import { Theme, ThemePanel } from "@radix-ui/themes"
import TaskFolders from "./components/TaskFolders"



function App() {


  return (
  <Theme appearance="dark" panelBackground="translucent">
   <TaskFolders></TaskFolders>
  </Theme>
   
    
  )
}

export default App
