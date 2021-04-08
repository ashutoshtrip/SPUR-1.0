import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faYoutube

}  from "@fortawesome/free-brands-svg-icons";
function About() {
  return (
    <div className="about-body">
      <div className="about-top">
        <div className="meet-team">
          <h1 className="about-h1">
            <strong> Meet the Team </strong>
          </h1>
        </div>

        <div className="about-wrapper">
          <div className="div-1">
            <div className="div-1-top">
              <img  alt ="Ashutosh Tripahthi" src="https://firebasestorage.googleapis.com/v0/b/spur-b1135.appspot.com/o/images%2FWhatsApp%20Image%202021-04-08%20at%208.26.33%20PM.jpeg?alt=media&token=03f14ae7-60c9-4f98-acc3-84a5e991e4b1" />
            </div>

            <div className="div-1-bottom">
              <h3 className="div-1-name"> Ashutosh Tripathi  < a href="https://www.linkedin.com/in/ashutosh-tripathi-279747166/"> <FontAwesomeIcon className="linkedin-icon" icon={faLinkedin} size="1x" /> </a>
   </h3>
              <h5 className="div-1-position"> Founder </h5>
              <p className="div-1-story">
              I am Ashutosh Tripathi Pre-final year student. 
Experienced with a demonstrated history of working in the software industry. Skilled in React.js, C++, Javascript,  frontend development. Strong entrepreneurship professional with a Bachelor of Technology from the National Institute of Technology Delhi.
Headed the team of 4 members associated with the development of the company.Worked on the most part of the frontend and designed this website.
Providing success stories for students of their respective field of interest.
The content focuses on the leader's beginning the struggle and the journey to their current positions.
The website will widely help to the students of science, technology etc  to find their pioneers of their career interest.
Also this is open to all who want to share their success story for others motivation.
              </p>
            </div>
          </div>
          <div className="div-1">
            <div className="div-1-top">
              <img  alt ="deepak malik" src="https://firebasestorage.googleapis.com/v0/b/spur-b1135.appspot.com/o/images%2FWhatsApp%20Image%202021-04-08%20at%208.26.24%20PM.jpeg?alt=media&token=824f8bbd-fa0e-435a-b584-bb558d9ed322" />
            </div>

            <div className="div-1-bottom">
              <h3 className="div-1-name"> Deepak Malik  < a href="https://www.linkedin.com/in/deepak-malik-781338175/"> <FontAwesomeIcon className="linkedin-icon" icon={faLinkedin} size="1x" /> </a></h3>
              <h5 className="div-1-position"> Co-Founder </h5>
              <p className="div-1-story">
              I am Deepak Malik Pre-final year student. 
Skilled in React.js, C++, Javascript,  frontend development and Firebase. . Worked on the most part of the Bofessional with a Bachelor of Technology from the National Institute of Technology Delhi.
ackend and Frontend design of this website.
I have integrated this website using firebase 
              </p>
            </div>
          </div>
          <div className="div-1">
            <div className="div-1-top">
              <img alt ="Manik Papneja" src="https://media-exp1.licdn.com/dms/image/C5635AQHdUo7jt2fUvQ/profile-framedphoto-shrink_400_400/0/1617642842092?e=1617732000&v=beta&t=4cUwcc0Cs0o9j9ngdurTmOH7akpKYuiCQxYDHnShAtM" />
            </div>

            <div className="div-1-bottom">
              <h3 className="div-1-name"> Manik Papneja  < a href="https://www.linkedin.com/in/manikpapneja/"> <FontAwesomeIcon className="linkedin-icon" icon={faLinkedin} size="1x" /> </a></h3>
              <h5 className="div-1-position"> Co-Founder </h5>
              <p className="div-1-story">
              I am Manik Papneja 3rd-year student with a Bachelor of Technology focused in Electronics Engineering from the National Institute of Technology Delhi.Worked on the frontend part of this website like designs and user interface. Implemented react-routing which helps to build a single-page web application with navigation without the page refreshing as the user navigates, also helped the team to find different exciting stories.
              </p>
            </div>
          </div>
          <div className="div-1">
            <div className="div-1-top">
              <img  alt ="Nitesh Gupta" src="https://media-exp1.licdn.com/dms/image/C5635AQEY6FDKs9tZIQ/profile-framedphoto-shrink_400_400/0/1617642837575?e=1617732000&v=beta&t=fV6lJK30aFgHALbv0J6lETXvKq3mO-HtNY_lUEMJ5N8" />
            </div>

            <div className="div-1-bottom">
              <h3 className="div-1-name"> Nitesh Gupta  < a href="https://www.linkedin.com/in/nitesh-gupta-37868b193/"> <FontAwesomeIcon className="linkedin-icon" icon={faLinkedin} size="1x" /> </a></h3>
              <h5 className="div-1-position"> Co-Founder </h5>
              <p className="div-1-story">
              Hello I am Nitesh Gupta , and I will completing my B-Tech degree from National Institute of Technology Delhi in 2022. Skilled in Data Structure and Algorithm, React JS and Frontend Development. I have worked on a wide variety of projects that have allowed me to put what I have learned in the classroom into use in a practical sense. My contribution regarding this site is on frontend development and putting the motivational stories to database. Founder and content creator at Educator's Hub (Youtube channel focused on competitive programming)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
