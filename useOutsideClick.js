
import { useEffect } from "react";

export const useOutsideClick = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClick;



const ref = useRef();
const [isVisible, setIsVisible] = useState(false)
const handleClick = () =>{
  console.log(isVisible);
  setIsVisible(!isVisible);
}

useOutsideClick(ref, () => {
  setIsVisible(!isVisible);
});


return (
  <div>
      {
        !isVisible && (
          <div onClick = {handleClick} style={{width:'100px', height:'100px', backgroundColor:'rgba(0,250,0,.2)'}}>Меню</div>
        )
      }


      {
          isVisible && (
            <div ref={ref} style={{width:'100px', height:'100px', backgroundColor:'rgba(0,250,0,.2)'}}>
                Компонент, кторый исчезает если нажимать мимо
            </div>
          )
      }


  </div>
);
