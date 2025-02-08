import './App.css';
import transcriptPdf from './Local/transcript.pdf';
import cvPdf from './Local/CV.pdf';
import stickManVideo from './Local/stickMan.mp4';
import { Link } from 'react-scroll';
import { useState } from 'react';

function App() {
  const [modalContent, setModalContent] = useState(null);

  const closeModal = () => setModalContent(null);

  const courseDescriptions = {
    'BBM412': {
      title: "Computer Graphics",
      content: `• Learned fundamental concepts of computer graphics and rendering pipeline
                • Learned and mastered linear algebra.
                • Explored texture mapping and material properties.
                • Learned different shading techniques and how they work.
                • Learned about camera and lighting.`
    },
    'BBM414': {
      title: "Computer Graphics Lab",
      content: `• Wrote glsl shaders for different shading techniques.
                • Worked with transformations and matrix operations.
                • Implemented different shading techniques and PBR.`
    },
    'BBM401': {
      title: "Automata Theory",
      content: `• Learned about regex and finite automata
                • Explored context-free grammars and pushdown automata
                • Analyzed Turing machines and computability`
    }
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <h1>Emre Yegin</h1>
        <div className="nav-links">
          <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link>
          <Link to="education" spy={true} smooth={true} offset={-100} duration={500}>Education</Link>
          <Link to="projects" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link>
          <Link to="experience" spy={true} smooth={true} offset={-100} duration={500}>Experience</Link>
          <Link to="skills" spy={true} smooth={true} offset={-100} duration={500}>Skills</Link>
          <Link to="hobbies" spy={true} smooth={true} offset={-100} duration={500}>Interests & Hobbies</Link>
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* About Section */}
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>Hi, I'm Emre Yegin: 3rd year computer science student at Hacettepe University. I'm a game developer and interested in computer graphics.</p>
          <p>You can find my works at the 'Projects' section.</p>
          
          <div className="motivation-section">
            <h3>My Motivation</h3>
            <p>
              As a computer science student with a strong passion for game development and computer graphics, 
              I am driven by the opportunity to create immersive digital experiences. My dual perspective as 
              both a developer and avid gamer gives me unique insights into user experience and game mechanics. 
              My background in computer graphics, combined with my appreciation for gaming, cinema, and music, 
              enables me to approach development with both technical precision and creative vision. I'm 
              continuously expanding my expertise in C# and JavaScript while working on various projects that 
              challenge and refine my skills.
            </p>
            <a 
              href={cvPdf} 
              className="resume-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume →
            </a>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Hacettepe University</h3>
            <p>Computer Science</p>
            <p>2022 - Present</p>
            <p>GPA: 3.52</p>
            {/* Selected Courses Subsection */}
            <div className="courses-subsection">
              <h4>Selected Technical Electives</h4>
              <ul className="courses-list">
                {Object.entries(courseDescriptions).map(([courseCode, details]) => (
                  <li 
                    key={courseCode}
                    onClick={() => setModalContent({
                      title: `${courseCode} - ${details.title}`,
                      content: details.content
                    })}
                  >
                    {courseCode} - {details.title}
                  </li>
                ))}
              </ul>
              <a 
                href={transcriptPdf} 
                className="transcript-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Full Transcript →
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>PBR WebGL Renderer</h3>
              <p>A physically based rendering (PBR) implementation using WebGL and GLSL shaders. Features include dynamic lighting, material properties, and 3D model loading. Built with raw WebGL for optimal performance, using custom vertex and fragment shaders. Control the camera with mouse left, right, middle clicks.</p>
              <div className="tech-stack">
                <span>WebGL</span> • <span>GLSL</span> • <span>JavaScript</span> • <span>OBJ Loader</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/yeginemre/PBR-Demo" target="_blank" rel="noopener noreferrer">Source Code</a>
                <a href="https://yeginemre.github.io/PBR-Demo" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <button 
                  className="experience-btn" 
                  onClick={() => setModalContent({
                    title: "PBR WebGL Renderer Experience",
                    content: `• Implemented physically based rendering (PBR) algorithms from scratch using WebGL and glsl.
                             • Developed custom shaders for realistic material rendering
                             • Created an interactive camera system with mouse controls
                             • Learned how to load objects and material mapping.`
                  })}
                >
                  Experience
                </button>
              </div>
            </div>

            <div className="project-card">
              <h3>Three.js Game Demo</h3>
              <p>An interactive 3D game demo showcasing advanced graphics techniques. Built with Three.js for 3D rendering, Cannon-es for physics simulation, and dat.gui for runtime controls. Features custom GLSL shaders for effects like bump mapping, toon shading, and wave simulation. Press 'h' for help menu, 'x' and 'z' to change shaders.</p>
              <div className="tech-stack">
                <span>Three.js</span> • <span>Cannon-es</span> • <span>dat.gui</span> • <span>GLSL</span> • <span>JavaScript</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/yeginemre/Three.js-Demo" target="_blank" rel="noopener noreferrer">Source Code</a>
                <a href="https://yeginemre.github.io/Three.js-Demo" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <button 
                  className="experience-btn"
                  onClick={() => setModalContent({
                    title: "Three.js Game Demo Experience",
                    content: `• Developed a 3D game environment using Three.js framework
                             • Implemented custom shader programs for bump mapping, toon shading and wave simulation.
                             • Integrated physics engine using cannon-es for realistic object interactions
                             • Created an intuitive user interface with dat.gui
                             • Implemented camera controls, dynamic lighting and shadow systems`
                  })}
                >
                  Experience
                </button>
              </div>
            </div>

            <div className="project-card">
              <h3>Stick Fight</h3>
              <p>Showcase of 1 week progress of my hobby project: A 2D fighting game developed in Unity using C#. Created all animations using Unity's animation system and implemented custom character controllers.</p>
              <div className="tech-stack">
                <span>Unity</span> • <span>C#</span> • <span>Unity Animation</span> • <span>Unity Physics</span>
              </div>
              <div className="project-links">
                <a 
                  href={stickManVideo} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Showcase
                </a>
              </div>
            </div>
          </div>

          {/* Add Modal Component */}
          {modalContent && (
            <div className="modal-overlay" onClick={closeModal}>
              <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h3>{modalContent.title}</h3>
                <p>{modalContent.content}</p>
                <button className="modal-close" onClick={closeModal}>Close</button>
              </div>
            </div>
          )}
        </section>

        {/* Past Experience Section */}
        <section id="experience" className="section">
          <h2>Past Experience</h2>
          <div className="experience-item">
            <h3>Software Development Intern</h3>
            <h4>AGROSUS A.Ş.</h4>
            <p className="experience-date">Summer 2024</p>
            <ul className="experience-details">
              <li>Developed an API for IoT device key management system in livestock monitoring</li>
              <li>Implemented secure authentication and authorization mechanisms for IoT devices</li>
              <li>Worked with embedded systems and IoT infrastructure in agricultural technology</li>
            </ul>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <ul>
                <li>C#</li>
                <li>JavaScript</li>
                <li>C++</li>
                <li>Java</li>
                <li>Python</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Tools & Technologies</h3>
              <ul>
                <li>WebGL</li>
                <li>GLSL</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Three.js</li>
                <li>Cannon.js</li>
                <li>Dat.gui</li>
                <li>Blender</li>
                <li>Unity</li>
                <li>FL Studio</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Soft Skills</h3>
              <ul>
                <li>Problem Solving</li>
                <li>Creativity</li>
                <li>Leadership</li>
                <li>Team Collaboration</li>
                <li>Time Management</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Languages</h3>
              <ul>
                <li>Turkish (Native)</li>
                <li>English (Professional)</li>
                <li>German (Beginner)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Hobbies Section */}
        <section id="hobbies" className="section">
          <h2>Interests & Hobbies</h2>
          <div className="hobbies-grid">
            <div className="hobby-item">
              <h3>🎮 Gaming</h3>
              <p>Passionate about video games, board games and game development</p>
              <a 
                href="https://steamcommunity.com/id/yigin/" 
                className="hobby-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Steam Profile →
              </a>
            </div>
            <div className="hobby-item">
              <h3>🎵 Music</h3>
              <p>Playing piano and guitar. Enjoying various genres and discovering new artists</p>
              <a 
                href="https://open.spotify.com/user/shaolyz?si=akIdH_SNRg6XlDtZL4BqTg" 
                className="hobby-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Spotify Profile →
              </a>
            </div>
            <div className="hobby-item">
              <h3>🎬 Cinema</h3>
              <p>Watching and analyzing movies, especially sci-fi and thrillers</p>
              <a 
                href="https://boxd.it/3Scid" 
                className="hobby-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Letterboxd Profile →
              </a>
            </div>
            <div className="hobby-item">
              <h3>⚽ Sports</h3>
              <p>Running, swimming and bodybuilding</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <h2>Contact</h2>
          <div className="contact-info">
            <p>Email: emreygn11@gmail.com</p>
            <p>Phone: +90 553 549 49 04</p>
            <p>
              <a 
                href="https://www.linkedin.com/in/emre-yegin-bab083256/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                LinkedIn
              </a>
            </p>
            <p>
              <a 
                href="https://github.com/yeginemre" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                GitHub
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;