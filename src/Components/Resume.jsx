import React from 'react'

const Resume = ({id}) => {
  return (
    <div id={id}>
      <div className="container p-5">
      <div className='d-flex justify-content-center'>
            <h1>Resume</h1>
          </div>
        <div className="row d-flex justify-content-center">
          
          <div className="col-lg-8 col-sm-12">
            <div className="card p-5">
             
              <div >  <img className='card-img-top' src="https://res.cloudinary.com/dkwftase4/image/upload/v1711452486/MERN_STACK_mdvbb7.jpg" alt="" /></div>
           <div className=' d-flex justify-content-end mt-5'>
           <button style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: ".5rem",backgroundColor:"#66ccff" }} className="btn  "> <a style={{textDecoration:"none",color:"white"}} href="https://res.cloudinary.com/dkwftase4/image/upload/fl_attachment/MERN_STACK_mdvbb7.jpg">Download</a></button>
           </div>
               
            </div>
          </div>
        </div>
      </div>
    
    
    </div>
  )
}

export default Resume