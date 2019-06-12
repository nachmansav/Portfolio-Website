import React from "react"
import { MDBMask, MDBView } from "mdbreact";
import "./index.css";

class Hero extends React.Component{
	render(){
		return(
			<div id = "apppage">
			<MDBView id="hero">
			    <MDBMask className="d-flex justify-content-center align-items-center">
			          <div className="white-text text-center text-md-left">
			            <h1 className=" font-weight-bold">
			              Nachman Savin{" "}
			            </h1>
			            <h2 className="typewriter">Full Stack Web Developer</h2>
			          </div>
			    </MDBMask>
	  		</MDBView>
	  		</div>
	  	)
	}

}

export default Hero

