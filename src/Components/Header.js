import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Header() {
  const [burgerStat, setburgerStat] = useState(false);
  return (
    <Container>
      <Logo>
        <a>
          <img src="./images/spacex-logo-black-and-white.png" />
        </a>
      </Logo>
      <List>
        <Menu>
          <li>
            <a href="#">
              <span>FALCON 9 </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>FALCON HEAVY</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>DRAGON</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>STARSHIP</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>HUMAN SPACEFLIGHT</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>RIDESHARE</span>
            </a>
          </li>
        </Menu>
        <RightMenu>
          <li>
            <a href="#">SHOP</a>
          </li>
          <CustomMenu onClick={() => setburgerStat(true)} />
        </RightMenu>

        <BurgerNav Work={burgerStat}>
          <CloseWrap>
            <CustomClose onClick={() => setburgerStat(false)} />
          </CloseWrap>
          <p>
            <a href="#">FALCON 9</a>
          </p>
          <p>
            <a href="#">FALCON HEAVY</a>
          </p>
          <p>
            <a href="#">DRAGON</a>
          </p>
          <p>
            <a href="#">STARSHIP</a>
          </p>
          <p>
            <a href="#">HUMAN SPACEFLIGHT</a>
          </p>
          <p>
            <a href="#">RIDESHARE</a>
          </p>
          <p>
            <a href="#">MISSION</a>
          </p>
          <p>
            <a href="#">LAUNCHES</a>
          </p>
          <p>
            <a href="#">CAREERS</a>
          </p>
          <p>
            <a href="#">UPDATES</a>
          </p>
          <p>
            <a href="#">SHOP</a>
          </p>
        </BurgerNav>
      </List>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 32px;
  position: fixed;
  display: flex;
  align-items: center;
  text-align: center;
  padding-top: 1.5em;
  padding: 2em;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;

  li {
    list-style-type: none;
    justify-content: center;
    padding-right: 1em;
    padding-top: 1.5em;
    color: white;
    font-weight: bold;
    font-size: smaller;
    span {
      font-size: 13px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: #fff;
        opacity: 0;
        left: 0;
        right: 0;
        bottom: -6px;
        position: absolute;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:after {
        opacity: 1;
      }
    }
  }

  li a {
    color: #fff;
    font-family: "Oswald", sans-serif;
  }
`;

const Logo = styled.div`
  width: 26%;
  padding: 0 1em;
  margin: 1em 0 0 1em;

  img {
    height: 100%;
    width: 80%;
  }

  @media only screen and (max-width: 900px) {
    width: 81%;
    margin-top: 0;
  }
`;

const RightMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    list-style-type: none;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: smaller;
    margin-right: 1em;
  }
  li a {
    color: #fff;
    font-family: "Oswald", sans-serif;
  }
`;

const List = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  @media only screen and (max-width: 900px) {
    li {
      display: none;
    }
  }
`;
const CustomMenu = styled(MenuIcon)`
  color: #fff;
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: #000;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: end;
  transition: 0.4s;
  transform: ${(props) => (props.Work ? "translateX(0)" : "translateX(100%)")};

  p a {
    color: white;
    font-weight: 600;
  }

  p {
    padding: 15px 0;
    border-bottom: 1px solid rgb(170 169 172 / 44%);
  }
`;

const CustomClose = styled(CloseIcon)`
  color: #fff;
  cursor: pointer;
`;

const CloseWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
