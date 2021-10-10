import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <List>
        <p>
          <a href="#"><span className="span1">SPACEX © 2021</span></a>
        </p>
        <p>
          <a href="#"><span>TWITTER</span></a>
        </p>
        <p>
          <a href="#"><span>YOUTUBE</span></a>
        </p>
        <p>
          <a href="#"><span>INSTAGRAM</span></a>
        </p>
        <p>
          <a href="#"><span>FLICKR</span></a>
        </p>
        <p>
          <a href="#"><span>LINKEDIN</span></a>
        </p>
        <p>
          <a href="#"><span>PRIVACY POLICY</span></a>
        </p>
      </List>
    </Container>
  );
}

export default Footer;

const Container = styled.div``;
const List = styled.div`
  background: #000;
  padding: 34px 0;
  display: flex;
 justify-content: center;

 p {
     font-size: 12px;
     font-family: "Oswald", sans-serif;
 }

 span {
     padding-right: 4em;
 }
 
`;
