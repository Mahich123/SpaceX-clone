import React from 'react'
import styled from 'styled-components'
function Section({ title1,  title2,  title3, button, backgroundImage}) {

    return (
        <Wrap bgImg={backgroundImage}>
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
    background-image: ${({ props }) => `url("/images/${props.bgImg}.jpg")`}
    
`
const Text = styled.div`
    font-family: 'Oswald', sans-serif;

`
const Content = styled.div`
    color: #fff;
    margin: 0 0 11em 4em;
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
`