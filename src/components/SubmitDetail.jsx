import React from 'react'
import Headeing from './Headeing'

const SubmitDetail = () => {
  return (
    <div className='mt-5 text-center mb-8'>
    <Headeing text1={"Submitted"} text2={"Data"} />
    
      <p className='mt-3'>The data submitted by users will be displayed below</p>
      <button type="button" className="mt-3 text-white bg-[#007AFF] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">save changes</button>

    </div>
  )
}

export default SubmitDetail