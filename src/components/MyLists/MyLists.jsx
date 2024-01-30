import React, { useState, useEffect } from "react";
import { useTaskContext } from "../../services/TaskContext";
import { Text, Strong, Button, Flex } from "@radix-ui/themes";
import { PlusCircledIcon, Cross2Icon } from "@radix-ui/react-icons";
import "./MyLists.css"

export default function MyLists ({isAddFolderVisible, onVisibilityState}) {

  
    
  const { state, deleteFolder, setSelectedFolder } = useTaskContext();

  const myListFolders = state.folders.slice(5);

  const myListsContainer = `my-lists-container ${isAddFolderVisible ? "normal-scale" : "scale-down"}`;

  const setFolderId = (folderId) => {
    setSelectedFolder(folderId)
  }

  const handleAddFolder = () => {
    onVisibilityState(true);
  }

  const handleCancel = () => {
      onVisibilityState(false);
  }

  const handleDelete = (folderId) => {
      deleteFolder(folderId)
  }
useEffect(() => {
    console.log("TaskList rendered or state changed");
  }, [state]);
  
 
    return(
        <div className={myListsContainer}>
            <div className="my-lists">
              <Text 
                as="div" 
                size={{initial:6, xl:6}} 
                className="pt-5"><Strong>My Lists</Strong></Text>
                <div className="lists-column">
                    {myListFolders.map((folder) => {
                        return (         
                          <div className="my-list-card cursor-pointer" key={folder.id} onClick={() => setFolderId(folder.id)}>
                              
                              
                                <Cross2Icon onClick={() => {handleDelete(folder.id)}}/>
                              
                              
                              <Text 
                              size={{
                                initial:2,
                                xl:3
                              }}
                              className="pl-5">{folder.name}</Text>
                              <div className="flex-grow"/>
                              <Text size={{initial:2, xl:3}} color="gray" > 
                                {folder.tasks.length}
                              </Text>
                          
                              </div>
                          
                          
                        )
                    })}
                </div>
                
               
                  <Button 
                    radius="full" 
                    variant="ghost"
                    size={{initial:2,}}
                    onClick={handleAddFolder} >
                        <Flex gap="2">
                          <PlusCircledIcon/> 
                          <Text size={{xl:3}}>
                          New List
                          </Text> 
                          
                        </Flex>
                  </Button>

         
         
        
         
                            
            </div>
        </div>
    )
}