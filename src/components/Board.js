import React, { useState } from 'react';
import Column from './Column';
import Cards from './Cards';
import Barrel from './Barrel';

const Board = () => {
    const [cards, setCards] = useState(Cards || [])
    return (
        <div className='flex h-full w-full gap-3 overflow-scroll p-12'>
            <Column
                title = "TO DO"
                headingColor = "text-yellow-200"
                column = "todo"
                cards = {cards}
                setCards = {setCards}
            />
            <Column
                title = "IN PROGRESS"
                column = "inprogress"
                headingColor = "text-blue-200"
                cards = {cards}
                setCards = {setCards}
            />
            <Column
                title = "DONE"
                column = "done"
                headingColor = "text-emerald-200"
                cards = {cards}
                setCards = {setCards}
            />
            <Barrel setCards={setCards}/>
        </div>
    )
}

export default Board;
