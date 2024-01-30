import React, { useState, useEffect } from "react";
import { Text, Separator, Flex, Button, Checkbox } from "@radix-ui/themes";
import { useTaskContext } from "../../services/TaskContext";
import { PlusCircledIcon } from '@radix-ui/react-icons';
import "./TaskList.css";

export default function TaskList() {
  const { state, addTask, deleteTask, addFolder } = useTaskContext();
  const [editTask, setEditTask] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  const filterSelectedFolderTasks = () => {
    const selectedFolder = state.folders.find((folder) => folder.id === state.setSelectedFolder);
    return selectedFolder ? selectedFolder.tasks : [];
  };

  const selectedFolderTasks = filterSelectedFolderTasks();

  const [stagedTaskForm, setStagedTaskForm] = useState({
    id: state.setSelectedFolder,
    description: "",
    notes: "",
    date: new Date(),
    flagged: false,
    completed: false,
  });

  const handleTaskFormEdit = (e) => {
    setStagedTaskForm({
      ...stagedTaskForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitNewTask = (e) => {
    e.preventDefault();
    addTask(stagedTaskForm, state.setSelectedFolder);

    setStagedTaskForm({
      description: "",
      notes: "",
    });

    setEditTask(false);
  };

  const handleNewTaskForm = () => {
    setEditTask(!editTask);
  };

  const handleToggleNotes = () => {
    setShowNotes(!showNotes);
  }

  const handleCompleteTask = (taskId) => {
    setTimeout(() => {
      deleteTask(taskId);
    }, 500);
  }

  useEffect(() => {
    console.log("something else rendered or state changed");
  }, [state]);

  const dropdownInputStyling = `default-dropdown-input-styles ${editTask ? "input-dropdown" : "input-drop-up"}`;
  const dropdownNotesStyling = `default-dropdown-notes-styles ${showNotes ? "dropdown" : "drop-up"}`;


  if (selectedFolderTasks.length === 0 && !editTask) {
    return (
      <div className="w-[100%] h-[100vh] flex flex-col pt-20 p-10 sm:p-10 task-list-shadow" >
        <Text weight="bold" size={{ initial: 4, md: 5, lg: 6, xl: 7 }}>Reminders</Text>
        <div className="text-center text-[150%] pt-[25%]">
          <Text weight="light" size={{ initial: 2, md: 3, lg: 4, xl: 5 }}>No Reminders</Text>
        </div>
        <div className="flex-grow"></div>
        <div className="add-task-container">
          <Button
            className=""
            radius="full"
            variant="ghost"
            size={{ initial: 2 }}
            onClick={handleNewTaskForm}
          >
            <Flex gap="2">
              <PlusCircledIcon />
              <Text size={{ initial: 3 }}>New Reminder</Text>
            </Flex>
          </Button>
        </div>
      </div>);
  }

  return (
    <div className="flex flex-col w-[100%] h-[100vh] p-10 task-list-shadow">
      <Text weight="bold" size={{ initial: 4, md: 5, lg: 6, xl: 7 }}>Reminders</Text>
      {selectedFolderTasks.map((task) => (
        <React.Fragment key={task.id}>
          <div className="flex flex-row items-center h-[5%]">
            <Checkbox onCheckedChange={() => { handleCompleteTask(task.id) }} size="3" />
            <div className="w-full ml-5" onClick={() => { handleToggleNotes(task.id) }}><Text size={{ initial: 1, xl: 3 }}>{task.description}</Text></div>
          </div>
          <Text className={dropdownNotesStyling}>{task.notes}</Text>
          <Separator className="ml-5" size={4} />
        </React.Fragment>
      ))}

      <div className={dropdownInputStyling}>
        <input
          maxLength={"50"}
          type="text"
          placeholder="Title"
          name="description"
          onChange={handleTaskFormEdit}
          value={stagedTaskForm.description}
          className="outline-none bg-inherit border-b-1 h-10"
        />
        <input
          required="text"
          maxLength={"100"}
          type="text"
          placeholder="Notes"
          name="notes"
          onChange={handleTaskFormEdit}
          value={stagedTaskForm.notes}
          className="outline-none bg-inherit border-b-1 h-20"
        />
        <Separator size={4} />
        <Button
          className=""
          radius="full"
          variant="ghost"
          size={{ initial: 2 }}
          onClick={handleSubmitNewTask}>submit</Button>
      </div>

      <div className="flex-grow" />
      <div className="add-task-container">
        <Button
          className=""
          radius="full"
          variant="ghost"
          size={{ initial: 2 }}
          onClick={handleNewTaskForm}
        >
          <Flex gap="2">
            <PlusCircledIcon />
            <Text size={{ initial: 3, xl: 3 }}>New Reminder</Text>
          </Flex>
        </Button>
      </div>
    </div>
  );
}