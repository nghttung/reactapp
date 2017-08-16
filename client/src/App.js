import React, { Component } from 'react';
import {flatten, times, range} from 'lodash'
import { StickyContainer, Sticky } from 'react-sticky';

import Img from 'react-image'

import './App.css';
import { Grid,Col, Row } from 'react-bootstrap'

class App extends Component {
  state = {cities: []}

  async componentDidMount() {
    const response = await fetch('/cities')
    const cities   = await response.json()

    this.setState({cities: cities})
  }

  render() {

    const Number = 5
    const paragraphs = flatten(times(Number,(index)=>
        <p key={index}> Thanh Tung, Thanh Tung, Thanh Tung </p>
    ))

    const Number_img = 5
    const Imgaa = range(0,Number_img).map((i)=>{
      return (
        <div className="sidebar-kitties" key={i}>
          <StickyContainer style={{zIndex:2}}>
        
            <img src="../img/avatar/avatar.jpg" />
          
              
          </StickyContainer>
        </div>
      )
    })

    return (
      <div>
        <h2>{process.env.MY_VARIABLE}</h2>
        <ul>
          {this.state.cities.map( (city, i) => {
            return <li key={i}> <b>{city.name}</b>: {city.population}</li>
          })}
        </ul>
        <Grid>
          <Row className="show-grid">
            <Col lg={8}>
              {paragraphs.map(paragraph =>paragraph)}
            </Col>
            <Col lg={4}>{Imgaa}</Col>
          </Row>
      
        </Grid>
      </div>
    );
  }
}

export default App; 