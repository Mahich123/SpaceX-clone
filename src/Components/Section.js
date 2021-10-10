import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({ title1,  title2,  title3, button, backgroundImage}) {

    return (
        <Wrap bgImg={backgroundImage}>
        <Fade  bottom>
        <Content>
           <Text>
               <h2>{title1}</h2>
               <h1>{title2}</h1>
               <p>{title3}</p>
           </Text>
           <Button>
               {button}
           </Button>
           </Content>
           </Fade>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    // background-image: url('/images/astronaut.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-image: ${(props) => `url("/images/${props.bgImg}")`};
    
`
const Text = styled.div`
    font-family: 'Oswald', sans-serif;

`
const Content = styled.div`
    color: #fff;
    margin: 0 0 9em 4em;
    width: 29em;

    h2, h1 {
        text-transform: uppercase;
        margin-bottom: .5em;
    }
    h1 {
        font-weight : bold;
        font-size: 2.5em;
    }
    h2 {
        font-weight: 100;
        font-size: 1em;
        letter-spacing: 3px;
    }
    p {
        letter-spacing: 1.5px;
    }

    @media only screen and (max-width: 900px) {
         
            color: #fff;
            margin: 0 0 3em 1em;
            width: 18em;
        
            h2 {
                font-size: smaller;
            }
            p {
                letter-spacing: 0;
            }
            h1 {
                font-size: 2em;
            }
    }

    @media only screen and (min-width: 375px) {
        width: 22em;
    }

    @media only screen and (max-width: 280px) {
        width: 16em;
    }
    
`
const Button = styled.div`
    padding: 19px 0px;
    margin: 29px 0 0;
    border: 2px solid #fff;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 41%;
    cursor: pointer;

   
    :hover {
        background: #141414;
        color: #fff;
        transition: .5s;
    }

    @media only screen and (max-width: 900px) {
        width: 47%;
    }
`
