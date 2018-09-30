import React, { Component } from "react";
import { Router } from "@reach/router";
import styled from "styled-components";
import './index.css'
import Nav from './components/Nav'
// import Instruments from './components/Instruments'
import EquipmentTable from './components/EquipmentTable'
import {
  About,
  Artists,
  Home,
  Releases,
  Sights
} from './pages'

const Wrapper = styled.div`
  display: flex;
`;

const Inner = styled.div`
  background-color: black;
  margin: auto;
  margin-left: 241px;
  width: 100%;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Nav />
        <Inner>
          <Router>
            <Home path="/" />
            <About path="/about" />
            <EquipmentTable path="/equipment" />
            <Sights path="/sights" />
            <Artists path="/artists" />
            <Releases path="/releases" />
          </Router>
        </Inner>
      </Wrapper>
    );
  }
}

export default App;
