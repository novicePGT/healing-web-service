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
        <div className='flex flex-col h-full justify-center items-center'>
            <h3 className='text-5xl md:text-6xl font-vold'>오늘의 브라질</h3>
            <p className='text-2xl py-6'>눈물로 끝난 브라질의 월드컵...치치 감독 크로아티전 패배 후 사퇴</p>
            <p>이렇게 끝날 것라고 아무도 예상하지 못했다. 월드컵 우승후보 브라질이 9일(현지시각) 카타르 에듀케이션 시티 스타디움에서 펼쳐진 크로아티아와의 8강전에서 승부차기 끝에 패배(1-1, PK 2-4)했다.</p>
            <div>
                <button className='border-black mr-6 mt-4 hover:shadow-xl'>다른 뉴스 보기</button>
            </div>    
        </div>
    </div>
  )
}

export default Brazil