import { useState } from "react"
import BackGround from "./Components/BackGround"
import MainData from "./MainData"
function App() {

  const [Slider, setSlider] = useState(0)
  const [BgColor, setBgColor] = useState(MainData[Slider].BackGroundColor)
  return (
  <>
    <div  style={{ backgroundColor: BgColor }} className="bg-[#cce2c2] min-h-[100vh] font-bold text-[1.1rem]">
      <BackGround Slider={Slider} setSlider={setSlider} setBgColor={setBgColor} BgColor={BgColor}/>
    </div>
  </>
  )
}

export default App
