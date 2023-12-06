import React, {useState, useEffect} from "react";
import { CSSTransition } from "react-transition-group"
import { TaskProvider } from "./services/TaskContext.jsx";
import { useTaskContext } from "./services/TaskContext.jsx";
import { Theme, Button } from "@radix-ui/themes"
import FolderPage from "./pages/FolderPage"
import TaskList from "./components/TaskList/TaskList.jsx";
import TaskPage from "./pages/TaskPage"
import AddFolder from "./components/AddFolder.jsx"
import "./components/TaskList/TaskList.css"





function App() {
  const { state, setSelectedFolder } = useTaskContext();
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 912);
  
  useEffect(() => {
    if(state.setSelectedFolder !== null){
      setIsFolderOpen(true);
    }
  }, [state.setSelectedFolder]);

  const handleFolderClose = () => {
    setIsFolderOpen(null)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 912);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(isFolderOpen)

  return (
     
    <Theme appearance="dark">
    {isMobile ?
    (<>
      <FolderPage />
      <CSSTransition
            in={isFolderOpen}
            timeout={4000}
            classNames="slide-right"
            unmountOnExit
          > 
          <div className="animate-task-list">
            <div className="absolute right-10 bottom-9">
              <Button radius="full" variant="ghost" size={2} onClick={()=>{setIsFolderOpen(false)}}>Done</Button>

            </div>
            <TaskList/>
             
          </div>
          
        
          </CSSTransition>
          
    </>
    ) : 
    (<>
      <div className="flex flex-row">
        <FolderPage/>
        <TaskPage/>

      </div>
   
    </>)}


      

</Theme>

    
  )
}

export default App
