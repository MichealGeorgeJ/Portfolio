import React from 'react'

const Resume = ({id,className}) => {
  return (
    <div id={id}>
      <div className="container ">
      <div className='d-flex justify-content-center'>
            <h1>Resume</h1>
          </div>
        <div className="row d-flex justify-content-center">
          
          <div className="col-lg-8 col-sm-12">
            <div className="card ">
             
              <div >  <img className='card-img-top' src="https://res.cloudinary.com/dkwftase4/image/upload/v1712920807/White_and_Beige_Minimalist_Designer_Professional_Cv_Resume_3_1_p57ljt.jpg" alt="" /></div>
           <div className=' d-flex justify-content-end mr-5 '>
           <button style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: ".5rem",backgroundColor:"#66ccff" }} className="btn  "> <a style={{textDecoration:"none",color:"white"}} href="https://res.cloudinary.com/dkwftase4/image/upload/fl_attachment/White_and_Beige_Minimalist_Designer_Professional_Cv_Resume_3_1_p57ljt.jpg">Download</a></button>
           </div>
           
            </div>
            <div  className="col mt-5">
              <div className="d-flex justify-content-center">
              <h1>Certificate</h1>
              </div>
            <div className="card">
              <img src="https://res.cloudinary.com/dkwftase4/image/upload/v1712921662/GuviCertification_-_15Gu513S1U6777i014_1_rg4ufl.png" alt="" className="card-img-top" />
            </div>
            </div>
          </div>
        </div>
      </div>
    
    
    </div>
  )
}

export default Resume