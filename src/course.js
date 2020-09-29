import logo from './logo.svg';
import './App.css';
import React, {useState, useRef} from 'react';
import {Head} from './player.page/head.js';
import {Navigation} from './player.page/navigation.js';
import {Content} from './player.page/content.js';
import {useOutsideClick} from './hooks/useOutsideClick';
import {Main_File} from "./main_file";
import './css/online_course.css';
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

export const Course = (props) =>{
  return (
    <div>
    <div class="header2">
      <a href="#"><div><img class="center padding" src={logo1}/></div></a>
      <a href="#"><img class="center padding1" src={vector}/></a>
      <a href="#"><img class="center padding1" src={vector1}/></a>
      <a href="#"><img class="center padding1" src={vector2}/></a>
      <a href="#"><img class="center padding1" src={vector3}/></a>

      <a href="#"><img class="end padding" src={vector4}/></a>
    </div>
    <div class="header">
      <a href="#"><div><img class="center padding" src={logo1}/></div></a>
      <a href="#"><img class="center padding" src={vector}/></a>
      <a href="#"><img class="center padding" src={vector1}/></a>
      <a href="#"><img class="center padding" src={vector2}/></a>
      <a href="#"><img class="center padding" src={vector3}/></a>

      <a href="#"><img class="end padding" src={vector4}/></a>
    </div>


    <div class="all_width">
      <div class="row">
        <div class="col-lg-2 col-md-2 col-sm-2">

        </div>


        <div class="col-md-6 col-lg-6 col-xs-12">
          <div class="men">
            <div class="hello">
              <h4>Приветствую, Нияз!<br/> Рады вас снова видеть!</h4>
            </div>
            <div class=""><img class="ill"src={illustration}/></div>
          </div>


          <div class="my_course">
            <div class="cube center">
              <img src={group23} />
            </div>
            <p class="font_width center">Разговорный</p>
            <img src={group68}/>
            <a onClick ={props.handleClick} href="#" class="black_button center">
              <p>Продолжить</p>
            </a>
          </div>

          <div style = {{color: 'black'}}class="leson padding">
            <h2>Уроки</h2>



          </div>
          <div class="navigat float_left">
            <p class="font_width1">Все Уроки</p>
            <p>Новые уроки</p>
            <p>По рейтингу</p>
            <p>По популярности</p>
          </div>
          <div class="lesons">
            <div class="cube center">
              <img src={book1} />
            </div>
            <p class="font_width">Известные произведения</p>
            <a href="#" class="start center">
              <p>Посмотреть урок</p>
            </a>
          </div>


          <div class="lesons">
            <div class="cube center">
              <img src={speechbubble1}/>
            </div>
            <p class="font_width">Разговорный</p>
            <a href="#" class="start center">
              <p>Посмотреть урок</p>
            </a>
          </div>
          <div class="lesons">


            <div class="cube center">
              <img src={feedback1}/>
            </div>
            <p class="font_width">Поведение в гос. учер. </p>
            <a href="#" class="start center">
              <p>Посмотреть урок</p>
            </a>
          </div>


          <div class="lesons">
            <div class="cube center">
              <img src={abc1} />
            </div>
            <p class="font_width">Орфография  Б1</p>
            <a href="#" class="start center">
              <p>Посмотреть урок</p>
            </a>
          </div>


          <div class="lesons">
            <div class="cube center">
              <img src={test1} />
            </div>
            <p class="font_width">Pазбор экзамена 2</p>
            <a href="#" class="start center">
              <p>Посмотреть урок</p>
            </a>

          </div>
        </div>
        <div class="col-md-4 col-lg-4 col-xs-12">
          <div class="complete">
          <div class="ter center culmn">
            <h1>11</h1>
            <h6 class="center wi">УРОКОВ  ПРОЙДЕНО</h6>
          </div>
          <div class="ter center culmn">
            <h1>4</h1>
            <h6 class="center wi">УРОКА В ПРОЦЕССЕ</h6>
          </div>
          </div>

          <h1  style ={{color:'black'}} class="leson">Ваша статистика</h1>
          <div class="navigat float_left">
            <p class="font_width1">Часы обучения</p>
            <p>Мои уроки</p>
          </div>
          <img src={group61} class="width_100"/>
          <div class="price">
            <div>
              <div class="culmn">
              <h3 class="center">Изучайте больше!</h3>
      <p class="left">Откройте больше уроков всего
  за 800 рублей в неделю</p>
  </div>
            </div>
            <div class="right">
              <img src={group48}/>
            </div>

          </div>
        </div>
        </div>
      </div>
      </div>
  )
}
