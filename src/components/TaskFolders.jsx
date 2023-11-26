import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Card, Text, IconButton } from "@radix-ui/themes";
import "./TaskFolders.css"

export default function TaskFolders () {

const [defaultFolder, setDefaultFolder] = useState([
    {id: "All", name: "All", color: "white", task: [ {id: uuidv4(), description: "Click the Plus Icon to Add a Task.", notes: "", completed: false, flagged: false, date: new Date(), }  ],},
    {id: "Today", name: "Today", color: "blue", task: [ {id: uuidv4(), description: "Click the Plus Icon to Add a Task.", notes: "", completed: false, flagged: false, date: new Date(), } ],},
    {id: "Scheduled", name: "Scheduled", color: "red", task: [ {id: uuidv4(), description: "Click the Plus Icon to Add a Task.", notes: "", completed: false, flagged: false, date: new Date(), } ],},
    {id: "Flagged", name: "Flagged", color: "orange", task: [ {id: uuidv4(), description: "Click the Plus Icon to Add a Task.", notes: "", completed: false, flagged: false, date: new Date(), } ],},
    {id: "Completed", name: "Completed", color: "green", task: [ {id: uuidv4(), description: "Click the Plus Icon to Add a Task.", notes: "", completed: false, flagged: false, date: new Date(), } ],}
])


    return (
    <div className="card-container" >
        {defaultFolder.map((folder) => {
            return (
                <Card asChild key={folder.id} className="responsive-folder mt-5 bg-[ ]">
                    <a href="#">
                        <IconButton radius="full" size={{initial:1,}} color={folder.color} ></IconButton>
                        <Text as="div" color="gray" size="1">
                            {folder.name}
                        </Text>
                    </a>
                </Card>
            )
        } )}
          
    </div>
    
    )    
}