import React from 'react';
import './index.css'

function Home() {
  return (
    <div className="HomePage">
      <header>
        <nav>
          <div className="logo">
            <img src="https://scora.io/wp-content/uploads/2024/01/final_logo_scora.svg" alt="Scora Logo" />
          </div>
          <ul className="navigation-links">
            <li><a href="#">Home</a></li>
            <li><a href="https://scora.io/platform/">Platform</a></li>
            <li><a href="https://scora.io/scenarios/">Scenarios</a></li>
            <li><a href="https://scora.io/features/">Features</a></li>
            <li><a href="https://scora.io/pricing/">Pricing</a></li>
            <li><a href="https://scora.io/blogs/">Blogs</a></li>
            <li><a href="https://scora.io/about/">About</a></li>
          </ul>
          <div className="authorization-buttons">
            <a href="#" className="sign-in"><b>Sign In</b></a>
            <a href="#" className="sign-up"><b>Sign Up</b></a>
          </div>
        </nav>
      </header>
      <main>
        <section className="Blue-section-with-image">
          <div className="Blue-section-with-image-content">
            <h1>Because you care about your <span>assessments</span>.</h1>
            <p>We are building a complete ecosystem to help you create and manage tests efficiently.</p>
            <div className="Blue-section-with-image-buttons">
              <a href="#">Training and Test Prep</a>
              <a href="#">Pre-hire Assessments</a>
            </div>
          </div>
          <div className="Blue-section-with-image-image">
            <img src="https://scora.io/wp-content/uploads/2022/10/Header-Image.png" alt="Illustration of person working" />
          </div>
        </section>
        
        <section className="job-role-questions">
          <div className="questions-section">
            <div>
              <h2 style={{ fontSize: '40px' }}>Does your job role entail creating assessments?</h2>
            </div>
            <div className="questions d-flex flex-column">
              <div className="question">
                <p style={{ fontSize: '20px' }}>&#128516; Do you wish that your assessment tool was more efficient?</p>
              </div>
              <div className="question">
                <p style={{ fontSize: '20px' }}>&#128516; Do you wish your assessment software could facilitate selecting question items intelligently to meet assessment objectives?</p>
              </div>
            </div>
          </div>
          <div className="questions-section">
            <div>
              <h2 style={{ fontSize: '40px' }}>Are you a subject matter expert?</h2>
            </div>
            <div className="questions">
              <div className="question">
                <p style={{ fontSize: '20px' }}>&#128516; Can you create question banks that will help learners prepare better for exams?</p>
              </div>
              <div className="question">
                <p style={{ fontSize: '20px' }}>&#128516; Can you use your expertise to make talent assessments more reliable and purposeful?</p>
              </div>
            </div>
          </div>
          <div className="blue-question-box">
            <p>If your answer to any of the above questions is ‘YES’, we have the right online assessment tool for you.</p>
            <button className="blue-button">Click here and let us know!</button>
          </div>
        </section>
        
        <section className="seven-steps">
          <h2 style={{ textAlign: 'center', fontSize: '40px' }}>Collaborate and co-create digital assessments for diagnostic, learning or credentialing purposes, on demand.</h2>
          <p style={{ textAlign: 'center' }}>Use our 7-Steps journey to create, publish, deliver and grade quizzes, tests, exams or assignments.</p>
          <img style={{ height: 'auto', width: '100%' }} src="https://scora.io/wp-content/uploads/2022/10/home-cont-2048x651.png" alt="seven steps" />
          <div style={{ textAlign: 'center' }}><button className="seven-steps-button"><b>Yes, I would like a demo!</b></button></div>
        </section>
        
        <section className="testimonial">
          <h2>Why our customers choose us.</h2>
          <div className="testimonial-content">
            <div className="testimonial-text">
              <p style={{ fontSize: '20px' }}>“We were working on launching SpeakEng™ as a part of our DELL (Digital English Language Learning) program. As non-techies we were looking for the right language skills assessment software and a friend introduced us to SCORA<sup>®</sup>. When we saw the demo, we knew immediately that our search had ended. It has been an extremely satisfying experience since then as the thoughtful design behind SCORA<sup>®</sup> has helped alleviate our fears of the pitfalls of technology in learning and assessments. We know we are in good hands to scale our programs.”</p>
            </div>
            <div className="section">
              <div className="testimonial-author">
                <img src="https://scora.io/wp-content/uploads/2022/10/leena.png" alt="Leena Anil" />
                <p>— <b>Leena Anil</b><br /><br />Founder<br /><br />Sunne Edtech Pvt Ltd</p>
              </div>
              <div className="testimonial-author2">
                <img src="https://scora.io/wp-content/uploads/2022/10/suda.png" alt="Sudha Ravi" />
                <p>— <b>Sudha Ravi</b><br /><br />Co-Founder<br /><br />Sunne Edtech Pvt Ltd</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <div className="fl1">
              <img src="https://scora.io/wp-content/uploads/2022/10/scora_logo_white-1.svg" alt="Scora Logo" /><br />
              <div className="footer-social">
                <a href="#"><i className="fa-brands fa-linkedin fa-2xl"></i></a>
                <a href="#"><i className="fa-brands fa-x-twitter fa-2xl"></i></a>
                <a href="#"><i className="fa-brands fa-facebook fa-2xl"></i></a>
                <a href="#"><i className="fa-brands fa-instagram fa-2xl"></i></a>
                <a href="#"><i className="fa-brands fa-square-threads fa-2xl"></i></a>
              </div>
            </div>
            <p>SCORA<sup>®</sup> is a first-of-its-kind, cloud-based, assessment platform designed to measure and improve knowledge and skills of learners, preparing them for greater success in their educational and career pursuits.</p>
          </div>
          <div className="footer-updates">
            <h3>Get Updates</h3>
            <form>
              <input type="email" placeholder="Enter your email *" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-contact">
            <p>Scora Labs Pvt Ltd, Level 3 Reve Pabbathi Building, 36 South End Road, Bangalore-560004, India</p>
            <p style={{ paddingLeft: '50px' }}><i className="fa-solid fa-phone fa-lg"></i> +91 8884945100 | <i className="fa-solid fa-envelope fa-lg"></i> hello@scora.io</p>
          </div>
          <div className="footer-legal">
            <p>&copy; 2022 Scora Labs Pvt Ltd. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;