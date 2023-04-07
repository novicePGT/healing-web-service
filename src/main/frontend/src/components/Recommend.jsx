import React from 'react'

const Recommend = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[50%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
            <h3 className='text-2xl font-bold'>I recommend it to you</h3>
            <p className='pt-4'>우리는 한명한명의 방문자 여러분을 모두 환영해요 !!</p>
            <p>아침, 오후, 저녁 시간에 따른 배경은 물론 개인에 맞는 배경을 제공하고자 노력해요..</p>
            <p className='pb-4'>앞으로 더욱 좋은 서비스를 제공하기 위해 회원가입에 감사드립니다. 😀</p>
        </div>

        <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img className='object-cover w-full h-full' src="https://cdn.pixabay.com/photo/2017/11/04/08/14/tree-2916763__480.jpg" alt="" />
            <img className='row-span-2 object-cover w-full h-full' src="https://cdn.pixabay.com/photo/2017/01/14/13/59/castelmezzano-1979546__480.jpg" alt="" />
            <img className='object-cover w-full h-full' src="https://cdn.pixabay.com/photo/2022/10/23/02/26/hotel-7540353__480.jpg" alt="" />
        </div>
    </div>
  )
}

export default Recommend