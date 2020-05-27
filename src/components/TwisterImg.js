import React from 'react';
import BlueFootLeft from '../media/BlueFootLeft.png';
import BlueFootRight from '../media/BlueFootRight.png';
import BlueHandLeft from '../media/BlueHandLeft.png';
import BlueHandRight from '../media/BlueHandRight.png';
import GreenFootLeft from '../media/GreenFootLeft.png';
import GreenFootRight from '../media/GreenFootRight.png';
import GreenHandLeft from '../media/GreenHandLeft.png';
import GreenHandRight from '../media/GreenHandRight.png';
import RedFootLeft from '../media/RedFootLeft.png';
import RedFootRight from '../media/RedFootRight.png';
import RedHandLeft from '../media/RedHandLeft.png';
import RedHandRight from '../media/RedHandRight.png';
import YellowFootLeft from '../media/YellowFootLeft.png';
import YellowFootRight from '../media/YellowFootRight.png';
import YellowHandLeft from '../media/YellowHandLeft.png';
import YellowHandRight from '../media/YellowHandRight.png';

class TwisterImg extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      string:["Blue Foot Left", "Blue Foot Right", "Blue Hand Left","Blue Hand Right", "Green Foot Left", "Green Foot Right", "Green Hand Left", "Green Hand Right", "Red Foot Left", "Red Foot Right", "Red Hand Left", "Red Hand Right", "Yellow Foot Left", "Yellow Foot Right", "Yellow Hand Left", "Yellow Hand Right"],
      img:[BlueFootLeft, BlueFootRight, BlueHandLeft, BlueHandRight, GreenFootLeft, GreenFootRight, GreenHandLeft, GreenHandRight, RedFootLeft, RedFootRight, RedHandLeft, RedHandRight, YellowFootLeft, YellowFootRight, YellowHandLeft, YellowHandRight],
    }  
  }
  render() {
    return (
      <>
        <img src={this.state.img[this.props.current]} alt={this.state.string[this.props.current]}/><br />
        <h3>{!this.props.spinning ? this.state.string[this.props.current] : "-"}</h3>
      </>)
  }
}
export default TwisterImg;