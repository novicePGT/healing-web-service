import React from 'react'

const Brazil = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        {/* Left Image */}
        <div className='grid grid-cols-2 grid-rows-6 h-[100vh]'>
            <img className='row-span-3 object-cover w-full h-full p-1' src="https://cdn.pixabay.com/photo/2017/01/08/19/30/rio-de-janeiro-1963744__480.jpg" alt="" />
            <img className='row-span-2 object-cover w-full h-full p-1' src="https://cdn.pixabay.com/photo/2017/01/18/22/27/rio-1991056__480.jpg" alt="" />
            <img className='row-span-2 object-cover w-full h-full p-1' src="https://cdn.pixabay.com/photo/2019/08/25/20/42/sunset-4430276__480.jpg" alt="" />
            <img className='row-span-3 object-cover w-full h-full p-1' src="https://cdn.pixabay.com/photo/2014/09/21/21/39/iguazu-falls-455610__480.jpg" alt="" />
            <img className='row-span-2 object-cover w-full h-full p-1' src="https://cdn.pixabay.com/photo/2016/07/22/03/27/rio-de-janeiro-1534089__480.jpg" alt="" />
        </div>
        {/* Right Image*/}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-vold'>Stimulate your sensitivity.</h3>
            <p className='text-2xl py-6'>고화질의 영상 및 사진으로 업무에 집중해보세요.</p>
            <p>업무가 아니더라도 좋아요 ~ 무엇이든지 우리와 함께 해보는건 어떠세요 ?</p>
            <p className='pb-6'>꾸준한 업데이트와 감성적인 여러 배경들로 서비스할게요 !!</p>
            <div>
                <button className='border-black mr-6 hover:shadow-xl'>Show More</button>
            </div>    
        </div>
    </div>
  )
}

export default Brazil