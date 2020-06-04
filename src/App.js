import React from 'react';
import logo from './logo.svg';
import './App.css';
import houseSrc from './images/house.png';
import lightingSrc from './images/lighting.png';
import lightSwitchOnSrc from './images/lightSwitchOn.png'
import lightSwitchOffSrc from './images/lightSwitchOff.png'

let lightingCss = {
  width: "440px",
  position: "absolute",
  left: "35px",
  top: "100px",
  zPosition: "1"
};

class Light extends React.Component {
  render() {
    return (
      <img src={lightingSrc} alt="light" style={lightingCss} />
      );
  }
}

let lightSwitchCSS = {
  position: "absolute",
  width: "60px",
  left: "280px",
  top: "250px"
}

class LightSwitch extends React.Component {
  render() {
    console.log('alexmark2:' + this.props.lightOn)
    return (
      <img
        src={this.props.lightOn ? lightSwitchOnSrc : lightSwitchOffSrc}
        style={lightSwitchCSS} 
        onClick={() => this.props.handleClick(!this.props.lightOn)}/>
      );
  }
}

class House extends React.Component {

  handleClick() {

  }

  render() {
    console.log('alexmark this.props.lightOn:' + this.props.lightOn);
    return (
      <span>
        <img src={houseSrc} alt="house" style={{width: "500px", zPosition: "2"}} />
        {this.props.lightOn &&
          <Light />
        }
        <LightSwitch lightOn={this.props.lightOn} handleClick={(value) => this.props.handleClick(value)}/>
      </span>
      );
  }
}

class IgniteDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightOn : true
    }
  }

  handleClick(value) {
    this.setState({
      lightOn : value
    });
  }

  render() {
    return (
      <div className="IgniteDemo">
        <House lightOn={this.state.lightOn} handleClick={(value) => this.handleClick(value)}/>
      </div>
    );
  }
}

export default IgniteDemo;
