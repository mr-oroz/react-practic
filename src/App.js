import React from 'react';
import TrafficLight from './components/TrafficLight'
class App extends React.Component {
  render() {
    return (
      <>
        <TrafficLight/>
        <TrafficLight/>
      </>
    );
  }
}
export default App;
