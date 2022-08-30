import React from 'react';
import Battery from './components/Battery';
import Sliders from './components/sliders';
import TrafficLight from './components/TrafficLight'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 10,
      active: 2,
      show: true,
    }
    setInterval(() => {
      this.setState((prevState) => {
        if (prevState.time === 0) {
          prevState.active = prevState.active === 1 ? 2 : 1;
        }
        if(prevState.time <= 5) {
          prevState.show = false
          setTimeout(() => {
            prevState.show = true
          }, 200);
        }
        return {
          time: prevState.time <= 0 ? 10 : prevState.time - 1,
          active: prevState.active,
        }
      })
    }, 500);
  }
  render() {
    return (
      <>
        {/*<TrafficLight time={this.state.time} active={this.state.active === 1} show={this.state.show}/>*/}
        {/*<TrafficLight time={this.state.time} active={this.state.active === 2} show={this.state.show}/>*/}
        <Sliders/>
        {/* <Battery/> */}
      </>
    );
  }
}
export default App;
