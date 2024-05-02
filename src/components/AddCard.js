import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";

const AddCard = ({ column, setCards }) => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedColumn, setSelectedColumn] = useState(column);
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^[A-Za-z\s]+$/.test(title.trim())) {
      setTitleError("Title should only contain alphabets");
      return;
    } else {
      setTitleError("");
    }

    if (description.trim().length < 25) {
      setDescriptionError("Description should be at least 25 characters");
      return;
    } else {
      setDescriptionError("");
    }

    // If all validations pass, add the card
    const newCard = {
      column: selectedColumn,
      title: title.trim(),
      description: description.trim(),
      id: Math.random().toString(),
    };

    setCards((prevCards) => [...prevCards, newCard]);
    setShowModal(false);
    setTitle("");
    setDescription("");
    setSelectedColumn(column);
  };

  return (
    <>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white text-black p-6 rounded-lg shadow-md w-96">
            <h2 className="text-lg font-semibold mb-4">Add Card</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {titleError && (
                  <p className="text-red-500 text-xs mt-1">{titleError}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
                {descriptionError && (
                  <p className="text-red-500 text-xs mt-1">{descriptionError}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="column"
                  className="block text-sm font-medium text-gray-700"
                >
                  Column
                </label>
                <select
                  id="column"
                  value={selectedColumn}
                  onChange={(e) => setSelectedColumn(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="todo">TO DO</option>
                  <option value="inprogress">IN PROGRESS</option>
                  <option value="done">DONE</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="mr-2 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Add Card
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      )}
        {" "}
        <button
          onClick={() => setShowModal(true)}
          className="flex justify-center w-40 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-white transition hover:text-black hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <FiPlus className="mr-2" />
          Add Card
        </button>
    </>
  );
};

export default AddCard;
