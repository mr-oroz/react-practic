import React from 'react';
import Sliders from './components/sliders';
import Time from './components/Time';
import TrafficLight from './components/TrafficLight'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 10,
      active: 2,
      show: true,
      data: new Date(),
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
          data: prevState.data,
        }
      })
    }, 500);
  }
  render() {
    return (
      <>
        <TrafficLight time={this.state.time} active={this.state.active === 1} show={this.state.show}/>
        <TrafficLight time={this.state.time} active={this.state.active === 2} show={this.state.show}/>
        <Time time={this.state.data}/>
        <Sliders/>
      </>
    );
  }
}
export default App;
