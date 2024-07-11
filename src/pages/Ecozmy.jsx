import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import img from "./homeimg.jpg"
import HighLightText from '../components/HighLightText'
import MDBFooter from '../components/MDBFooter'
import hnm from "./hnm.png"
import aln from "./allen.jpg"
import park from "./park.png"

function Ecozmy() {
  return (
   <>
            <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center
                 justify-between'>
              <Link to={"/home"}>
                <div className='group mt-10 p-1 mx-auto rounded-full bg-slate-400 
                 text-richblack-200 transition-all duration-200 hover:scale-95 w-fit'>
                    
                    <div className='flex flex-row items-center text-center  px-10 py-[4px] rounded-full font-bold
                    transition-all duration-200 group-hover:bg-richblack-900 gap-2
                    '>
                        {/* <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur"></div> */}
                        <p className='mt-[1px]'>SHOP WITH US</p>
                        <FaArrowRight/>
                    
                    </div>
                </div>
              </Link>
              </div>



        {/* section 1 */}
        <div className='flex flex-col md:flex-row lg:flex-row gap-5 items-center mt-20'>
              {/* left */}
              <div className='w-[57%] items-center md:w-[45%] lg:w-[45%] flex flex-col gap-4 mx-8 text-bold font-inter text-2xl
                 text-center
                 bg-gradient-to-r from-white to-slate-300 rounded-lg'>
                    {/* image */}
                    <div className=' items-center '>
                           
                            <div>
                              <HighLightText text={"HOME APPLIANCES"}/>
                          </div>
                    </div>
                    <div className=' items-center'>

                            <div>
                            <HighLightText text={"WOMEN's STORE"}/>
                          </div>
                    </div>
                    <div className=' flex items-center  flex-row gap-4'>
                           
                            <div>
                            <HighLightText text={"MEN's STORE"}/>
                          </div>
                    </div>
                    <div className=' flex items-center  flex-row gap-4'>
                           
                           <div>
                           <HighLightText text={"HEALTH CARE"}/>
                         </div>
                   </div>
                   <div className=' flex items-center  flex-row gap-4'>
                           
                           <div>
                           <HighLightText text={"KID's STORE"}/>
                         </div>
                   </div>
                    <div className=' flex items-center  flex-row gap-4'>

                            <div>
                            <HighLightText text={"ELECTRONIC ITEMS"}/>
                          </div>
                    </div>
              </div>
             
              {/* right */}
              <div className='relative shadow-2xl max-w-lg rounded-2xl'>
                 <img src={img} alt='abcd'
                 className='shadow-2xl object-cover h-fit  rounded-2xl'/>
                    
                    <div className='absolute bg-cyan-700 flex flex-row text-white py-10 uppercase
                      left-[50%]  translate-x-[-50%] translate-y-[-40%]  text-center justify-center border-r-2 shadow-md rounded-xl'>
                        <div className='flex flex-row gap-8 item-center px-7 rounded-xl'>
                           <p className='font-bold text-md'>FREE DELIVERY</p>
                           <p className='text-md font-bold'>EASY RETURN</p>
                            
                        </div>
                       

                    </div>
              </div>
              </div>

              {/* section 2 */}
         <div className='text-center pt-28 text-3xl font-bold '>
            <h1>TOP <HighLightText text={"BRANDS"}/></h1>
            <div className='mx-10 justify-between flex flex-col lg:flex-row mt-6 gap-4'>
                <img src={hnm} alt="hnm" className='rounded-2xl shadow-2xl'/>
                <img src={aln} alt="aln" className='rounded-2xl shadow-2xl'/>
                <img src={park} alt="park" className='rounded-2xl shadow-2xl'/>
            </div>
         </div>
    
        
        <div className='mt-16'>
        <MDBFooter/>
        </div>
   </>
  ) 
}

export default Ecozmy