import logo from './logo.svg';
import './App.css';
import React, {useState, useRef} from 'react';
import {Head} from './player.page/head.js';
import {Navigation} from './player.page/navigation.js';
import {Content} from './player.page/content.js';
import {useOutsideClick} from './hooks/useOutsideClick';
import {Main_File} from "./main_file";
import {Course} from './course'
function App() {
  const [isListActive, setIsListActive] = useState(true)
  const handleClick = () => {
    setIsListActive(!isListActive)
  }
  return (
    <div>
      { isListActive && (
        <div>
          <Course handleClick = {handleClick}/>
        </div>
      )

      }
      { !isListActive && (
        <Main_File handleClick = {handleClick}/>
      )

      }
    </div>
  )
}

export default App;
