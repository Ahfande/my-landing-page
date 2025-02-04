import React, { useState } from 'react';  
import { ToastContainer, toast } from "react-toastify";  
import "react-toastify/dist/ReactToastify.css";  
import "./App.css";  
import Navbar from "./components/Navbar";  
import useSmoothScroll from "./hooks/useSmoothScroll";  
import TypingAnimation from "./components/TypingAnimation";  
import Swal from "sweetalert2";  
import ParticlesBackground from './components/ParticlesBackground';


function App() {
  const cvUrl = "/CV-AhfanNaofal.pdf";
  const whatsappNumber = "6281546864712";
  const emailAddress = "ahfande17@gmail.com";

  // Fungsi untuk download CV
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Ahfan_Naofal_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Tambahkan toast notifikasi
    toast.success("CV successfully downloaded!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Fungsi untuk membuka WhatsApp
  const handleWhatsAppTalk = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappUrl, "_blank");
    // Tambahkan toast notifikasi
    toast.info("Open WhatsApp...", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Fungsi untuk menyalin email
  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(emailAddress)
      .then(() => {
        // Gunakan toast untuk notifikasi
        toast.success("Email copied successfully!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          icon: "📋", // Opsional: tambahkan ikon
        });
      })
      .catch((err) => {
        toast.error("Failed to copy emails", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  // Fungsi untuk menampilkan alert
  const handlePreviewClick = (projectName) => {
    Swal.fire({
      icon: "info",
      title: "Project is Private",
      text: `Sorry, the "${projectName}" project is still private 🔒`,
      confirmButtonText: "Understand",
      confirmButtonColor: "#3085d6",
    });
  };

  // Contact
  // Tambahkan state untuk form kontak
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Fungsi untuk mengubah input form kontak
  const handleContactFormChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Fungsi untuk mengirim pesan
  const handleSendMessage = async (e) => {
    e.preventDefault();

    // Buka email client default
    const mailtoLink = `mailto:ahfande17@gmail.com?subject=Pesan dari ${contactForm.name}&body=${contactForm.message}`;
    window.location.href = mailtoLink;

    toast.info("Will open the email client...");
  };

  useSmoothScroll();
  return (
    <>  
        <ParticlesBackground />
        {/* Tambahkan ToastContainer */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <Navbar />
        <section>
          {/* Content 1 - Home */}
          <div id="home" className="Content1Container">
            <div className="TextContainer">
              <div className="BoxHello">👋 Hello Everyone, I'm</div>
              <h1 className="Nama">
                <TypingAnimation
                  text="Ahfan Naofal"
                  speed={200} // Kecepatan mengetik
                  deleteSpeed={50} // Kecepatan menghapus
                  pauseDuration={5000} // Jeda 5 detik setelah mengetik
                  loop={true} // Aktifkan pengulangan
                />{" "}
              </h1>
              <h4 className="TitleSkils">
                Fullstack IoT Developer | Front-End Developer
              </h4>
              <button className="BtnCV" onClick={handleDownloadCV}>
                Download CV <i className="fa-solid fa-download"></i>
              </button>
              <button className="BtnWAA" onClick={handleWhatsAppTalk}>
                {" "}
                <i className="fa-brands fa-whatsapp"></i> Let's talk
              </button>
            </div>
            <div className="circle1"></div>
          </div>
        </section>

        {/* Content 2 - About */}
        <section id="about" className="Content2Container">
          <div className="circle2"></div>
          <div className="TextAboutContainer">
            <div className="BoxAbout">
              {" "}
              <i className="fa-solid fa-person"></i> About Me
            </div>
            <h2 className="hello">Hello...</h2>
            <p>
              I am a Full-Stack IoT Developer focused on developing useful and
              relevant technology solutions for everyday life. I have experience
              in combining hardware, backend, and web applications to create
              innovative IoT systems.
            </p>
            <p>Some of the projects I am most proud of are:</p>
            <p>
              ∙ RFID-based Smart Attendance, where I designed a smart attendance
              system that allows attendance data to be automatically recorded
              into a database using RFID and ESP32 technology. This project is
              designed to be used in both education and professional settings.
            </p>
            <p>
              ∙ Automatic Venturi, a tool that helps optimize air or liquid flow
              precisely through IoT-based automatic control. This project
              provides practical solutions for various technical needs.
            </p>
            <p>
              ∙ Fuzzy logic incubator, designed to automatically maintain
              optimal temperature using a fuzzy logic approach. This project
              provides high stability for medical or biological applications,
              with more accurate control. I believe that IoT is not just about
              technology, but also how we can create truly impactful
              innovations. I am always challenged to develop solutions that are
              not only technically advanced but also beneficial to society and
              the environment.
            </p>
          </div>
        </section>

        {/* Content 3 - My Project */}
        <section id="project">
          <h2 className="TitleProject">My Projects</h2>
          <p className="ProjectIntro">
            This is an example of a project that I have worked on and will
            continue
          </p>
          <div className="ProjectContainer">
            {/* project 1 */}
            <div className="ProjectBox">
              <div className="ProjectImage1"></div>
              <div className="ProjectInfo">
                <h3 className="ProjectName">Smart Venturi Automation</h3>
                <div className="JobAndBtn">
                  <p className="JobProject">Web App | Fullstack</p>
                  <button
                    className="BtnPreview"
                    onClick={() =>
                      handlePreviewClick("Smart Venturi Automation")
                    }
                  >
                    Preview
                  </button>
                </div>
              </div>
            </div>
            {/* project 2 */}
            <div className="ProjectBox">
              <div className="ProjectImage2"></div>
              <div className="ProjectInfo">
                <h3 className="ProjectName">Smart Attendance RFID</h3>
                <div className="JobAndBtn">
                  <p className="JobProject">Web App | Backend</p>
                  <button
                    className="BtnPreview"
                    onClick={() => handlePreviewClick("Smart Attendance RFID")}
                  >
                    Preview
                  </button>
                </div>
              </div>
            </div>
            {/* project 3 */}
            <div className="ProjectBox">
              <div className="ProjectImage3"></div>
              <div className="ProjectInfo">
                <h3 className="ProjectName">Smart Home</h3>
                <div className="JobAndBtn">
                  <p className="JobProject">Web App | UI/UX</p>
                  <button
                    className="BtnPreview"
                    onClick={() => handlePreviewClick("Smart Home")}
                  >
                    Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content 4 - Skills */}
        <section id="skills">
          <div className="BoxSkills">
            {" "}
            <i className="fa-solid fa-laptop-code"></i> Skills · Experience
          </div>
          <h2 className="TitleSkills">Technology and skills</h2>
          <p>Technology I use every day</p>
          <div className="IconContainer">
            <i className="tech-icon fa-brands fa-html5"></i>
            <i className="tech-icon fa-brands fa-css3-alt"></i>
            <i className="tech-icon fa-brands fa-js"></i>
            <i className="tech-icon fa-brands fa-node"></i>
            <i className="tech-icon fa-brands fa-react"></i>
            <i className="tech-icon fa-brands fa-figma"></i>
            <i className="tech-icon fa-brands fa-github"></i>
            <i className="tech-icon fa-brands fa-bootstrap"></i>
            <svg
              className="tech-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="48px"
              height="48px"
            >
              <path
                fill="rgba(218, 218, 218, 1)"
                d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
              />
            </svg>
            <svg
              className="tech-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="48px"
              height="48px"
            >
              <path
                fill="rgba(218, 218, 218, 1)"
                d="M35.7,34.7c-7.7,0-13.2-8.9-13.4-9.3l-0.6-1l0.6-1C22.5,22.9,28,14,35.7,14C41.4,14,46,18.6,46,24.3 S41.4,34.7,35.7,34.7z M26.4,24.3c1.5,2,5.1,6.3,9.2,6.3c3.5,0,6.3-2.8,6.3-6.3c0-3.5-2.8-6.3-6.3-6.3C31.5,18,27.9,22.3,26.4,24.3 z"
              />
              <path
                fill="rgba(218, 218, 218, 1)"
                d="M12.3,34.7C6.6,34.7,2,30,2,24.3S6.6,14,12.3,14c7.9,0,13.2,8.9,13.4,9.3l0.6,1l-0.6,1 C25.5,25.7,20,34.7,12.3,34.7z M12.3,18C8.8,18,6,20.8,6,24.3c0,3.5,2.8,6.3,6.3,6.3c4.2,0,7.8-4.3,9.3-6.3 C20.2,22.3,16.6,18,12.3,18z"
              />
              <path
                fill="rgba(218, 218, 218, 1)"
                d="M10 23h6v2h-6V23zM32 23h6v2h-6V23z"
              />
              <path fill="rgba(218, 218, 218, 1)" d="M34,21h2v6h-2V21z" />
            </svg>
          </div>
        </section>

        <section id="contact">
          <div className="ContactRedesignContainer">
            <div className="ContactHeaderSection">
              <div className="BoxContact">
                <i className="fa-solid fa-inbox"></i> Contact Me
              </div>
              <h2 className="TitleContact">Let's Connect!</h2>
              <p className="ContactSubtitle">
                I'm open to collaboration, exciting projects, or just chatting
                about technology and innovation.
              </p>
            </div>

            <div className="ContactContentWrapper">
              <div className="ContactMethodsContainer">
                <div className="ContactMethodBox">
                  <div className="ContactMethodIcon">
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div className="ContactMethodDetails">
                    <h3>WhatsApp</h3>
                    <button
                      className="ContactMethodButton"
                      onClick={handleWhatsAppTalk}
                    >
                      +62 815-4686-4712
                    </button>
                  </div>
                </div>

                <div className="ContactMethodBox">
                  <div className="ContactMethodIcon">
                    <i className="fa-regular fa-envelope"></i>
                  </div>
                  <div className="ContactMethodDetails">
                    <h3>Email</h3>
                    <div className="EmailContainer">
                      <span>{emailAddress}</span>
                      <i
                        className="fa-regular fa-copy"
                        onClick={handleCopyEmail}
                        title="Copy Email"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="MessageFormContainer">
                <h2>Send a Message</h2>
                <form className="MessageForm" onSubmit={handleSendMessage}>
                  <div className="FormGroup">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="FormInput"
                      value={contactForm.name}
                      onChange={handleContactFormChange}
                      required
                    />
                  </div>

                  <div className="FormGroup">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="FormInput"
                      value={contactForm.email}
                      onChange={handleContactFormChange}
                      required
                    />
                  </div>

                  <div className="FormGroup">
                    <label>Message</label>
                    <textarea
                      name="message"
                      placeholder="Write your message"
                      className="FormTextarea"
                      value={contactForm.message}
                      onChange={handleContactFormChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="SubmitButton">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="ContactFootnote">
              <p>
                I typically respond within 1-2 business days. Feel free to reach
                out for professional discussions or technical inquiries.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="Footer">
          <div className="FooterContent">
            <div className="FooterSection">
              <h3 className="Logo">Ahfande</h3>
              <p>
                Dedicated to creating innovative technology solutions that make
                a difference.
              </p>
            </div>

            <div className="FooterSection">
              <h4>Quick Links</h4>
              <ul>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#project">Projects</a>
                <a href="#contact">Contact</a>
              </ul>
            </div>

            <div className="FooterSection">
              <h4>Connect With Me</h4>
              <div className="SocialLinks">
                <a
                  href="https://github.com/Ahfande"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/ahfan-naofal-27b405243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://x.com/XavierN9M?t=zvzgIkbMV3V3oapjgRwA8g&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/ahfande_?igsh=Yng2MHVpM2E1MGE1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="FooterBottom">
            <p>&copy; 2025 Ahfan Naofal. All Rights Reserved.</p>
          </div>
        </footer>
    </>
  );
}

export default App;
