import {useCallback,useRef } from "react"
function useHookWithRefCallback(sliderValue) {
  const ref = useRef(null)

  const setRef = useCallback(node => {

    if (ref.current) {

      ref.current.style.transform = `rotate(${sliderValue*14}deg)`;
      console.log(ref.current)
    }
    // Save a reference to the node
    ref.current = node
  }, [sliderValue])
  
  return [setRef]
}
function Mid({ sliderValue }) {
   const [ref] = useHookWithRefCallback(sliderValue)


  return (
    <div className="mid d-flex">
      <div className="slider">
        <div className="curve"></div>
        <div className="line">
          <h1 className="route">
            <span ref={ref} className="circle"></span>
          </h1></div>
      </div>

      <div className="day-time d-flex">
        <div >Gün Doğumu <span>05:40</span></div>
        <div >Gün Batımı <span>17:45</span></div>
      </div>

      <div className="daily-info d-flex">
        <div>
          Hissedilen Sıcaklık
          <span>25,7°</span>
        </div>
        <div>
          Nem Durumu
          <span>80%</span>
        </div>
        <div>
          Yağmur Durumu
          <span>60%</span>
        </div>
        <div>
          Rüzgar Hızı
          <span>10km/s</span>
        </div>
      </div>
    </div>
  )
}

export default Mid