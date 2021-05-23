import React from 'react'
import '../App.css';
class TrafficLight extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            time: 10,
            active: true
        }
        setInterval(() => {
            this.setState((prevState) => {
                return {
                    time: prevState.time <= 0 ?  10 : prevState.time - 1,
                    active: prevState.time <= 0 ? !prevState.active : prevState.active
                }
            })
        }, 500);
    }
    render() {
        const traffic = this.state.time;
        const active = this.state.active;
        return (
            <>
                <div className='block'>
                    <div className={`${active === true ? '' : 'red'} item`}></div>
                    <div className="item yellow"><span>{traffic}</span></div>
                    <div className={`${active === true ? 'green' : '' } item`}></div>
                </div>
            </>
        );
    }
}

export default TrafficLight;