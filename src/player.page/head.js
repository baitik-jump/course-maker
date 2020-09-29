import React, {useState, useRef} from 'react';
import '../css/main.css';
import {useOutsideClick} from '../hooks/useOutsideClick';

export const Head = (props) =>{
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () =>{
    console.log(isVisible);
    setIsVisible(!isVisible);
  }

  useOutsideClick(ref, () => {
    setIsVisible(!isVisible);
  });
  return(
    <div>
      <div class="header head-height navbar-dark sticky-top">
      	<div class="row">
      		<div class="col-lg-3 col-md-3 col-xs-3 center" >
      			<div onClick = {props.handleListClick} class="navbar-brand"><h2>КурсМейкер</h2><div/>
      		</div>
      		<div class="col-lg-9 col-md-9 col-xs-9" >
      			<div class="otstyp"></div>
            <a href="#" className={`cube ${props.isActive === 0 ? 'active-button' : ''}`}></a>
            <a href="#" className={`cube ${props.isActive === 1 ? 'active-button' : ''}`}></a>
            <a href="#" className={`cube ${props.isActive === 2 ? 'active-button' : ''}`}></a>

            {
              !isVisible && (
                <div onClick = {props.handleClick}><div class="cube-avatar"></div></div>
              )
            }


            {
                isVisible && (
                  <div ref={ref}>
                      <div class="pop_up_window" />
                  </div>
                )
                }
      			</div>
      		</div>
      	</div>
      </div>
    </div>
  )
}
