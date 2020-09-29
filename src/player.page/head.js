import React, {useState, useRef} from 'react';
import '../css/main.css';
import {useOutsideClick} from '../hooks/useOutsideClick';

export const Head = (props) =>{
  return (
    <div>
      <div class="header head-height navbar-dark sticky-top">
          <div class="center width" >
            <a href="#" class="navbar-brand"><h2>КурсМейкер</h2></a>
          </div>
          <div class="width1" >
            <div class="otstyp"></div>
            <a href="#"><img class="cube" src="svg/videotrue.svg"/></a>
            <a href="#"><img class="cube" src="svg/texttrue.svg"/></a>
            <a href="#"><img class="cube" src="svg/testtrue.svg"/></a>
            <a href="#"><img class="cube" src="svg/videofalse.svg"/></a>
            <a href="#"><img class="cube" src="svg/textfalse.svg"/></a>
            <a href="#"><img class="cube" src="svg/testfalse.svg"/></a>


            <a href="#"><img class="cube-avatar" src="svg/MaskGroup.png"/></a>

        </div>
      </div>
      <hr/>
    </div>
  )

}
