import React, { useState } from "react";
import * as Form from '@radix-ui/react-form';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';
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

{/* <div className="flex flex-col bg-blue w-[70vw] h-[100vh] p-10">
<div onClick={handleClick} className="h-[1%]  w-full">asdf</div>
 <div className={dropdownStyling}>
  dasfasdfsadfasdfasdfasdfasfd
 </div>
<Separator size={4}/>
<div>gekko</div>
<div className="flex-grow"/>

           <Button 
             className=" "
             radius="full" 
             variant="ghost"
             size={{initial:2,}}
             onClick={handleClick} >
                 <Flex gap="2">
                   <PlusCircledIcon/> 
                   <Text size={{xl:5}}>
                   New Reminder 
                   </Text> 
                   
                 </Flex>
           </Button>
</div> */}