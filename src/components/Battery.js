import React, { Component } from 'react';
import '../App.css';

class Battery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,

        }
        setInterval(() => {
            this.setState((prev) => {
                if (prev.index === 3 ) {
                    prev.index = 0
                } else {
                    prev.index++
                }
                return {
                    index: prev.index
                }
            })
        }, 1000)
    }
    render() {
        const {index} = this.state;
        let color = ''
        if(index === 1) {
            color = 'red'
        } else if(index === 2) {
            color = 'yellow'
        } else if (index === 3) {
            color = 'green'
        }
        return (
            <div className={'battery'}>
                <div className={'battery__content'}>
                    <div style={{background: color}} className={` ${index > 0? 'battery__item' : null}`}></div>
                    <div style={{background: color}} className={`${index > 1? 'battery__item' : null}`}></div>
                    <div style={{background: color}} className={`${index > 2? 'battery__item' : null}`}></div>
                </div>
            </div>
        )
    }
}

export default Battery;