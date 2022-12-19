import React from "react";
import { useState, useRef, useEffect } from "react";

import Card from "./Card.jsx";
import WinningPopUp from "./WinningPopUp.jsx";
// import { setSelectionRange } from "@testing-library/user-event/dist/utils/index.js";
function Cards() {
  const [cards, setCards] = useState(
    [
      { id: 0, name: "Kery", status: "", img: "/images/01.jpg" },
      { id: 0, name: "Kery", status: "", img: "/images/01.jpg" },
      { id: 1, name: "Cristiano", status: "", img: "/images/02.jpg" },
      { id: 1, name: "Cristiano", status: "", img: "/images/02.jpg" },
      { id: 2, name: "Rachel", status: "", img: "/images/03.jpg" },
      { id: 2, name: "Rachel", status: "", img: "/images/03.jpg" },
      { id: 3, name: "Dana", status: "", img: "/images/04.jpg" },
      { id: 3, name: "Dana", status: "", img: "/images/04.jpg" },
      { id: 4, name: "Blanche", status: "", img: "/images/05.jpg" },
      { id: 4, name: "Blanche", status: "", img: "/images/05.jpg" },
      { id: 5, name: "Jessica", status: "", img: "/images/06.jpg" },
      { id: 5, name: "Jessica", status: "", img: "/images/06.jpg" },
      { id: 6, name: "Poolfeller", status: "", img: "/images/07.jpg" },
      { id: 6, name: "Poolfeller", status: "", img: "/images/07.jpg" },
      { id: 7, name: "Samuel", status: "", img: "/images/08.jpg" },
      { id: 7, name: "Samuel", status: "", img: "/images/08.jpg" },
    ].sort(() => Math.random() - 0.5)
  );

  const [previousCardState, setPreviousCardState] = useState(-1);
  const previousIndex = useRef(-1);

  const [progressGame, setProgressGame] = useState(0);
  const [winningGame, setWinningProgress] = useState(false);

  useEffect(() => {
    if (progressGame === 8) setWinningProgress(true);
  }, [progressGame]);

  const matchCheck = (currentCard) => {
    if (cards[currentCard].id === cards[previousCardState].id) {
      cards[previousCardState].status = "active matched";
      cards[currentCard].status = "active matched";
      setPreviousCardState(-1);
      setProgressGame(progressGame + 1);
    } else {
      cards[currentCard].status = "active";
      setCards([...cards]);
      setTimeout(() => {
        setPreviousCardState(-1);
        cards[currentCard].status = "unmatch";
        cards[previousCardState].status = "unmatch";
        setCards([...cards]);
      }, 1000);
    }
  };
  const clickHandler = (index) => {
    if (index !== previousIndex.current) {
      if (cards[index].status === "active matched") {
        alert("already matched");
      } else {
        if (previousCardState === -1) {
          previousIndex.current = index;
          cards[index].status = "active";
          setCards([...cards]);
          setPreviousCardState(index);
        } else {
          matchCheck(index);
          previousIndex.current = -1;
        }
      }
    } else {
      alert("card currently selected");
    }
  };

  return (
    <main className="container">
      {cards.map((card, index) => {
        return (
          <Card
            card={card}
            key={index}
            index={index}
            clickHandler={clickHandler}
          />
        );
      })}
      {winningGame ? <WinningPopUp /> : ""}
      <WinningPopUp />
    </main>
  );
}

export default Cards;
