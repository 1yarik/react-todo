import { useState } from "react";

const ToDoForm = ({ addTask }) => {
   const [userInput, setUserInput] = useState('')

   const handleChange = (e) => {
      setUserInput(e.currentTarget.value)
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      addTask(userInput)
      setUserInput('')
   }

   const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
         handleSubmit(e)
      }
   }

   return (
      <form
         onSubmit={handleSubmit}
         className="flex justify-center mt-32 mb-14 items-center">
         <input
            type="text"
            placeholder="Enter the task..."
            className="max-w-xs mt-1 px-5 py-3 bg-white border shadow-sm border-indigo-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 block w-full rounded-md sm:text-sm focus:ring-1"
            value={userInput}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
         />
         <button className="rounded-xl hover:rounded-3xl ease-in-out duration-300 p-3 px-5 ml-4 bg-indigo-700 text-white">Add</button>
      </form>
   )
}

export default ToDoForm;


