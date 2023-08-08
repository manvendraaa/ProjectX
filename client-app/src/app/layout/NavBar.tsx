import React from "react";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";

interface Props {
    formOpen: () => void;
}

export default function NavBar({formOpen}: Props) {
    return (
        <Menu inverted fixed="top">
            <Container>
                <MenuItem header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight :  '10px'}} />
                    Reactivities
                </MenuItem>
                <MenuItem name="Activities" />
                <MenuItem>
                    <Button onClick={formOpen} positive content="Create Activity" />
                </MenuItem>
            </Container>
        </Menu>
    )
}