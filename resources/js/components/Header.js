import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, FormControl, FormGroup, Nav, NavDropdown, MenuItem, Button, Glyphicon, DropdownButton, InputGroup } from 'react-bootstrap';

class Header extends React.Component{

    constructor (props) {
        super(props)
        this.state = {
            isOpenElectronics: false,
            isOpenBook: false,
            isOpenHome: false,
            placeholder: "Search All",
            searchMenuItemns: ["Electronics", "Books", "Home"],
            dropDownSelected: "All",
            searchBoxText: "",
            shoppingCartOpen: false,
            menuItemMUI: ["Log In", "Register"],
            open: false
        }
        const a = true;
    // }

    
        // categoryOnHoverIn = (e) => {
        //     switch(e.target.id){
        //         case "electronics-nav-dropdown":{
        //             this.setState({ isOpenElectronics: true });
        //             break;
        //         }
        //         case "books-nav-dropdown":{
        //             this.setState({ isOpenBook: true });
        //             break;
        //         }
        //         case "home-requirements-nav-dropdown":{
        //             this.setState({ isOpenHome: true });
        //             break;
        //         }
        //     }
        // };
    
        // categoryOnHoverOut = () => {
        //     this.setState(() => {
        //     return {
        //         isOpenElectronics: false,
        //         isOpenBook: false,
        //         isOpenHome: false
        //     }
        //     });

        // };
    }
    // categoryClickHandler = (routeName) => {
    //     this.props.history.push(routeName);
    // };

    render () {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                    <Link to="/">Homie</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown
                            title="Menu 1"
                            id="electronics-nav-dropdown"
                            // onMouseEnter = { this.categoryOnHoverIn }
                            // onMouseLeave = { this.categoryOnHoverOut }
                            // open={ this.state.isOpenElectronics }
                            // onClick={() => this.categoryClickHandler("/electronics")}
                            
                        >
                            <NavDropdown.Item>Item 1</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}
// const Navbar = () => (
//     <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
//         <div className='container'>
//             <Link className='navbar-brand' to='/'>Homie</Link>
//             <ul className="nav navbar-nav">
//                 <li>Login Owner</li>
//                 <li>Register</li>
//             </ul>
//         </div>
//     </nav>
// )

export default Header