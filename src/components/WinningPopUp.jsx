// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";

function newGame() {
  window.location.reload(false);
}

function WinningPopUp() {
  return (
    <div className="popUp">
      <div className="popUp__img">
        <img src="/images/win.jpg" alt="Happy Daniel Brice"></img>
      </div>
      <p className="popUp__text">You Win !!</p>
      <button onClick={newGame} className="popUp__button">
        Rejouer
      </button>
    </div>
  );
}

export default WinningPopUp;
