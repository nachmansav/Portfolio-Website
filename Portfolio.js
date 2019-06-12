import React from "react"
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import "./index.css";

class Portfolio extends React.Component{
	render(){
		return(
			<div className="jumbotron text-center">

			  <h2 id="portfolio" className="h1-responsive font-weight-bold mb-4">
			    Portfolio
			  </h2>

			  <MDBRow>

			      <MDBCol md="6" className="md-0 mb-4" >
			      <div id="portfoliocard" className="card-image" style={{
			              backgroundImage:
			                "url(https://i.ibb.co/FDP7R4y/web-Portfolio.jpg)"
			            }}>
			        <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
			          <div>
			            <h3 className="py-3 font-weight-bold">
			              <strong>Portfolio Website</strong>
			            </h3>
			            <p className="pb-3">
			              A single page portfolio website to showcase some of my work. It is built with React, Bootstrap, HTML5, 
			              CSS3 and Javascript. It takes advantage of the component based systen in React to build the page modularly. 
			            </p>
			            <p>
			              <i class="fab fa-react icon"></i>
			              <i class="fab fa-html5 icon"></i>
			              <i class="fab fa-css3-alt icon"></i>
			              <i class="fab fa-js-square icon"></i>
			              <i class="fab fa-bootstrap icon"></i>
			            </p>
			            <MDBBtn color="orange lighten-1" className="margin" href="https://github.com/nachmansav/Portfolio-Website" rounded size="md">
			            Codebase
			            </MDBBtn>
			            <MDBBtn color="orange lighten-1" className="margin" rounded size="md" href="#hero">
			            Deployment
			            </MDBBtn>
			          </div>
			        </div>
			      </div>
			    </MDBCol>

			    <MDBCol id="recipecard" md="6" className="mb-4">
			      <div className="card-image" style={{
			              backgroundImage:
			                "url(https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/2/28/0/FNK_Instapot-Opener-H-0123_s4x3.jpg.rend.hgtvcom.966.725.suffix/1488313727139.jpeg)"
			            }}>
			        <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
			          <div>
			            <h3 className="py-3 font-weight-bold">
			              <strong>Recipe Sharing Website</strong>
			            </h3>
			            <p className="pb-3">
			              This is a responsive, RESTful web application using Python and the Flask framework. It also implements third-party OAuth authentication and a database for persistent storage.
			            </p>
			            <p>
			              <i class="fab fa-python icon"></i>
			              <img className="icon iconmine" src="/images/flaskinv.png" alt="python"/>
			              <img className="icon iconmine" src="/images/postgresql.png" alt="postgresql"/>
			              <i class="fab fa-html5 icon"></i>
			              <i class="fab fa-css3-alt icon"></i>
			              <i class="fab fa-js-square icon"></i>
			              <i class="fab fa-bootstrap icon"></i>

			            </p>
			            <MDBBtn color="orange lighten-1" rounded size="md" href="https://github.com/nachmansav/Catalog">
			            Codebase
			            </MDBBtn>
			            <MDBBtn color="orange lighten-1" rounded size="md" href="http://www.52.59.212.112.xip.io/categories/1/">
			            Deployment
			            </MDBBtn>
			          </div>
			        </div>
			      </div>
			    </MDBCol>

			    <MDBCol md="6" className="md-0 mb-4">
			      <div className="card-image" style={{
			              backgroundImage:
			                "url(https://static.makeuseof.com/wp-content/uploads/2017/02/Linux-Server-Distros-Featured-670x335.jpg)"
			            }}>
			        <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
			          <div>
			            <h3 className="py-3 font-weight-bold">
			              <strong>Linux Server Configuration (AWS)</strong>
			            </h3>
			            <p className="pb-3">
			              The project takes a baseline installation of a Linux distribution 
			              on a virtual machine hosted on AWS and prepares it to host a web applications, including
			               installing updates, securing it from a number of attack vectors and 
			               installing and configuring web and database servers. 
			            </p>
			            <p>
			              <i class="fab fa-aws icon"></i>
			              <i class="fab fa-linux icon"></i>
			              <img className="icon iconmine" src="/images/Apacheinv.png" alt="apache"/>
			            </p>
			             <MDBBtn color="orange lighten-1" href="https://github.com/nachmansav/Linux-Server-Configuration" rounded size="md">
			            Codebase
			            </MDBBtn>
			            <MDBBtn color="orange lighten-1" rounded size="md" href="http://www.52.59.212.112.xip.io/categories/1/">
			            Deployment
			            </MDBBtn>

			          </div>
			        </div>
			      </div>
			    </MDBCol>

			    <MDBCol md="6" className="md-0 mb-4">
			      <div className="card-image" style={{
			              backgroundImage:
			                "url(https://thenextscoop.com/wp-content/uploads/2018/12/log-analysis.jpg)"
			            }}>
			        <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
			          <div>
			            <h3 className="py-3 font-weight-bold">
			              <strong>Logs-Analysis</strong>
			            </h3>
			            <p className="pb-3">
			              Python is used to interact with a large SQL database containing over a million rows from a news website.
			               Complex SQL queries are built to draw business conclusions from the data. It uses a single SQL statement
			                to answer each of three questions about the site.
			            </p>
			            <p>
			              <i class="fab fa-python icon"></i>
			              <img className="icon iconmine" src="/images/postgresql.png" alt="python"/>
			            </p>
			            <MDBBtn color="orange lighten-1" href="https://github.com/nachmansav/Logs-Analysis-Project" rounded size="md">
			            Codebase
			            </MDBBtn>
			          </div>
			        </div>
			      </div>
			    </MDBCol>

   			 </MDBRow>
		</div>
		)
	}
}

export default Portfolio