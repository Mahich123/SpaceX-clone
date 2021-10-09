import React from 'react'
import Section from './Section'
import styled from 'styled-components'

function Home() {
    return (
        <Container>
            <Section 
                backgroundImage = "astronaut"
                title1 = "Completed Mission"
                title2 = "Dragon Returns To Earth"
                title3 = "Dragon completes world's first all-civilian mission to orbit"
                button = "Rewatch"
            />
            <Section 
                backgroundImage = "Homepage_SL_2-1_Desktop"
                title1 = "RECENT LAUNCH"
                title2 = "STARLINK MISSION"
                button = "Rewatch"
            />
            <Section 
                backgroundIimage = "HP_CRS23_causeway_DSC_7027_Desktop"
                title1 = "RECENT LAUNCH"
                title2 = "CRS-23 MISSION"
                button = "Rewatch"
            />
            <Section
                backgroundImage = "hls-resized-2"
                title2 = "STARSHIP TO LAND NASA ASTRONAUTS ON THE MOON"
                button = "Rewatch"
            />
            
        </Container>
    )
}

export default Home
const Container = styled.div`
    // height: 100vh;
`