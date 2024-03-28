import React from 'react'

const Bio = ({id}) => {
  return (
    <div id={id}>
      <div className="container">
        <div className="row d-flex">
          <div className="col">
          <div className="d-flex justify-content-center">
          <h1>Bio</h1>
          </div>
            <div className=" bio">
             
              <p>Hello there! I'm ,<span className='text-primary'>Micheal George</span> a passionate Full Stack Developer with a diverse background in Mechanical Engineering and expertise in MERN stack development. I hold a Bachelor's degree in Mechanical Engineering, which has provided me with a strong foundation in problem-solving and analytical thinking.</p>
              <h3>Technical Skills :</h3>
              <ul>
                <li>Technical Skills :</li>
                <li>Database Technologies : MongoDB, MySQL</li>
                <li>Frameworks & Libraries : Express.js, Redux, Bootstrap</li>
                <li>Tools & Platforms : Git, Heroku, AWS</li>
                <li>Additional Skills : RESTful APIs, Responsive Web Design, Agile Methodologies</li>
              </ul>
              <h3>Certification :</h3>
              <ul>
                <li>
                Certified MERN Stack Developer
                </li>
              </ul>
              <h3>About Me :</h3>
              <p>
              Combining my engineering background with my passion for coding, I thrive in creating efficient and scalable web applications. I love diving into complex problems and crafting elegant solutions that enhance user experiences. With a keen eye for detail and a dedication to continuous learning, I stay updated with the latest technologies and best practices in the rapidly evolving field of web development.
              </p>
              <h3>Communication Skills :</h3>
              <p>
              Effective communication is key in any development project. I pride myself on my ability to convey complex technical concepts in a clear and concise manner, whether it's discussing project requirements with clients or collaborating with fellow developers in a team environment. I'm a proactive communicator who values feedback and fosters open dialogue to ensure successful project outcomes.


              </p>
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