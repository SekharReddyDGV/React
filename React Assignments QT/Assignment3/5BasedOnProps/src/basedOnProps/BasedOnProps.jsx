
import React from 'react'
import "./BasedOnProps.css"

function BasedOnProps({status}) {
  return (
    <div className='content'>
      {status === "success" ? (
        <div className='div1'>Operation Successful</div>
      ) : status === "error" ? (
        <div className='div2'>Operation Failed</div>
      ) : (
        <div className='div3'>"Pending..."</div>
      )}
    </div>
  )
}

export default BasedOnProps;