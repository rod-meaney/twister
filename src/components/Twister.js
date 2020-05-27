import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import RangeSlider from 'react-bootstrap-range-slider';
import TwisterImg from './TwisterImg';

class Twister extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      current:this.getRandomInt(15),
      spinning:false,
      times:0,
      maxTimes:10
    }
    this.spin = this.spin.bind(this);  
  }
  
  getRandomInt(max) {return Math.floor(Math.random() * Math.floor(max));}
  startSpin(){
    this.setState({times:0});
    setTimeout(() => {this.spin()},200);
  }
  spin(){
    if (this.state.times<=this.state.maxTimes){
      setTimeout(() => {
        this.setState({current:this.getRandomInt(15), times:this.state.times+1, spinning:true});
        this.spin();
      }, this.state.times*10);
    } else {
      this.setState({spinning:false});
    }
  }

  render(){
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>Twister spinner</Navbar.Brand>
        </Navbar>
        <Card>
          <Card.Body>
            <TwisterImg current={this.state.current} spinning={this.state.spinning} /><br />
            <Button disabled={this.state.spinning} variant="primary" onClick={() => this.startSpin()}>Spin</Button><br /><br />
            <RangeSlider
              disabled={this.state.spinning}
              value={this.state.maxTimes}
              onChange={slideStop => this.setState({maxTimes:parseInt(slideStop.target.value)})}
              min={0}
              max={40}
              step={10}
            />
          </Card.Body>
        </Card>
      </>
    )
  }
}
export default Twister;