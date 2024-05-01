import React, { useState } from 'react';
import DropIndicator from './DropIndicator';
import { motion } from 'framer-motion';
import Modal from './Modal';

const Card = ({ title, id, column, description, handleDragStart }) => {
  const [showModal, setShowModal] = useState(false);
  const [cardData, setCardData] = useState({ title, id, column, description });

  const openModal = () => {
    setCardData({ ...cardData, title, description, column });
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const handleEditCard = (e, newTitle, newDescription, newColumn) => {
    e.preventDefault();
    setCardData({
      ...cardData,
      title: newTitle,
      description: newDescription,
      column: newColumn,
    });
    // Perform any other necessary updates here
    closeModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditCard(e, cardData.title, cardData.description, cardData.column);
  };

  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => {
          handleDragStart(e, { title, id, column });
        }}
        onClick={openModal}
        className="cursor-pointer rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-100">{title}</p>
      </motion.div>
      {showModal && (
  <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white text-black p-6 rounded-lg shadow-md w-96">
      <h2 className="text-lg font-semibold mb-4">Edit Card</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={cardData.title}
            onChange={(e) => setCardData({ ...cardData, title: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={cardData.description}
            onChange={(e) => setCardData({ ...cardData, description: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="column" className="block text-sm font-medium text-gray-700">
            Column
          </label>
          <select
            id="column"
            value={cardData.column}
            onChange={(e) => setCardData({ ...cardData, column: e.target.value })}
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
            onClick={closeModal}
            className="mr-2 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Save Card
          </button>
        </div>
      </form>
    </div>
  </div>
)}

    </>
  );
};

export default Card;
