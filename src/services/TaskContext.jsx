import React, { createContext, useContext, useReducer, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskContext = createContext();

const savedState = JSON.parse(localStorage.getItem("taskState"));





const initialState = savedState || {
    defaultFolders: [
      
    ],

    folders: [
      {id: "All", name: "All", color: "gray", tasks: [{description: "Example Task! Click me to See a Description", notes: "Click again to Collapse Task."}]},
      {id: "Today", name: "Today", color: "blue", tasks: []},
      {id: "Scheduled", name: "Scheduled", color: "red", tasks: []},
      {id: "Flagged", name: "Flagged", color: "orange", tasks: []},
      {id: "Completed", name: "Completed", color: "green", tasks: []}
    ],

    tasks: [
      
    ],

    setSelectedFolder: null,
}

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FOLDER":
      return {
        ...state,
        folders: [...state.folders, action.payload],
      };
    case "DELETE_FOLDER":
      return {
        ...state,
        folders: state.folders.filter(folder => folder.id !== action.payload),
      };  
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],

        folders: state.folders.map(folder =>
          folder.id === action.payload.folderId
            ? { ...folder, tasks: [...folder.tasks, action.payload] }
            : folder
        ),
      };
     
    case "DELETE_TASK":
      return {
        ...state,
        
    folders: state.folders.map(folder =>
      folder.id === state.setSelectedFolder
        ? { ...folder, tasks: folder.tasks.filter(task => task.id !== action.payload) }
        : folder
    ),
      };  
    case "SET_SELECTED_FOLDER":
      return {
        ...state,
        setSelectedFolder: action.payload
      };
    case "RESTORE_STATE":
      return action.payload
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState) 
  

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem("taskState"));
    if (savedState) {
      dispatch({ type: "RESTORE_STATE", payload: savedState });
    }
  }, []);



  const addFolder = (folder) => {
    dispatch({ type: "ADD_FOLDER", payload: folder });
  };

  const deleteFolder = (folderId) => {
    dispatch({ type: "DELETE_FOLDER", payload: folderId });
  };

  const addTask = (task, folderId) => {
    dispatch({ type: "ADD_TASK", payload: { ...task, id: uuidv4(), folderId } });
  };

  const deleteTask = (taskId) => {
    dispatch({ type: "DELETE_TASK", payload: taskId });
  };

  const setSelectedFolder = (folderId) => {
    dispatch({type: "SET_SELECTED_FOLDER", payload: folderId});
    localStorage.setItem("selectedFolder", folderId);
  }

  useEffect(() => {
    localStorage.setItem("taskState", JSON.stringify(state));
  }, [state]); 

  return (
    <TaskContext.Provider value={{ state, addFolder, addTask, deleteFolder, deleteTask, setSelectedFolder}}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  return useContext(TaskContext);
};