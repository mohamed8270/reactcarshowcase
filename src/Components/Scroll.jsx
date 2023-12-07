import React from 'react'

const Scroll = () => {
  return (
    <div className='bg-cyan-950 h-[400px] w-auto'>
        <div>
        <h1 className='flex justify-center font-bold p-3 text-white text-[30px] underline underline-offset-[20px]'>Rent a luxuary Car</h1>
        </div>

        {/* imagediv */}

        <div className='flex mt-[60px]'>


        <div className='w-[330px] p-3'>
            <img src='https://th.bing.com/th/id/OIP.sHUFvitXt_4ZN4JhqHlFvwHaEK?rs=1&pid=ImgDetMain ' className='rounded-lg'></img>
        </div>
        <div className='w-[300px] p-3'>
            <img src='https://th.bing.com/th/id/OIP.ieqh_DJo1nEsEnQLLJN0zAHaEo?rs=1&pid=ImgDetMain' className='rounded-lg'></img>
        </div>
        <div className='w-[280px] p-3'>
            <img src='https://2.bp.blogspot.com/-XyAkeH6btnk/UrJs07tGP_I/AAAAAAAABKY/IPNirH8hcbM/s1600/Pagani-Huayra-sports-car3.jpg' className='rounded-lg'></img>
        </div>
        <div className='w-[300px] p-3'>
            <img src='https://th.bing.com/th/id/OIP.9fh-pACkfdXQmIIGVWSilwHaEq?rs=1&pid=ImgDetMain' className='rounded-lg'></img>
        </div>


        </div>

    </div>
  )
}

export default Scroll



