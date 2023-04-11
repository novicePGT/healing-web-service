import React from 'react'

const Objectives = () => {
  const sendRequest = () => {
    console.log('Sending request...')
    // 서버나 API 요청 로직 구현
  }

  return (
    <div className='max-w[900px] m-auto px-4 py-12 flex flex-wrap justify-between'>
      <button className='text-lg font-bold text-gray-700 border border-transparent' onClick={sendRequest}>Brazil</button>
      <button className='text-lg font-bold text-gray-700 border border-transparent' onClick={sendRequest}>Russia</button>
      <button className='text-lg font-bold text-gray-700 border border-transparent' onClick={sendRequest}>Sweden</button>
      <button className='text-lg font-bold text-gray-700 border border-transparent' onClick={sendRequest}>France</button>
      <button className='text-lg font-bold text-gray-700 border border-transparent' onClick={sendRequest}>Argentina</button>
    </div>
  )
}

export default Objectives