import React from "react"
import { MDBContainer, MDBFooter } from "mdbreact";
import "./index.css";

class Footer extends React.Component{
	render(){
		return (
		<MDBFooter color="orange lighten-1" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
      2019 Copyright: Nachman Savin
        </MDBContainer>
      </div>
    </MDBFooter>
  		)
	}

}

export default Footer