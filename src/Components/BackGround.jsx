import React from 'react'
import Header from './Header'
import Question from './Question'
import { useState } from 'react'

export default function BackGround({Slider, setSlider, BgColor, setBgColor,}) {
    const [Scoure, setScoure] = useState(0)
  return (
    <>
    <section className='flex flex-col gap-y-8 justify-center'>
        <Header Slider={Slider} Scoure={Scoure} />
        <Question BgColor={BgColor} setBgColor={setBgColor} bg Slider={Slider} setSlider={setSlider} Scoure={Scoure} setScoure={setScoure}/>
    </section>
    </>
  )
}
