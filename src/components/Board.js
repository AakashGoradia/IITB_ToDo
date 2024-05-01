import React, { useEffect, useState } from "react";
import Column from "./Column";
import Barrel from "./Barrel";
import AddCard from "./AddCard";
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
      <div className="bg-none">
        <h1 className="flex justify-center mt-8 text-3xl font-bold">
          Simple TO-DO List
        </h1>
        <div className="flex justify-center">
          {" "}
          <div class=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6 lg:mr-8">
            <ImageCarousel />
          </div>
        </div>

        <div className="flex justify-between h-full w-full gap-3 p-12">
          {/* <div className="flex justify-center">
                <AddCard setCards={setCards} />
            </div> */}
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
            <div className="mx-8">
              <Barrel setCards={setCards} />
            </div>
          </div>
        </div>
        <LiveWave />
      </div>
    </>
  );
};

export default Board;
