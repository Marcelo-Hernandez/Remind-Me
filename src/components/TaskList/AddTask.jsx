import React, { useState } from "react";
import { useTaskContext } from "../../services/TaskContext";


export default function AddTask () {

const { state, addTask } = useTaskContext();

const [stagedForm, setStagedForm] = useState({
    id: "",
    description: "",
    notes: "",
    completed: false,
    flagged: false,
    date: new Date(),
    folderOrigin: ""
  });

  const handleChange = (e) => {
    setStagedForm({
      ...stagedForm,
      [e.target.description]: e.target.value,
      [e.target.notes]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(stagedForm);
    setStagedForm({
      id: "",
      description: "",
      notes: "",
      completed: false,
      flagged: false,
      date: new Date(),
      folderOrigin: ""
    });
  };





    return(
        <div className="bg-blue w-[70vw] h-[full] p-10">   
       
        
        </div>
    )

}
