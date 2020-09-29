import logo from './logo.svg';
import './App.css';
import React, {useState, useRef} from 'react';
import {Head} from './player.page/head.js';
import {Navigation} from './player.page/navigation.js';
import {Content} from './player.page/content.js';
import {useOutsideClick} from './hooks/useOutsideClick';
import abc1 from "./svg/abc1.svg";
import book1 from "./svg/book1.svg";
import dislike from "./svg/dislike1.png";
import dislike1 from "./svg/dislike1.svg";
import feedback1 from "./svg/feedback1.svg";
import group23 from "./svg/group23.svg";
import group48 from "./svg/group48.svg";
import group61 from "./svg/group61.svg";
import group68 from "./svg/group68.svg";
import illustration from "./svg/illustration.svg";
import like1 from "./svg/like1.png";
import logo1 from "./svg/logo.svg";
import maskGroup from "./svg/maskGroup.png";
import speechbubble1 from "./svg/speechbubble1.svg";
import test1 from "./svg/test1.svg";
import testfalse from "./svg/testfalse.svg";
import testtrue from "./svg/testtrue.svg";
import textfalse from "./svg/textfalse.svg";
import texttrue from "./svg/texttrue.svg";
import union from "./svg/union.png";
import vector from "./svg/vector.svg";
import vector1 from "./svg/vector1.svg";
import vector2 from "./svg/vector2.svg";
import vector3 from "./svg/vector3.svg";
import vector4 from "./svg/vector4.svg";
import videofalse from "./svg/videofalse.svg";
import videotrue from "./svg/videotrue.svg";

export const Main_File = (props) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const handleOutClick = () =>{
    console.log(isVisible);
    setIsVisible(!isVisible);
  }

  useOutsideClick(ref, () => {
    setIsVisible(!isVisible);
  });
  const [isActive, setIsActive] = useState(0);
  const handleChange = () => {
  	console.log(isActive);
  	if (isActive < 6) {
  		setIsActive(isActive+1)
  	} else {
  			setIsActive(0)
  	}
  }
  return (
  <div>
  <div class="header1 head-height navbar-dark sticky-top">
  		<div class="center width11" >
  			<a onClick = {props.handleClick} href="#" class="navbar-brand"><h2>КурсМейкер</h2></a>
  		</div>
  		<div class="width111" >
  			<div class="otstyp"></div>
  			<a href="#"><img class="cube1" src={videofalse}/></a>
  			<a href="#"><img class="cube1" src={textfalse}/></a>
  			<a href="#"><img class="cube1" src={testfalse}/></a>
  			<a href="#"><img class="cube1" src={videofalse}/></a>
  			<a href="#"><img class="cube1" src={textfalse}/></a>
  			<a href="#"><img class="cube1" src={testfalse}/></a>


  			{
          !isVisible && (
          <div onClick = {handleOutClick}>
            <a href="#"><img class="cube-avatar" src={maskGroup}/> </a>
          </div>
          )
        }

  	</div>
  </div>
  <hr/>

  {
    isVisible && (
  <div ref = {ref} class="pop_up_window">
  		<a class="black1" href="#"><h5>Профиль</h5></a>
  		<a class="black1" href="#"><h5>Настройки</h5></a>
  		<a class="black1" href="#"><h5>Выход</h5></a>
  </div>)
  }
  <div class="all_width1">
  	<div class="row">
  		<div class="col-lg-3 col-md-3 course_navigation">
  			<div class="course_block">
  				<a href="#" class="course_name"> <h4>Урок по информатике С++</h4></a>
  				<p class="progre">Прогресс по курсу : 101/102</p>
  			</div>
  			<hr class="hr_navigation"/>
  				<div class="lesons1">
  					<a href="#" class="leson1"><h6 class="w">1.1 Вводное занятие</h6></a>
  					<hr class="hr_navigation" />
  					<a href="#" class="leson1"><h6 class="w">1.2 Знакомство со средой разработки</h6></a>
  					<hr class="hr_navigation" />
  					<a href="#" class="leson1"><h6 class="w">1.3 Целые числа</h6></a>
  					<hr class="hr_navigation" />
  					<a href="#" class="leson1"><h6 class="w">1.4 Условный оператор</h6></a>
  					<hr class="hr_navigation" />
  					<a href="#" class="leson1"><h6 class="w">1.5 Цикл while</h6></a>
  					<hr class="hr_navigation" />
  					<a href="#" class="leson1"><h6 class="w">1.6 Действительные числа</h6></a>
  					<hr class="hr_navigation" />
  					<a href="#" class="leson1"><h6 class="w">1.7 Цикл for и массивы</h6></a>
  					<hr class="hr_navigation" />
  					<a href="#" class="leson1"><h6 class="w">1.8 Двумерные массивы</h6></a>
  					<hr class="hr_navigation" />
  					<a href="#" class="leson1"><h6 class="w">1.9 Функции и рекурсия</h6></a>
  					<hr class="hr_navigation" />

  					<a href="#" class="leson1"><h6 class="w">1.10 Строки и символы</h6></a>
  					<hr class="hr_navigation" />
  					<a href="#" class="leson1"><h6 class="w">1.11 Словари и множества</h6></a>
  					<hr class="hr_navigation" />
  					<a href="#" class="leson1"><h6 class="w">1.12 Стандартные алгоритмы STL</h6></a>




  				</div></div></div>
  		</div>

  		<div class="content">
  			<div class="punct_information">
  				<div class="information_name"><h6>1.1 Вводное занятие</h6></div>
  				<div class="information_step"><h6>3 из 6 шагов пройдено</h6></div>
  				<div class="information_bal"><h6>1 из 2 баллa  получен</h6></div>
  			</div>
  			<hr/>

  			<iframe class="video" src="https://www.youtube.com/embed/aYUBrPZOxzo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  	<div class="dislike_like_button">
  			<img class="dislike_like" src={union} />
  			<img class="dislike_like" src={dislike1} />
  			<div onClick = {handleChange} class="button center">
        Следующий шаг
  			   </div>
  		    </div>
  	   </div>
    </div>
  )
}
