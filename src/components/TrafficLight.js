import React from 'react'
import '../App.css';
class TrafficLight extends React.Component {
    render() {
        const traffic = this.props.time;
        const active = this.props.active;
        const show = this.props.show;
        return (
            <>
                <div className='block'>
                    <div className={`${active === true ? '' : 'red'} item`}></div>
                    <div className={`${show ? 'yellow' : 'yellow'} item`}><span >{traffic}</span></div>
                    <div className={`${active === true ? 'green' : ''} item`}></div>
                </div>
            </>
        );
    }
}

export default TrafficLight;