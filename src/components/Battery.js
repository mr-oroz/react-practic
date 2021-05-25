import React, { Component } from 'react';
import '../App.css';

class Battery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            color: [
                'red',
                'yellow',
                'green',
            ]
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
        return (
            <div className={'battery'}>
                <div className={'battery__content'}>
                    {this.state.color.map((color, index) => {
                        <div className={`battery__item  ${this.state.color[this.state.index]}`}></div>
                    })}
                </div>
            </div>
        )
    }
}

export default Battery;