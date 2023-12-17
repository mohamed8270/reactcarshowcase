import React from 'react'

const Scroll = () => {
  return (
    <div className='bg-cyan-950 h-[400px] w-auto justify-center'>
        <div>
        <h1 className='flex justify-center font-bold p-3 text-white text-[30px] underline underline-offset-[20px]'>Rent a luxuary Car</h1>
        </div>

        {/* imagediv */}

        <div className='flex mt-[50px] justify-center'>


        <div className='w-[330px] p-3 relative group'>
            <img src='https://th.bing.com/th/id/OIP.sHUFvitXt_4ZN4JhqHlFvwHaEK?rs=1&pid=ImgDetMain ' className='rounded-lg'></img>
            <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">JEEP</div>
        </div>
        <div className='w-[300px] p-3 relative group'>
            <img src='https://th.bing.com/th/id/OIP.ieqh_DJo1nEsEnQLLJN0zAHaEo?rs=1&pid=ImgDetMain' className='rounded-lg'></img>
            <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">MUSTANG</div>
        </div>
        <div className='w-[280px] p-3 relative group'>
            <img src='https://2.bp.blogspot.com/-XyAkeH6btnk/UrJs07tGP_I/AAAAAAAABKY/IPNirH8hcbM/s1600/Pagani-Huayra-sports-car3.jpg' className='rounded-lg'></img>
            <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">SPORTS CAR</div>
        </div>
        <div className='w-[300px] p-3 relative group'>
            <img src='https://th.bing.com/th/id/OIP.9fh-pACkfdXQmIIGVWSilwHaEq?rs=1&pid=ImgDetMain' className='rounded-lg'></img>
            <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">OFF-ROADER</div>
        </div>


        </div>

    </div>
  )
}

export default Scroll



