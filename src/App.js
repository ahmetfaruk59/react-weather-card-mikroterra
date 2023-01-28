
import { useState } from 'react';
import './App.css';
import Main from './component/card/Main';
import {BsLinkedin} from 'react-icons/bs'
function App() {
  const [value, setValue] = useState(0);
  const MAX = 10;

  return (
    <div className="App d-flex">
      <Main sliderValue={value} />
      <input
       className='sliderItem'
        type="range"
        min="0"
        max={MAX}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <a href="https://www.linkedin.com/in/ahmetfarukkarakus/" target="_blank"  rel="noreferrer"><BsLinkedin/></a>
    </div>
  );
}

export default App;
