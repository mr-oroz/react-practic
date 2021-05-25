import React, { Component } from 'react'
import '../App.css'

export class Sliders extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [
                'https://ichef.bbci.co.uk/news/640/cpsprodpb/FBF5/production/_118110546_gettyimages-1230031610.jpg',
                'https://s0.rbk.ru/v6_top_pics/resized/1200xH/media/img/3/09/756140788840093.jpg',
                'https://icdn.lenta.ru/images/2018/04/13/17/20180413174621950/detail_6a914e7761236d3745d4c1a442677690.jpg',
                'https://cdn.livesport.ru/l/tips/express/2020/03/01/express/picture.jpg?1582962801',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3JKK0IPTFXhgR0PRsB10r_HYTCgQ9lltbg&usqp=CAU'
            ],
            index: 0,
        }
        setInterval(() => {
            this.setState((prev) => {
                if (prev.index === 4) {
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
            <>
                <div className='slider'>
                    <div className='slider__football'>
                        <img className='slider__img' src={this.state.images[this.state.index]} />
                        <div className='slider__inner'>
                            {
                                this.state.images.map((images, index) => (
                                    this.state.index === index ? null : <img className={this.state.index === index ? 'border' : ''} src={images} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Sliders
