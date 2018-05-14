import React, { Component } from 'react';
import Section from '../section/section';
import Title from '../title/title';
import Subtitle from "../Subtitle/Subtitle";
import Pin from '../Pin/Pin';
import SecondPart from '../SecondPart/SecondPart';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Section className="head-section">
          <Title
            label="i am just another creative guy"
            className="head-title" 
            />
            <Subtitle>
              <span>who can build memorable creative </span>
              <span className="head-subtitle-tail"> 
                expeience for you
              </span>  
            </Subtitle>  
            <div className="pin-section">
              <Pin letter="A"/>
              <Pin letter="B"/>
              <Pin letter="C"/>
              <Pin letter="D"/>
            </div>
        </Section>  
        <Section className="footer-section">
          <Title
            label="WHAT I DO"
            className="head-title"
          />
          <Subtitle>
            <span className="footer-subtitle-tail">I specialize in creating inspirational websites,
                  logos, brochures and app UX/UI for  great individuals and small </span>
               <span className="footer-subtitle-tail"> to large sized companies across the world
                     helping them to market their business successfuly.</span>
          </Subtitle>
          <SecondPart className="second">
                <Pin letter="A"/>
                <h3>WEBSITES</h3>
                <p className="pTitle">Starts From $350</p>
                <p>I develop responsive websites,
                   menaing your website will look good on any device,
                   weather is a computer, mobile or tablet.</p>
          </SecondPart> 
          <SecondPart className="second">
                <Pin letter="B"/>
                <h3>IDENTITY</h3>
                <p className="pTitle">Starts From $140</p>
                <p>Creating a great brand image requires a 
                   full understandind of your business, 
                   target market and existing clientele.</p>
          </SecondPart> 
          <SecondPart className="second">
                <Pin letter="C"/>
                <h3>PRINT</h3>
                <p className="pTitle">Starts From $140</p>
                <p>I love print, I believe the selection of quality material is just us
                   important as the design it adds value to your brands.
                </p>
          </SecondPart> 
          <SecondPart className="second">
                <Pin letter="D"/>
                <h3>USER INTERFACE</h3>
                <p className="pTitle">Starts From $190</p>
                <p className="pText">I love to create a minimalist and clean UX/UI. 
                   I'm a strong believer that minimalism is the key to a great user inter</p>
          </SecondPart> 
        </Section>
        
      </div>
    );
  }
}

export default App;
