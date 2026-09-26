import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="nav-container">

          <div className="logo">
            RJ<span> Portfolio</span>
            <div className="ambient-background">

  <div className="ambient-glow glow-1"></div>

  <div className="ambient-glow glow-2"></div>

  <div className="ambient-glow glow-3"></div>

  <div className="ambient-particle particle-1"></div>
  <div className="ambient-particle particle-2"></div>
  <div className="ambient-particle particle-3"></div>
  <div className="ambient-particle particle-4"></div>

</div>
          </div>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#certifications">Certifications</a>
            <a href="#education">Education</a>
            <a href="#extracurricular">Activities</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="nav-button">
            Let's Talk
          </a>

        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section className="hero" id="home">

        <div className="hero-container">

          {/* LEFT SIDE */}
          <div className="hero-content">

            <p className="hero-small-text">
               Hello, I'm
            </p>

            <h1>
              Romilda. J
            </h1>

            <h2>
              MERN Stack <span>Developer</span>
            </h2>

            <p className="hero-description">
             Computer Science Engineer & 
             MERN Stack Developer building responsive, 
             full-stack web applications with React, 
             Node.js, Express and MongoDB.
            </p>

            <div className="hero-buttons">

  <a href="#projects" className="primary-button">
    View My Work
    
  </a>

  <a
  href="/public/Resume.pdf"
  download
  className="secondary-button"
>
  Download Resume
  
</a>

</div>

<div className="social-links">

  <a
    href="https://github.com/Romildajayaraj"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/romilda-j/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    LinkedIn
  </a>

  <a
    href="mailto:romilda973j@gmail.com"
    aria-label="Email"
  >
    Email
  </a>

</div>

            <div className="hero-info">

              <div>
                <strong>3+</strong>
                <span>Projects</span>
              </div>

              <div>
                <strong>MERN</strong>
                <span>Stack</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Passion</span>
              </div>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="hero-image-section">

            <div className="hero-circle"></div>

            <div className="image-wrapper">

              <img
                src="/images/profile.png"
                alt="Romilda"
              />

            </div>

            <div className="floating-card card-one">
              
              <div>
                <strong>Web Developer</strong>
                <small>MERN Stack</small>
              </div>
            </div>

            <div className="floating-card card-two">
              
              <div>
                <strong>Clean Code</strong>
                <small>Modern UI</small>
              </div>
            </div>

          </div>

        </div>

      </section>

{/* ================= ABOUT SECTION ================= */}
<section className="about-section" id="about">

  <div className="section-container">

    {/* SECTION HEADING */}
    <div className="section-heading">
      <span>ABOUT ME</span>
      <h2>Turning Ideas Into <strong>Digital Experiences</strong></h2>
      <p>
        A little more about me, my journey and what I love building.
      </p>
    </div>


    {/* ABOUT CONTENT */}
    <div className="about-grid">

      {/* LEFT - ABOUT TEXT */}
      <div className="about-content">

        <div className="about-label">
          <span></span>
          Who I Am
        </div>

        <h3>
          I'm a passionate
          <span> MERN Stack Developer</span>
        </h3>

        <p>
          A passionate web developer who enjoys creating
          modern, responsive and user-friendly web applications.
          I love combining clean design with functional development
          to create meaningful digital experiences.
        </p>

        <p>
          My development journey has helped me work with technologies
          like React, JavaScript, Node.js, Express and MongoDB.
          I'm always interested in learning new technologies and
          improving my skills by building real-world projects.
        </p>

        <div className="about-tags">

          <span>JavaScript</span>
          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          

        </div>

      </div>


      {/* RIGHT - STATS */}
      <div className="about-stats">

        <div className="stat-card">

          <div className="stat-number">
            02<span>+</span>
          </div>

          <div className="stat-text">
            <strong>Major Project</strong>
            <p>Real-world web application</p>
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-number">
            05<span>+</span>
          </div>

          <div className="stat-text">
            <strong>Technologies</strong>
            <p>Modern development tools</p>
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-number">
            100<span>%</span>
          </div>

          <div className="stat-text">
            <strong>Learning Mindset</strong>
            <p>Always improving & exploring</p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>


{/* ================= SKILLS SECTION ================= */}
<section className="skills-section" id="skills">

  <div className="section-container">

    {/* SECTION HEADING */}
    <div className="section-heading skills-heading">

      <span>MY SKILLS</span>

      <h2>
        Technologies I <strong>Work With</strong>
      </h2>

      <p>
        The tools and technologies I use to build modern,
        scalable and user-friendly web applications.
      </p>

    </div>


    {/* SKILLS GRID */}
    <div className="skills-grid">


      {/* HTML */}
      <div className="skill-card">

        <div className="skill-icon html-icon">
          &lt;/&gt;
        </div>

        <div className="skill-info">
          <h3>HTML5</h3>

          <p>
            Semantic and accessible web structure
          </p>
        </div>

        <div className="skill-level">
          <div className="skill-progress">
            <span style={{ width: "90%" }}></span>
          </div>

          <small>90%</small>
        </div>

      </div>


      {/* CSS */}
      <div className="skill-card">

        <div className="skill-icon css-icon">
          #
        </div>

        <div className="skill-info">
          <h3>CSS3</h3>

          <p>
            Responsive layouts and modern UI styling
          </p>
        </div>

        <div className="skill-level">
          <div className="skill-progress">
            <span style={{ width: "85%" }}></span>
          </div>

          <small>85%</small>
        </div>

      </div>


      {/* JAVASCRIPT */}
      <div className="skill-card">

        <div className="skill-icon js-icon">
          JS
        </div>

        <div className="skill-info">
          <h3>JavaScript</h3>

          <p>
            Dynamic and interactive web applications
          </p>
        </div>

        <div className="skill-level">
          <div className="skill-progress">
            <span style={{ width: "85%" }}></span>
          </div>

          <small>85%</small>
        </div>

      </div>


      {/* REACT */}
      <div className="skill-card">

        <div className="skill-icon react-icon">
          *
        </div>

        <div className="skill-info">
          <h3>React.js</h3>

          <p>
            Component-based modern frontend development
          </p>
        </div>

        <div className="skill-level">
          <div className="skill-progress">
            <span style={{ width: "88%" }}></span>
          </div>

          <small>88%</small>
        </div>

      </div>


      {/* NODE */}
      <div className="skill-card">

        <div className="skill-icon node-icon">
          N
        </div>

        <div className="skill-info">
          <h3>Node.js</h3>

          <p>
            Server-side JavaScript and backend development
          </p>
        </div>

        <div className="skill-level">
          <div className="skill-progress">
            <span style={{ width: "80%" }}></span>
          </div>

          <small>80%</small>
        </div>

      </div>


      {/* EXPRESS */}
      <div className="skill-card">

        <div className="skill-icon express-icon">
          E
        </div>

        <div className="skill-info">
          <h3>Express.js</h3>

          <p>
            REST APIs and backend application development
          </p>
        </div>

        <div className="skill-level">
          <div className="skill-progress">
            <span style={{ width: "80%" }}></span>
          </div>

          <small>80%</small>
        </div>

      </div>


      {/* MONGODB */}
      <div className="skill-card">

        <div className="skill-icon mongo-icon">
          M
        </div>

        <div className="skill-info">
          <h3>MongoDB</h3>

          <p>
            NoSQL database and data management
          </p>
        </div>

        <div className="skill-level">
          <div className="skill-progress">
            <span style={{ width: "78%" }}></span>
          </div>

          <small>78%</small>
        </div>

      </div>


      {/* GIT */}
      <div className="skill-card">

        <div className="skill-icon git-icon">
          G
        </div>

        <div className="skill-info">
          <h3>Git & GitHub</h3>

          <p>
            Version control and collaborative development
          </p>
        </div>

        <div className="skill-level">
          <div className="skill-progress">
            <span style={{ width: "82%" }}></span>
          </div>

          <small>82%</small>
        </div>

      </div>

    </div>


    {/* BOTTOM MESSAGE */}
    <div className="skills-bottom">

    
      <p>
        Always learning. Always building. Always improving.
      </p>

     

    </div>

  </div>

</section>


{/* ================= PROJECTS SECTION ================= */}
<section className="projects-section" id="projects">

  <div className="section-container">

    {/* SECTION HEADING */}
    <div className="section-heading projects-heading">

      <span>MY PROJECTS</span>

      <h2>
        Things I've <strong>Built</strong>
      </h2>

      <p>
        From small interactive experiments to full-stack applications,
        here are some of the projects I've built while learning and
        developing my skills.
      </p>

    </div>


    {/* ================= FEATURED PROJECT ================= */}

    <article className="featured-project-card">

      <div className="featured-project-visual">

        <div className="auction-screen">

          <div className="auction-nav">
            <strong>Auction</strong>

            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="auction-body">

            <small>ONLINE AUCTION PLATFORM</small>

            <h3>
              Find. Bid. Win.
            </h3>

            <p>
              A complete platform for buying and selling
              products through online auctions.
            </p>

            <div className="auction-stats">

              <div>
                <strong>120+</strong>
                <small>Products</small>
              </div>

              <div>
                <strong>85+</strong>
                <small>Bids</small>
              </div>

              <div>
                <strong>24/7</strong>
                <small>Platform</small>
              </div>

            </div>

          </div>

        </div>

      </div>


      <div className="featured-project-content">

        <span className="project-label">
          FEATURED PROJECT · FULL STACK
        </span>

        <h3>
          Auction Platform
        </h3>

        <p>
          A full-stack online auction application where users can
          register, create auctions, browse products, place bids and
          manage their auction activities. The application includes
          authentication, product management, bidding functionality
          and a responsive user interface.
        </p>


        <div className="project-tech">

          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
         
        </div>


        <div className="featured-project-links">

          <a
            href="https://biddingnest.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
           
          </a>

          <a
            href="https://github.com/Romildajayaraj/AP-frontend"target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Frontend
                      </a>

            <a
            href="https://github.com/Romildajayaraj/AP-backend"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Backend
          </a>

        </div>

      </div>

    </article>


    {/* ================= OTHER PROJECTS ================= */}

    <div className="projects-subheading">

      <span>OTHER WORK</span>

      <p>
        Small projects, experiments and frontend builds
      </p>

    </div>


    <div className="projects-grid">


      {/* ================= PET ADOPTION ================= */}

      <article className="project-card">

        <div className="project-image pet-preview">

          <div className="pet-content">

            <span>FIND YOUR</span>

            <h3>
              Perfect Companion
            </h3>

            <div className="pet-pills">
              <i></i>
              <i></i>
              <i></i>
            </div>

            <div className="pet-button">
              Adopt Now
            </div>

          </div>

        </div>


        <div className="project-content">

          <span className="project-type">
            LANDING PAGE
          </span>

          <div className="project-title-row">

            <h3>
              Pet Adoption
            </h3>

            <span className="project-number">
              01
            </span>

          </div>

          <p>
            A warm and responsive pet adoption landing page
            designed to help users discover and adopt pets.
          </p>

          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Responsive UI</span>
          </div>

          <div className="project-links">

            <a
              href="https://pet-adoption-2012.netlify.app/"
             target="_blank"
            rel="noopener noreferrer"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/Romildajayaraj/Pet-Adoption"
              target="_blank"
            rel="noopener noreferrer"
            >
              GitHub
            </a>

          </div>

        </div>

      </article>


      {/* ================= CARD FLIPPING ================= */}

      <article className="project-card">

        <div className="project-image card-game-preview">

          <div className="playing-cards">

            <div className="playing-card">
              ?
            </div>

            <div className="playing-card flipped">
              *
            </div>

            <div className="playing-card">
              ?
            </div>

            <div className="playing-card flipped">
              @
            </div>

            <div className="playing-card">
              ?
            </div>

            <div className="playing-card flipped">
              .
            </div>

          </div>

        </div>


        <div className="project-content">

          <span className="project-type">
            JAVASCRIPT GAME
          </span>

          <div className="project-title-row">

            <h3>
              Card Flipping Game
            </h3>

            <span className="project-number">
              02
            </span>

          </div>

          <p>
            An interactive memory card game built with
            JavaScript featuring card flipping and matching
            gameplay.
          </p>

          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <div className="project-links">

            <a href="https://cardfliping.netlify.app/" 
            target="_blank"
            rel="noopener noreferrer">
              Live Demo
            </a>

            <a href="https://github.com/Romildajayaraj/Mini-project.01" target="_blank"
            rel="noopener noreferrer">
              GitHub
            </a>

          </div>

        </div>

      </article>


      {/* ================= ONLINE SELLING ================= */}

      <article className="project-card">

        <div className="project-image shopping-preview">

          <div className="shop-window">

            <div className="shop-header">
              Shop
            </div>

            <div className="shop-products">

              <div>
                <span></span>
                <small>Product</small>
              </div>

              <div>
                <span></span>
                <small>Product</small>
              </div>

              <div>
                <span></span>
                <small>Product</small>
              </div>

            </div>

          </div>

        </div>


        <div className="project-content">

          <span className="project-type">
            FRONTEND APPLICATION
          </span>

          <div className="project-title-row">

            <h3>
              Online Selling App
            </h3>

            <span className="project-number">
              03
            </span>

          </div>

          <p>
            A simple e-commerce style interface created to
            practice product layouts, navigation and shopping
            interactions.
          </p>

          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <div className="project-links">

            <a href="https://fakeyapp.netlify.app/" target="_blank"
            rel="noopener noreferrer">
              Live Demo
            </a>

            <a href="https://github.com/Romildajayaraj/react-project" target="_blank"
            rel="noopener noreferrer">
              GitHub
            </a>

          </div>

        </div>

      </article>


      {/* ================= INVOICE BUILDER ================= */}

      <article className="project-card">

        <div className="project-image invoice-preview">

          <div className="invoice-window">

            <div className="invoice-heading">
              <strong>INVOICE</strong>
              <span>#00124</span>
            </div>

            <div className="invoice-lines">

              <i></i>
              <i></i>
              <i></i>
              <i></i>

            </div>

            <div className="invoice-total">
              <span>Total</span>
              <strong>₹ 4,500</strong>
            </div>

          </div>

        </div>


        <div className="project-content">

          <span className="project-type">
            WEB TOOL
          </span>

          <div className="project-title-row">

            <h3>
              Invoice Builder
            </h3>

            <span className="project-number">
              04
            </span>

          </div>

          <p>
            A simple invoice generation tool that allows users
            to enter billing details and create a clean invoice.
          </p>

          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <div className="project-links">

            <a href="https://bill-forge.netlify.app/" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>

            <a href="https://github.com/Romildajayaraj/Invoice-hub" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>

          </div>

        </div>

      </article>


      {/* ================= MOVIE REVIEW ================= */}

      <article className="project-card">

        <div className="project-image movie-preview">

          <div className="movie-posters">

            <div className="movie-poster">
              <strong>FILM</strong>
            </div>

            <div className="movie-poster">
              <strong>REVIEW</strong>
            </div>

            <div className="movie-poster">
              <strong>2026</strong>
            </div>

          </div>

        </div>


        <div className="project-content">

          <span className="project-type">
            FRONTEND APPLICATION
          </span>

          <div className="project-title-row">

            <h3>
              Movie Review
            </h3>

            <span className="project-number">
              05
            </span>

          </div>

          <p>
            A movie browsing and review interface where users
            can explore movies and view ratings and reviews.
          </p>

          <div className="project-tech">
            <span>React.js</span>
            <span>JavaScript</span>
            <span>CSS</span>
            <span>API</span>
          </div>

          <div className="project-links">

            <a href="https://cinea-review.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
              Live Demo
            </a>

            <a href="https://github.com/Romildajayaraj/Movie-Review" 
            target="_blank"
            rel="noopener noreferrer">
              GitHub
            </a>

          </div>

        </div>

      </article>


      {/* ================= MORE PROJECTS ================= */}

      <article className="project-card more-project-card">

        <div className="more-project-content">

          <span className="project-type">
            MORE PROJECTS
          </span>

          <h3>
            Always Building
          </h3>

          <p>
            More experiments, ideas and applications
            are coming soon.
          </p>

          <a
            href="#contact"
            className="more-project-link"
          >
            Let's Connect
          </a>

        </div>

      </article>

    </div>


    {/* BOTTOM */}
    <div className="projects-bottom">

    

      <p>
        Learn. Build. Improve. Repeat.
      </p>

    

    </div>

  </div>

</section>

{/* ================= EXPERIENCE SECTION ================= */}
<section className="experience-section" id="experience">

  <div className="section-container">

    {/* SECTION HEADING */}
    <div className="section-heading">

      <span>EXPERIENCE</span>

      <h2>
        Where I've <strong>Worked</strong>
      </h2>

      <p>
        Internships and practical experiences where I developed
        real-world applications, improved my technical skills,
        and worked on modern web technologies.
      </p>

    </div>


    {/* EXPERIENCE TIMELINE */}
    <div className="experience-timeline">


      {/* ================= CODEBIND ================= */}
      <article className="experience-item">

        <div className="experience-dot">
          <span></span>
        </div>

        <div className="experience-card">

          <div className="experience-top">

            <div>
              <span className="experience-type">
                WEB DEVELOPMENT INTERN
              </span>

              <h3>
                Codebind Technologies
              </h3>
            </div>

            <span className="experience-date">
              Sep 2024
            </span>

          </div>


          <p className="experience-description">
            Developed web applications using HTML, CSS and
            JavaScript while improving user interface design
            and collaborating with a development team.
          </p>


          <div className="experience-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>UI Development</span>
          </div>

          {/* CERTIFICATE */}
          <div className="experience-certificate">

            <div className="certificate-title">
              

              <div>
                <strong>Internship Certificate</strong>
                <small>Codebind Technologies</small>
              </div>
            </div>


            <div className="certificate-buttons">

              <a
                href="/public/codebind.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>

              <a
                href="/public/codebind.png"
                download="RJ codebind cert."
              >
                Download
              </a>

            </div>

          </div>


        </div>

      </article>


      {/* ================= OASIS INFOBYTE ================= */}
      <article className="experience-item">

        <div className="experience-dot">
          <span></span>
        </div>

        <div className="experience-card">

          <div className="experience-top">

            <div>
              <span className="experience-type">
                WEB DEVELOPMENT INTERN
              </span>

              <h3>
                Oasis Infobyte
              </h3>
            </div>

            <span className="experience-date">
              Aug 2025
            </span>

          </div>


          <p className="experience-description">
            Built responsive web projects and worked on
            improving frontend performance, responsiveness
            and overall user experience.
          </p>


          <div className="experience-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Responsive Design</span>
          </div>

           {/* CERTIFICATE */}
          <div className="experience-certificate">

            <div className="certificate-title">
             

              <div>
                <strong>Internship Certificate</strong>
                <small>Oasis Infobyte</small>
              </div>
            </div>


            <div className="certificate-buttons">

              <a
                href="/public/oasis infobyte.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>

              <a
                href="/public/oasis infobyte.png"
                download="RJ Oasis Infobyte cert."
              >
                Download
              </a>

            </div>

          </div>

        </div>

      </article>


      {/* ================= EDUTANTR ================= */}
      <article className="experience-item">

        <div className="experience-dot">
          <span></span>
        </div>

        <div className="experience-card">

          <div className="experience-top">

            <div>
              <span className="experience-type">
                JAVA FULL STACK INTERN
              </span>

              <h3>
                Edutantr
              </h3>
            </div>

            <span className="experience-date">
              Jan 2026 – Apr 2026
            </span>

          </div>


          <p className="experience-description">
            Developed full-stack applications using Java
            and MySQL with backend integration, gaining
            practical experience in application development
            and database management.
          </p>


          <div className="experience-tech">
            <span>Java</span>
            <span>MySQL</span>
            <span>Backend</span>
            <span>Full Stack</span>
          </div>

          {/* CERTIFICATE */}
          <div className="experience-certificate">

            <div className="certificate-title">
           

              <div>
                <strong>Internship Certificate</strong>
                <small>Edutantr</small>
              </div>
            </div>


            <div className="certificate-buttons">

              <a
                href="/public/edutantr.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>

              <a
                href="/public/edutantr.png"
                download="RJ Edutantr cert."
              >
                Download
              </a>

            </div>

          </div>

        </div>

      </article>


    </div>

  </div>

</section>

{/* ================= CERTIFICATIONS SECTION ================= */}
<section className="certifications-section" id="certifications">

  <div className="section-container">

    {/* SECTION HEADING */}
    <div className="section-heading">

      <span>CERTIFICATIONS</span>

      <h2>
        Learning That Became <strong>Skills</strong>
      </h2>

      <p>
        Professional courses and certifications that helped
        me strengthen my full-stack development skills.
      </p>

    </div>


    {/* CERTIFICATIONS GRID */}
    <div className="certifications-grid">


      {/* ================= GUVI ================= */}
      <article className="certification-card">

        <div className="certification-top">

          <div className="certification-logo">
            G
          </div>

          <span className="certification-badge">
            COMPLETED
          </span>

        </div>


        <div className="certification-content">

          <span className="certification-type">
            FULL STACK DEVELOPMENT
          </span>

          <h3>
            Full Stack Development Course
          </h3>

          <p className="certification-provider">
            GUVI
          </p>

          <p className="certification-description">
            Completed a comprehensive full-stack development
            course covering frontend, backend, databases and
            modern web application development.
          </p>

        </div>


        <div className="certification-tech">

          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>

        </div>


        <div className="certification-actions">

          <a
            href="/public/Guvi cert.png"
            target="_blank"
            rel="noopener noreferrer"
            className="certification-view"
          >
            View Certificate
          </a>

          <a
            href="/public/Guvi cert.png"
            download="GUVI- FSD -Certificate.png"
                     >
            Download
          </a>

        </div>

      </article>



      {/* ================= EDUTANTR ================= */}
      <article className="certification-card">

        <div className="certification-top">

          <div className="certification-logo edutant-logo">
            E
          </div>

          <span className="certification-badge">
            COMPLETED
          </span>

        </div>


        <div className="certification-content">

          <span className="certification-type">
            FULL STACK DEVELOPMENT
          </span>

          <h3>
            Full Stack Development Course
          </h3>

          <p className="certification-provider">
           EDUTANTR
          </p>

          <p className="certification-description">
            Completed full-stack development training with
            practical exposure to application development,
            backend integration and database management.
          </p>

        </div>


        <div className="certification-tech">

          <span>Java</span>
          <span>MySQL</span>
          <span>Backend</span>
          <span>Full Stack</span>

        </div>


        <div className="certification-actions">

          <a
            href="/public/Edutantr cert.png"
            target="_blank"
            rel="noopener noreferrer"
            className="certification-view"
          >
            View Certificate
          </a>

          <a
            href="/public/Edutantr cert.png"
            download="Edutant-Full-Stack-Development-Certificate.png"
            className="certification-download"
          >
            Download
          </a>

        </div>

      </article>


    </div>

  </div>

</section>

{/* ================= EDUCATION SECTION ================= */}
<section className="education-section" id="education">

  <div className="section-container">

    {/* SECTION HEADING */}
    <div className="section-heading">

      <span>EDUCATION</span>

      <h2>
        My Academic <strong>Journey</strong>
      </h2>

      <p>
        My academic background and the foundation behind my
        technical journey.
      </p>

    </div>


    {/* EDUCATION TIMELINE */}
    <div className="education-timeline">


      {/* ================= EDUCATION ITEM 1 ================= */}
      <article className="education-item">

        <div className="education-marker">
          <span></span>
        </div>


        <div className="education-card">

          <div className="education-header">

            <div>

              <span className="education-level">
                UNDERGRADUATE
              </span>

              <h3>
                Bachelor of Technology (B.Tech)
              </h3>

              <p className="education-institution">
                Dhanalakshmi Srinivasan University
              </p>

            </div>

            <span className="education-year">
              2022 – 2026
            </span>

          </div>


          <div className="education-details">

            <div>
              <span>Field of Study</span>
              <strong>Computer Science</strong>
            </div>

            <div>
              <span>Location</span>
              <strong>Trichy, Tamil Nadu</strong>
            </div>

          </div>

        </div>

      </article>


      {/* ================= EDUCATION ITEM 2 ================= */}
      <article className="education-item">

        <div className="education-marker">
          <span></span>
        </div>


        <div className="education-card">

          <div className="education-header">

            <div>

              <span className="education-level">
                HIGHER SECONDARY
              </span>

              <h3>
                SSLC (12th Grade)
              </h3>

              <p className="education-institution">
                Cauvery Global Senior Secondary School
              </p>

            </div>

            <span className="education-year">
              2019 – 2020
            </span>

          </div>


          <div className="education-details">

            <div>
              <span>Stream</span>
              <strong>Bio - Maths</strong>
            </div>

            <div>
              <span>Location</span>
              <strong>Trichy, Tamil Nadu</strong>
            </div>

          </div>

        </div>

      </article>

       {/* ================= EDUCATION ITEM 3 ================= */}

      <article className="education-item">

        <div className="education-marker">
          <span></span>
        </div>


        <div className="education-card">

          <div className="education-header">

            <div>

              <span className="education-level">
                 SECONDARY SCHOOL
              </span>

              <h3>
                HSLC (10th Grade)
              </h3>

              <p className="education-institution">
                Cauvery Global Senior Secondary School
              </p>

            </div>

            <span className="education-year">
              2017 – 2018
            </span>

          </div>


          <div className="education-details">

            <div>
              <span>Location</span>
              <strong>Trichy, Tamil Nadu</strong>
            </div>

          </div>

        </div>

      </article>


    </div>

  </div>

</section>

{/* ================= EXTRA CURRICULAR SECTION ================= */}
      <section className="extracurricular-section" id="extracurricular">

        <div className="section-container">

          {/* HEADING */}
          <div className="section-heading">
            <span>BEYOND ACADEMICS</span>
            <h2>Extra-Curricular <strong>Activities</strong></h2>
            <p>
              Academic events, technical participation and achievements
              that contributed to my growth.
            </p>
          </div>

          {/* GRID */}
          <div className="activities-grid">

            {/* ================= CONFERENCE ================= */}
            <article className="activity-card">

              <div className="activity-icon"><span>01</span></div>

              <div className="activity-content">
                <span className="activity-label">ACADEMIC EVENT</span>

                <h3>International Conference</h3>

                <p>
                  Presented a paper on AI-based techniques and gained exposure to
                  research discussions and real-world innovations.
                </p>

                <div className="cert-actions">
                  <a href="/public/conference.png" target="_blank">View</a>
                  <a href="/conference.png" download>Download</a>
                </div>
              </div>

              <div className="cert-preview">
                <img src="/public/conference.png" alt="Conference Certificate" />
              </div>

            </article>


            {/* ================= HACKATHON ================= */}
            <article className="activity-card">

              <div className="activity-icon"><span>02</span></div>

              <div className="activity-content">
                <span className="activity-label">TECHNICAL EVENT</span>

                <h3>Hackathon Participation</h3>

                <p>
                  Participated in DSU Hack-O-Verse, collaborated with team members
                  and developed solutions for real-world problems.
                </p>

                <div className="cert-actions">
                  <a href="/public/hackathon.png" target="_blank">View</a>
                  <a href="/hackathon.png" download>Download</a>
                </div>
              </div>

              <div className="cert-preview">
                <img src="/public/hackathon.png" alt="Hackathon Certificate" />
              </div>

            </article>


            {/* ================= SYMPOSIUM ================= */}
            <article className="activity-card">

              <div className="activity-icon"><span>03</span></div>

              <div className="activity-content">
                <span className="activity-label">TECHNICAL EVENT</span>

                <h3>Technical Symposium</h3>

                <p>
                  Participated in TECHSET-2K23 symposium and explored technical
                  concepts through events and presentations.
                </p>

                <div className="cert-actions">
                  <a href="/public/symposium.png" target="_blank">View</a>
                  <a href="/public/symposium.png" download>Download</a>
                </div>
              </div>

              <div className="cert-preview">
                <img src="/public/symposium.png" alt="Symposium Certificate" />
              </div>

            </article>


            {/* ================= TYPEWRITING ================= */}
            <article className="activity-card">

              <div className="activity-icon"><span>04</span></div>

              <div className="activity-content">
                <span className="activity-label">ADDITIONAL ACHIEVEMENT</span>

                <h3>Junior Grade Typewriting – English</h3>

                <p>
                  Successfully passed Junior Grade English Typewriting with
                  Second Class, demonstrating typing speed and accuracy.
                </p>

                <div className="cert-actions">
                  <a href="/public/type writing.png" target="_blank">View</a>
                  <a href="/public/type writing.png" download>Download</a>
                </div>

                <div className="achievement-badge">✓ Second Class</div>
              </div>

              <div className="cert-preview">
                <img src="/type writing.png" alt="Typewriting Certificate" />
              </div>

            </article>

          </div>
        </div>
      </section>

{/* ================= CONTACT SECTION ================= */}
<section className="contact-section" id="contact">

  <div className="section-container">

    {/* HEADING */}
    <div className="section-heading contact-heading">

      <span>GET IN TOUCH</span>

      <h2>
        Let's <strong>Connect</strong>
      </h2>

      <p>
        Have a project, opportunity or just want to say hello?
        I'd love to hear from you.
      </p>

    </div>


    {/* CONTACT LAYOUT */}
    <div className="contact-layout">


      {/* ================= LEFT ================= */}
      <div className="contact-info">

        <div className="contact-intro">

          <span className="contact-small-label">
            HAVE AN IDEA?
          </span>

          <h3>
            Let's build something
            <span> great together.</span>
          </h3>

          <p>
            I'm always interested in learning, building new
            projects and exploring opportunities where I can
            grow as a developer.
          </p>

        </div>


        {/* EMAIL */}
        <a
          href="mailto:romilda973@gmail.com"
          className="contact-item"
        >

          <div className="contact-icon">
            @
          </div>

          <div>

            <span>Email</span>

            <strong>
              romilda973@gmail.com
            </strong>

          </div>

         </a>


        {/* GITHUB */}
        <a
          href="https://github.com/Romildajayaraj"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >

          <div className="contact-icon">
            GH
          </div>

          <div>

            <span>GitHub</span>

            <strong>
              github.com/Romildajayaraj
            </strong>

          </div>

          

        </a>


        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/romilda-j/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >

          <div className="contact-icon">
            in
          </div>

          <div>

            <span>LinkedIn</span>

            <strong>
              linkedin.com/in/romilda-j
            </strong>

          </div>

         

        </a>

      </div>


      {/* ================= RIGHT — FORM ================= */}
      <div className="contact-form-card">

        <div className="form-header">

          <span>CONTACT ME</span>

          <p>
            Send me a message
          </p>

        </div>


        <form
          onSubmit={(e) => {
            e.preventDefault();

            const name = e.target.name.value;
            const email = e.target.email.value;
            const message = e.target.message.value;

            window.location.href =
              `mailto:romilda973@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\n${message}`
              )}`;
          }}
        >

          {/* NAME */}
          <div className="form-group">

            <label htmlFor="name">
              Your Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />

          </div>


          {/* EMAIL */}
          <div className="form-group">

            <label htmlFor="email">
              Email Address
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
            />

          </div>


          {/* MESSAGE */}
          <div className="form-group">

            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me about your project or opportunity..."
              required
            ></textarea>

          </div>


          {/* SUBMIT */}
          <button
            type="submit"
            className="contact-submit"
          >

            Send Message

           

          </button>

        </form>

      </div>

    </div>


    {/* CONTACT BOTTOM */}
    <div className="contact-availability">

      <span className="availability-dot"></span>

      <p>
        Open to opportunities & collaborations
      </p>

    </div>

  </div>

</section>

{/* ================= FOOTER ================= */}
<footer className="site-footer">

  <div className="footer-container">

    {/* TOP */}
    <div className="footer-top">

      <div className="footer-brand">

        <a href="#home" className="footer-logo">
          Romilda<span>.</span>
        </a>

        <p>
          MERN Stack Developer building clean,
          responsive and modern web applications.
        </p>

      </div>


      {/* FOOTER NAV */}
      <div className="footer-links">

        <span>QUICK LINKS</span>

        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>

      </div>


      {/* SOCIAL */}
      <div className="footer-social">

        <span>CONNECT</span>

        <a
          href="https://github.com/Romildajayaraj"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/romilda-j/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a href="mailto:romilda973@gmail.com">
          Email
        </a>

      </div>

    </div>


    {/* BOTTOM */}
    <div className="footer-bottom">

      <p>
        © {new Date().getFullYear()} Romilda. All rights reserved.
      </p>

      <p>
        Designed & Built with <span>♥</span> using React
      </p>

      <a href="#home" className="back-to-top">
        ↑
      </a>

    </div>

  </div>

</footer>

    </div>
  );
}

export default App;