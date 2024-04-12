import React from 'react'

const Projects = ({id}) => {
  const projects=[
    {
      imageUrl:'https://res.cloudinary.com/dkwftase4/image/upload/v1711373464/Screenshot_2024-03-25_183643_wcfsfr.png',
      projectName:'Library Management',
      projectLink:'https://library-management-ten-gilt.vercel.app/',
      codeLink:'https://github.com/MichealGeorgeJ/Library-Management'
    },
    {
      imageUrl:'https://res.cloudinary.com/dkwftase4/image/upload/v1711373457/Screenshot_2024-03-25_184152_onrlbb.png',
      projectName:'ToDo App',
      projectLink:'https://library-management-ten-gilt.vercel.app/',
      codeLink:'https://to-do-iota-three.vercel.app/'
    },
    {
      imageUrl:'https://res.cloudinary.com/dkwftase4/image/upload/v1711373457/Screenshot_2024-03-25_185750_w1ks7y.png',
      projectName:'Employee Management',
      projectLink:'https://users-eosin-chi.vercel.app/',
      codeLink:'https://github.com/MichealGeorgeJ/Users'
    }

  ]
  return (
    <div  id={id} >
      <div  className="container p-5 ">
        <div className='d-flex justify-content-center'>
          <h1>Projects</h1>
        </div>
        <div className="row d-flex justify-content-between">
          {
            projects.map((project,id)=>(
              <div key={id} className="col-lg-4 col-sm-6 mb-4  ">
            <div style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderRadius:".5rem"}} className="card projects-card h-100">
              <div  className='d-flex align-items-center justify-content-center image-card '>
                <img style={{border:"1px solid #66ccff"}} className='card-img-top p-2'src={project.imageUrl} alt="image" />

              </div>
              <div className="card-body d-flex flex-column align-items-center ">
                <h3 style={{color:"#66ccff"}}> {project.projectName} </h3>
                <p> <a style={{textDecoration:"None",color:"black"}} href={project.projectLink}>view</a></p>
                  <h3> <a style={{textDecoration:"None",color:"black"}} href={project.codeLink}><i className="fa-solid fa-code"></i></a></h3>
                
              </div>
            </div>
          </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects