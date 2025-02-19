import React from 'react'
import Logo from "../assets/Images/Logo.png"
import MainData from '../MainData'


export default function Header({Slider, Scoure}) {
  return (
   <>
            <header>

                <section className='container px-[.5rem]  flex mx-auto flex-col py-4 gap-y-[3rem]'>

                <div className='w-full flex justify-start '>
                    <div className='h-[5rem]'><img src={Logo} alt="" /></div>
                </div>

                <div>
                    <div className=' flex items-center justify-between'>
                        <div className='px-4 py-2 rounded-[.3rem] flex items-center justify-center bg-[#ffc517] font-bold text-xl' ><h1>{`${Scoure} / ${MainData.length}`}</h1></div>
                        <div className='px-4 py-2 rounded-[.3rem] flex items-center justify-center bg-[#ffc517] font-bold text-xl' ><h1>{`${Slider + 1 } / ${MainData.length}`}</h1></div>
                    </div>
                </div>
                </section>

            </header>
   </>
  )
}
