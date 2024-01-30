import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTaskContext } from "../services/TaskContext";
import * as Form from '@radix-ui/react-form';
import { Button } from "@radix-ui/themes";

import "./AddFolder.css"

export default function AddFolder ({ onCancel }) {
  const { state, addFolder } = useTaskContext();
  
  

  const [stagedForm, setStagedForm] = useState({
    id: uuidv4(),
    name: "",
    tasks: []
  }); 

  const handleChange = (e) => {
    setStagedForm({
      ...stagedForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addFolder(stagedForm);

    setStagedForm({
      id: uuidv4(),
      name: "",
      tasks: []
    })

    handleCancel()

  }

  const handleCancel = () => {
    onCancel()
  }


    return(

           <div className="animate-add-folder"> 

                <Button
                onClick={handleCancel}
                variant="ghost">
                  Cancel
                </Button>
           
              <div className="form-container flex justify-center p-5">
                <Form.Root onSubmit={handleSubmit} className="w-[80%]">
                    <Form.Field className="grid mb-[10px]" name="list-name">
                      <div className="flex items-baseline justify-between">
                        <Form.Label className="text-[15px] font-medium leading-[35px] text-center text-white">New Reminder</Form.Label>
                        <Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
                          Please enter a name.
                        </Form.Message>
                      </div>
                      <Form.Control asChild>
                        <input
                          className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-black"
                          type="text"
                          name="name"
                          onChange={handleChange}
                          value={stagedForm.name}
                          required
                        />
                      </Form.Control>
                    </Form.Field>
                    
                    <Form.Submit asChild>
                      <button                       
                        className="box-border w-full text-black shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
                        Create List
                      </button>
                    </Form.Submit>
                  </Form.Root>
              </div>
           </div>
     
    

  )
}

