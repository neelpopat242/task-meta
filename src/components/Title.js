import React from 'react'
import './Title.css'
const Title = () => {
  return (
    <div  className='css-title' style={{height : "300px"}}>
      <div className='row align-items-center'>
        <div className='col-4'>

        </div>
        <div className='col-4 text-center text-white' >
        <h1 style={{marginTop: "50px"}}>Title</h1>
        <small>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum v 
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
        </small>
        <br/>
        <button type='button' className='btn btn-light my-2'>Read More</button>
        </div>
        

        
      </div>
    </div>
  )
}

export default Title