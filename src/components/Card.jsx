function Card({ card, index, clickHandler }) {
  return (
    <div className={`card ${card.status}`}>
      <img
        className="picture"
        src={card.img}
        alt={card.name}
        onClick={() => clickHandler(index)}
      />
    </div>
  );
}

export default Card;
