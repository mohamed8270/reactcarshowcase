import React from 'react'

const Bodysection = () => {
  return (
    <div className='bg-[#86ABD4]'>
        <div className='justify-center items-center'>
        <h1 className='text-white text-[35px] font-bold underline underline-offset-8 text-center'>Browse by Destination</h1>
        </div>
        <p className='text-white text-center'> Get ready to hit the road with selection of our rental cars by Destination</p>
        
        
        {/* image div */}
        <div>



            <div className='w-[200px] h-[300px]'> 
                <img src='https://assets.rockettes.com/wp-content/uploads/2016/06/empire-state-building-nys-850x1024.jpg'></img>
            </div>

            <div className='w-[100px] h-[100px]'>
                <img src='https://cdn.pixabay.com/photo/2014/06/06/09/36/sydney-opera-house-363244_1280.jpg'></img>
            </div>



        </div>




    </div>
  )
}

export default Bodysection