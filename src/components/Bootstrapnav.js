import React, { Component } from 'react';
import { Navbar,NavItem,NavbarHeader,NavbarItems,NavbarDropdown,DropdownMenu} from 'react-bootstrap-navbar';
const dropdownItems = [
    {href: '#', name: 'Overview'},
    {href: '#', name: 'Setup'},
    {href: '#', name: 'Usage'},
];

const Bootstrapnav = () => (
    <Navbar>
        <NavbarHeader href="homepage.html" name="Website Name"/>
        <NavbarItems>
            <NavItem link="about.html" title="About" />
            <NavItem link="contact.html" title="Contact" />
            <NavItem link="services.html" title="Services" />
            <NavbarDropdown name="Features">
                  <DropdownMenu menuItems={dropdownItems}/>
            </NavbarDropdown>
        </NavbarItems>
    </Navbar>
  );

export default Bootstrapnav;
