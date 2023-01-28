import Bottom from "./Bottom"
import Mid from "./Mid"
import Top from "./Top"

function Main({sliderValue}) {
  return (
    <div className="card d-flex">
        <Top/>
        <Mid sliderValue={sliderValue}/>
        <Bottom/>
    </div>
  )
}

export default Main