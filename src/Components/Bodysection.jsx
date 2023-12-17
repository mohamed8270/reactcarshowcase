import React from 'react'

const Bodysection = () => {
  return (
    <div className='bg-[#637d9b]'>
        <div className='justify-center items-center'>
        <h1 className='text-white text-[35px] font-bold underline underline-offset-8 text-center'>Browse by Destination</h1>
        </div>
        <p className='text-white text-center'> Get ready to hit the road with selection of our rental cars by Destination</p>
        
        
        {/* image div */}
        <div className='p-3 flex justify-center'>



            <div className=' p-3 flex gap-3'> 
                <div className='w-[200px] h-[240px]'>
                <div className='mb-2 relative group'>
                <img src='https://assets.rockettes.com/wp-content/uploads/2016/06/empire-state-building-nys-850x1024.jpg' className='rounded-[20px]'></img>
                  <div className='opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 bottom-0 flex justify-center items-end text-xl text-white font-semibold'>New york</div>
                </div>


                <div className='flex gap-3'>
                    <div className=' h-[100px] relative group'>
                        <img src='https://cdn.pixabay.com/photo/2014/06/06/09/36/sydney-opera-house-363244_1280.jpg' className='rounded-[20px] h-[82px] w-[130px]'></img>
                        <div className='opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 bottom-0 flex justify-center items-end text-xl text-white font-semibold'>Tornoto</div>

                    </div>

                   <div className=' h-[100px] relative group'>
                       <img src='https://cdn.britannica.com/93/94493-050-35524FED/Toronto.jpg' className='h-[82px] w-[130px] rounded-[20px]'></img>
                       <div className='opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 bottom-0 flex justify-center items-end text-xl text-white font-semibold'>Sydney</div>
 
                  
                  </div>
                </div>
                
                
                </div>


                <div className='w-[250px] relative group'>
                    <img src='https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8fDA%3D' className='h-[330px] w-[700px] rounded-[20px]'></img>
                    <div className='opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 bottom-0 flex justify-center items-end text-xl text-white font-semibold'>Tokyo</div>
 
                </div>

                <div className='h-[300px] p-1 '>
                    <div className='h-[150px] w-[250px] mb-3 relative group'>
                      <img src='https://media.istockphoto.com/id/493223692/photo/milan-cathedral-italy.jpg?s=612x612&w=0&k=20&c=35HLzOeor-vAWdcv5SvpBcnRECAmpzjeqh28uUzk-to=' className='w-[280px] h-[150px] rounded-[20px]'></img>
                          <div className='opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 bottom-0 flex justify-center items-end text-xl text-white font-semibold'>Milan</div>

                    </div>
                    <div  className='h-[150px] w-[250px] relative group'>
                        <img src='https://www.shutterstock.com/image-photo/panoramic-view-berlin-city-center-600nw-1174014040.jpg' className='w-[320px] h-[160px] rounded-[20px]' ></img>
                          <div className='opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 bottom-0 flex justify-center items-end text-xl text-white font-semibold'>Berlin</div>

                    </div>
                </div>


                <div className='relative group'>

                    <img src='https://i.pinimg.com/originals/80/2e/69/802e697ea9fce502b3d8b482d587b9a1.jpg' className='w-[300px] h-[325px] rounded-[20px]'></img>
                        <div className='opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 bottom-0 flex justify-center items-end text-xl text-white  font-semibold'>Paris</div>


                </div>

            </div>

            

            



        </div>




    </div>
  )
}

export default Bodysection