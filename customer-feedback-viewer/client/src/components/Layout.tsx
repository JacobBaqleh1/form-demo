import React from 'react';
import { Navbar, Alignment } from '@blueprintjs/core';

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Navbar>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>Customer Feedback Viewer</Navbar.Heading>
                </Navbar.Group>
            </Navbar>
            <main>{children}</main>
        </div>
    );
};

export default Layout;