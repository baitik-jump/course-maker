.................начало описания работы кнопок..................
// Объявление стэйтов для кнопок
const [isActive, setIsActive] = useState(0);
// создание функции, которая будет вызываться при клике
const handleClick = () => {
  console.log(isActive);
  if (isActive < 3) {
    setIsActive(isActive+1)
  } else {
      setIsActive(1)
  }
}
.................конец..................


................пример обьявления кнопок........
// обьяснение:
// className = 'active' если props.isActive = n иначе className = ''

<div  className={props.isActive === 1 ? 'active' : ''}> Кнопка 1</div>
<div  className={props.isActive === 2 ? 'active' : ''}>Кнопка 2</div>
<div  className={props.isActive === 3 ? 'active' : ''}> Кнопка 3</div>
