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
  NotFound,
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
          <Router basename={process.env.PUBLIC_URL}>
            <NotFound default />
            <About path={process.env.PUBLIC_URL + '/about'} />
            <Artists path={process.env.PUBLIC_URL + '/artists'} />
            <EquipmentTable path={process.env.PUBLIC_URL + '/equipment'} />
            <Releases path={process.env.PUBLIC_URL + '/releases'} />
            <Sights path={process.env.PUBLIC_URL + '/sights'} />
            <Home path={process.env.PUBLIC_URL + '/'} />
          </Router>
        </Inner>
      </Wrapper>
    );
  }
}

export default App;
