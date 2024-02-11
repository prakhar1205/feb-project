import { useState } from 'react';
import './App.css';
import homeImage from './home.png'

const App = () => {
  const [clickCount, setClickCount] = useState(0);
  const [yesFlag, setYesFlag] = useState(false);

  var buttonSize = 100 + clickCount * 120;
  console.log(buttonSize)
  const increaseSize = () => {
    // console.log("here");
    setClickCount(clickCount + 1);
  }

  if(yesFlag) {

    return (
      <div>
        <a href="/"><img id='home-img' src={homeImage} alt="Home" /></a>
        <h1>I Love You!</h1>
        <div className="center-container">
          <img className="yes-gif" src='https://media1.tenor.com/m/fE_7w7DHRf8AAAAC/bears-hug.gif'></img>
        </div>
      </div>
    );

  } else {

      return (
        <>
      <div>
        <h1>
          Will you be my valentine ?
        </h1>

        <div id="button-div">
          <button id='yes-btn' type="button" className='btn btn-success mx-4' style={{fontSize:`${buttonSize}%`}} onClick = {() => setYesFlag(true)}>Yes</button>
          <button id='no-btn' type="button" onClick = {() => increaseSize()} className="btn btn-danger mx-4">No</button>
        </div>

      </div>
      </>
    );
  }
}

export default App;
