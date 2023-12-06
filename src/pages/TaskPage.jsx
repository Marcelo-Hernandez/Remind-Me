import React from "react";
import TaskList from "../components/TaskList/TaskList";
import AddTask from "../components/TaskList/AddTask";
import { Theme } from "@radix-ui/themes";
import "../index.css"



export default function TaskPage () {



    return (
        <div className="responsive-task-container">
        
        
           
                <TaskList/>
           
     
        </div>
    )
}