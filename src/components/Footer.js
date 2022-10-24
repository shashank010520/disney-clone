import React from 'react'
import styled from "styled-components";

const Footer = (props) => {
    return (
        <Container>
            © Disney+ Clone Developed by SHASHANK 
        <Content>
            E-mail at: shashank010520@gmail.com
        </Content>
        </Container>
    )
}

const Container = styled.div`
text-align: center;
padding-bottom: 10%;
font-family: "Lucida Console", "Courier New", monospace;
text-transform: uppercase;
`;

const Content = styled.div`
text-transform: uppercase;
`;

export default Footer
