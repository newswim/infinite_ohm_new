import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
  font-family: 'Tienne', serif;
  margin: auto;
  padding-top: 120px;
  max-width: 540px;
  border-radius: 50%;

  div {
    color: #846e22;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }

  p {
    font-size: 20px;
    word-spacing: .15rem;
    text-align: justify;
  }
`

const About = () => {
  return (
    <Body>
      <div>∞</div>
      <p>
        Infinite Ohm is a Denton-based home studio and tape label run 
        by recording engineer Justin Lemons and visual artist Meredith Buie. 
        It encompasses a large, comfortable control room and a spacious and open 
        live room with great acoustics and a nice amount of natural light. 
        Although sessions are captured in 1 and 0s, we have made every effort 
        to fill these rooms with an array of vintage and modern analog equipment. 
        This includes a 10-channel Austrian console that spent its formative years 
        passing signals at the Vienna Opera House, as well as an extensive assortment 
        of microphones and musical instruments. Our recording philosophy is steeped 
        in traditional documentary-style practices, but we are more than capable of 
        accommodating most sessions, including on-location projects. Please feel free 
        to email us with any questions or concerns about rates, sessions, or general 
        recording advice. 
      </p>
      <br />
      <br />
      <div>infiniteohmrecording@gmail.com</div>
    </Body>
  )
}

export default About