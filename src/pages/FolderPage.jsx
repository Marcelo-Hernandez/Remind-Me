import React, { useState } from "react";
import { Theme } from "@radix-ui/themes";
import { CSSTransition } from "react-transition-group"
import TaskFolders from "../components/DefaultFolders/TaskFolders";
import MyLists from "../components/MyLists/MyLists";
import AddFolder from "../components/AddFolder.jsx";



export default function FolderPage ({isFolderOpen}) {

    const [isAddFolderVisible, setIsAddFolderVisible] = useState(false);

    const handleVisibilityState = (isVisible) => {
      setIsAddFolderVisible(isVisible)
    }

    const handleCancel = () => {
      setIsAddFolderVisible(false);
      
  }
 


    return (
      <div className="flex flex-col responsive-folder-container">
   

      
          <TaskFolders isAddFolderVisible={isAddFolderVisible} />
          <MyLists 
          isAddFolderVisible={isAddFolderVisible} 
          onVisibilityState={handleVisibilityState}/>  

               
{
          <CSSTransition
            in={isAddFolderVisible}
            timeout={4000}
            classNames="slide"
            unmountOnExit
          > 
          <div>

            <AddFolder onCancel={handleCancel} />
          </div>
          </CSSTransition>
        }
      
      
     
      </div>
    )
}