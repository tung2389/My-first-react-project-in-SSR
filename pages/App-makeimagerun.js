import React, { Component } from 'react';
import '../src/App.css';

const myphoto = [
  '/static/IMG_1.jpg',
  '/static/IMG_2.jpg',
  '/static/IMG_3.png',
  '/static/IMG_4.jpg'
];

class App_makeimagerun extends Component {
  constructor(props) {
    super(props);

    this.state = { currentGP: 0 };

    this.interval = null;

    this.nextGP = this.nextGP.bind(this);
  }

  nextGP() {
    let current = this.state.currentGP;
    let next = ++current % myphoto.length;
    this.setState({ currentGP: next });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextGP, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let src = myphoto[this.state.currentGP];
    return (
      <div>
        <h1>My photos</h1>
        <img src={src}  width="1000" height="400" align="center" valign="center"/>
      </div>
    );
}

}


  


export default App_makeimagerun;