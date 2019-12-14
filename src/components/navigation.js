import React, { Component } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="sm">
          <NavbarBrand
            tag={RRNavLink}
            to="/"
            className="mr-auto font-weight-bold"
          >
            Weather
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="mr-2" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className="ml-auto">
              <NavItem>
                <NavLink tag={RRNavLink} to="/" activeClassName="active">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={RRNavLink}
                  to="/favorites"
                  activeClassName="active"
                >
                  Favorites
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
// class Navbar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-expand-sm navbar-light bg-light font-weight-bold">
//         <Link to="/" className="navbar-brand">
//           Weather
//         </Link>
//         <button
//           className="navbar-toggler"
//           data-toggle="collapse"
//           data-target="#navbarMenu"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarMenu">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <Link to="/" className="nav-link">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/favorites" className="nav-link ">
//                 Favorites
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     );
//   }
// }

// export default Navbar;
