import React, { useState } from "react";
import { useTaskContext } from "../../services/TaskContext";
import { v4 as uuidv4 } from "uuid";
import { Card, Text, IconButton, Strong, Theme, Grid, Flex } from "@radix-ui/themes";
import "./TaskFolders.css"

export default function TaskFolders ({isAddFolderVisible}) {

const { state, setSelectedFolder } = useTaskContext();

const defaultFolders = state.folders.slice(0, 5);



const defaultFolderContainer = `default-folder-container ${isAddFolderVisible ? "normal-scale" : "scale-down"}`;

console.log(state)

    return (
    
    <div className={defaultFolderContainer}>
        <div>
          <Grid columns="2" gap="2" className="w-[full] h-[full]">
            {defaultFolders.map((folder) => {
                return (
                    <div key={folder.id} className="default-folder-card"  onClick={() => setSelectedFolder(folder.id)}>
                           <div className="flex flex-row justify-between">
                                <IconButton 
                                  radius="full" 
                                  size={{initial:2, xl:2}} 
                                  color={folder.color}/>
                                <Text as="div" size={{initial:5, xl:6}} className="">
                                    <Strong>{folder.tasks.length}</Strong>
                                </Text>
                           </div>
                                <Text as="div" color="gray" size={{initial:1, xl:2}}>
                                    {folder.name}
                                </Text>
                           
                        
                    </div>
                )
            } )}
          </Grid>
        </div>
            
        
    </div>


    
    )    
}