import React from 'react'
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

export default function Button({idx, element, Answered, optionHandler, SlectedAnswer}) {
  return (
    <>
     <button
                  onClick={(e) => {optionHandler(idx, element.isCorrect)}} key={idx}
                  className={` flex justify-between w-full py-[.7rem] rounded-md border-[2px] border-[#00000017] px-[1rem] 
                  autoFocus 
                    ${
                      Answered
                        ? element.isCorrect
                          ? " border-green-400 bg-green-100"
                          : SlectedAnswer === idx
                          ? "border-red-400 bg-red-100"
                          : ""
                        : ""
                    }
                `}
                >
                  <h1 className="text-left">{element.Option}</h1>
                  {(Answered && !element.isCorrect &&  SlectedAnswer === idx ) && <span className='text-red-700 flex items-center gap-x-3'>  You chose <span className='text-[1.3rem]'><RxCross2/> </span></span>}
                  {(Answered && element.isCorrect) && <span className="text-green-500 flex items-center gap-x-3"> Correct <span className='text-[1.5rem]'> <TiTick /> </span> </span>}
      </button>
    </>
  )
}
