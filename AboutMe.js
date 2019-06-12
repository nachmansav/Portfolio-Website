import React from "react"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./index.css";

class AboutMe extends React.Component{
	render(){
		return(
		<MDBContainer id="aboutMe">
            <MDBRow className="py-5">
              <MDBCol md="12" className="text-center">
              <h2>About Me</h2>
                <h3>I am a creative full stack web developer living in Israel. I am always curious and love learning new things. You can contact me using the links below.</h3>
              </MDBCol>
              <MDBCol md="4" className="text-center emailmargin">
                <a href="mailto:nachmansavin@gmail.com"><p><i class="fas fa-envelope icon"></i></p>
                <h5>nachmansavin@gmail.com</h5></a>
              </MDBCol>
              <MDBCol md="4" className="text-center icon">
                <a href="https://github.com/nachmansav/">
                  <p><i class="fab fa-github"></i></p>
                </a>
              </MDBCol>
              <MDBCol md="4" className="text-center icon">
                <a href="https://www.linkedin.com/in/nachman-savin/">
                  <p><i class="fab fa-linkedin"></i></p>
                </a>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
  		)
	}

}

export default AboutMe