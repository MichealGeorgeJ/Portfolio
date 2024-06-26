import React from 'react'

const Bio = ({id}) => {
  return (
    <div id={id}>
      <div className="container mt-5">
        <div className="row d-flex">
          <div className="col">
          
            <div className=" bio">
                        
                          
              <h3>About Me :</h3>
              <p>
              Combining my engineering background with my passion for coding, I thrive in creating efficient and scalable web applications. I love diving into complex problems and crafting elegant solutions that enhance user experiences. With a keen eye for detail and a dedication to continuous learning, I stay updated with the latest technologies and best practices in the rapidly evolving field of web development.
              </p>
              <h3>Certification :</h3>
              <p>Certified as a MERN Stack Developer by GUVI Geek Networks, affiliated with IIT Madras Incubation Company. Equipped with expertise in MongoDB, Express.js, React.js, and Node.js. Proficient in building dynamic web applications and implementing industry best practices. Excited to leverage skills for impactful solutions in technology.</p>
             
              <h3>Interests :</h3>
              <p>
              Outside of coding, I enjoy exploring new technologies, reading tech blogs, and participating in coding communities. I'm also passionate about contributing to open-source projects and volunteering my time to mentor aspiring developers.
              <br />
              Feel free to explore my portfolio to see examples of my work and projects I've contributed to. I'm excited about the opportunity to leverage my skills and experience as a Full Stack Developer to make meaningful contributions to innovative projects and teams.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bio