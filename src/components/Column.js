import React, { useState } from "react";
import Card from "./Card";
import DropIndicator from "./DropIndicator";
import AddCard from "./AddCard";
import Modal from "./Modal";

const Column = ({ title, headingColor, column, cards, setCards }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDragStart = (e, card) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    highlightIndicator(e);
  };

  const highlightIndicator = (e) => {
    const el = getNearestIndicator(e);
    if (el) {
      el.style.opacity = "1";
    }
  };

  const getNearestIndicator = (e) => {
    const DISTANCE_OFFSET = 50;
    const indicators = document.querySelectorAll(`[data-column="${column}"]`);
    let closest = {
      offset: Number.NEGATIVE_INFINITY,
      element: indicators[indicators.length - 1],
    };

    for (let i = 0; i < indicators.length; i++) {
      const box = indicators[i].getBoundingClientRect();
      const offset = e.clientY - (box.top + DISTANCE_OFFSET);
      if (offset < 0 && offset > closest.offset) {
        closest = { offset: offset, element: indicators[i] };
      }
    }

    return closest.element;
  };

  const handleDragLeave = (e) => {
    const el = getNearestIndicator(e);
    if (el) {
      el.style.opacity = "0";
    }
  };

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData("cardId");
    const el = getNearestIndicator(e);
    if (el) {
      const beforeId = el.dataset.before || "-1";
      setCards((prevCards) => {
        const updatedCards = prevCards.filter((card) => card.id !== cardId);
        const index = updatedCards.findIndex((card) => card.id === beforeId);
        updatedCards.splice(
          index === -1 ? updatedCards.length : index,
          0,
          {
            ...prevCards.find((card) => card.id === cardId),
            column,
          }
        );
        return updatedCards;
      });
      el.style.opacity = "0";
    }
  };

  return (
    <div className="shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {cards.filter((c) => c.column === column).length}
        </span>
      </div>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDragEnd}
        className="h-full w-full transition-colors bg-neutral-800/0"
      >
        {cards
          .filter((c) => c.column === column)
          .map((c) => (
            <div className="hover:scale-110">
            <Card key={c.id} {...c} handleDragStart={handleDragStart} />
            </div>
          ))}
        <DropIndicator beforeId="-1" column={column} />
        {showModal && (
          <Modal setShowModal={setShowModal}>
            <AddCard
              column={column}
              setCards={setCards}
              setShowModal={setShowModal}
            />
          </Modal>
        )}
        {!showModal && <AddCard column={column} setCards={setCards} setShowModal={setShowModal} />}
      </div>
    </div>
  );
};

export default Column;
