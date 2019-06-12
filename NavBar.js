import React from "react"
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse,
MDBContainer } from "mdbreact";
import "./index.css";

class NavBar extends React.Component {
	state = {
	  collapsed: false
	};

	handleTogglerClick = () => {
	this.setState({
	  collapsed: !this.state.collapsed
	});
	};

	render() {
		const overlay = (
		  <div id="sidenav-overlay" style={{ backgroundColor: "transparent" }} onClick={this.handleTogglerClick} />
		);

		return (
			 <Router>
			     <MDBNavbar color="orange lighten-1" dark expand="md" fixed="top" scrolling transparent>
			       <MDBContainer>
			         <MDBNavbarToggler onClick={this.handleTogglerClick} />
			         <MDBCollapse isOpen={this.state.collapsed} navbar>
			           <MDBNavbarNav left>
			             <MDBNavItem active>
			               <a className="nav-link" href="#hero">Home</a>
			             </MDBNavItem>
			             <MDBNavItem>
			               <a className="nav-link" href="#portfolio">Portfolio</a>
			             </MDBNavItem>
			             <MDBNavItem>
			               <a className="nav-link" href="#aboutMe">About Me</a>
			               </MDBNavItem>
			               <MDBNavItem>
			               <a className="nav-link" href="https://www.linkedin.com/in/nachman-savin/"><i class="fab fa-linkedin"></i></a>
			               </MDBNavItem>
			               <MDBNavItem>
			               <a className="nav-link" href="https://github.com/nachmansav/"><i class="fab fa-github"></i></a>
			               </MDBNavItem>

			           </MDBNavbarNav>
			           <MDBNavbarNav right>
			           </MDBNavbarNav>
			         </MDBCollapse>
			       </MDBContainer>
			     </MDBNavbar>
			     {this.state.collapsed && overlay}
			 </Router>
		  )
	};
};

export default NavBar