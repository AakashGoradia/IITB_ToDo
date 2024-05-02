import React, { useEffect, useState } from "react";
import Column from "./Column";
import Barrel from "./Barrel";
import LiveWave from "./LiveWave";
import ImageCarousel from "./ImageCarousel";

const Board = () => {
  const [cards, setCards] = useState([]);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    hasChecked && localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  useEffect(() => {
    const cardData = localStorage.getItem("cards");
    setCards(cardData ? JSON.parse(cardData) : []);
    setHasChecked(true);
  }, []);

  return (
    <>
      <div className="flex flex-row justify-center gap-x-32">
      <div class="w-1/5">
          <ImageCarousel />
        </div>
        <h1 className="mt-32 flex justify-center text-5xl font-bold">
          Simple TO-DO List
        </h1>
        <div className="text-center h-1/16 w-1/16">
          <Barrel setCards={setCards} />
          <h1>(Drag here to Delete a card)</h1>

        </div>{" "}
      </div>

      <div className="flex flex-col h-full w-full gap-3 p-12">
        {/* <AddCard setCards={setCards} /> */}

        <div className="flex justify-center h-full w-full gap-12">
          <Column
            title="TO DO"
            headingColor="text-[#BFEFFF]"
            column="todo"
            cards={cards}
            setCards={setCards}
          />
          <Column
            title="IN PROGRESS"
            column="inprogress"
            headingColor="text-[#FFD700]"
            cards={cards}
            setCards={setCards}
          />
          <Column
            title="DONE"
            column="done"
            headingColor="text-[#90EE90]"
            cards={cards}
            setCards={setCards}
          />
        </div>
      </div>
      <div className="fixed h-1/2 w-1/2">

      </div>

      <LiveWave />
    </>
  );
};

export default Board;
