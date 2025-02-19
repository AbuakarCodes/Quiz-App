import React, { useState } from "react";
import MainData from "../MainData";
import Button from "./Button";
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";

export default function Question({ Slider, setSlider, Scoure, setScoure, BgcColor, setBgColor }) {
  const [Answered, setAnswered] = useState(false);
  const [SlectedAnswer, setSlectedAnswer] = useState(null);

  useEffect(() => {
    setBgColor(MainData[Slider].BackGroundColor); 
  }, [Slider])
  
  function NextHandler() {
    setAnswered(false);
    if (Answered) {
        if (MainData.length - 1 > Slider) {
            setSlider(Slider + 1)
        }
    }else{
        toast.warn('Please chose an option', { position: "top-right", autoClose: 1000, hideProgressBar: false, closeOnClick: false, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", transition: Slide,
        });
    } 
  }

  function KeyPress(event) {
    if (event.key === "q") {
      NextHandler();
    }
  }

  function optionHandler(idx, isCorrect) {
    isCorrect ? setScoure( Scoure + 1 ) : 0
    setAnswered(true)
    setSlectedAnswer(idx)
  }

  return (
    <>

<ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Slide}
      />

      <section>
        <div className="container mx-auto  px-[.5rem] flex flex-col gap-y-8">
          <div className=" min-h-[7rem]  bg-[#ffffffa1] rounded-lg p-[1rem] ">
            <div className=" w-full h-full flex items-center ">
              <h1 className="">{MainData[Slider].Question}</h1>
            </div>
          </div>

          <div className="flex flex-col gap-y-7 w-full rounded-lg  p-[1rem] bg-[#ffffffa1] ">
            {MainData[Slider].Answers.map((element, idx) => {
              return <Button key={idx} idx={idx} element={element} Answered={Answered} optionHandler={optionHandler} SlectedAnswer={SlectedAnswer} />
            })}
          </div>

          <div className="ml-auto px-[.7rem]">
            <button onClick={NextHandler} onKeyDown={KeyPress} > 
              <h1 className="text-[#44b845] text-xl">Next</h1>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
