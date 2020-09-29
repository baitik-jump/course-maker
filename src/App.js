import logo from './logo.svg';
import './App.css';
import React, {useState, useRef} from 'react';
import {Head} from './player.page/head.js';
import {Navigation} from './player.page/navigation.js';
import {Content} from './player.page/content.js';
import {useOutsideClick} from './hooks/useOutsideClick';
function App() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef();
  const [isActive, setIsActive] = useState(0);
  const [isListActive, setIsListActive] = useState(false);
  const handleListClick = () =>{
    setIsListActive(!setIsListActive);
  }

  useOutsideClick(ref, () => {
    setIsVisible(!isVisible);
  });
  const handleClick = () => {
    console.log(isActive);
    if (isActive < 2) {
      setIsActive(isActive+1)
    } else {
        setIsActive(0)
    }
  }
  return (
    <div>
      { !isListActive && (
      <div>
      <Head handleListClick = {handleListClick} isActive = {isActive} />
      <Navigation />
      <Content func = {handleClick} />
      </div>
      )}
      { isListActive && (
      <div>
        <Navigation />
      </div>
    )}
  </div>
  )
}

export default App;
