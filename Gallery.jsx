import React, { createRef, PureComponent } from 'react';

class Gallery extends PureComponent {

    state={
        deg:0,
    }

    carousel = createRef()

    clickLeft = () => {
        this.setState((prevState)=>{
            return{
                deg:prevState.deg+10,
            }
        })
        this.carousel.current.style.transform = `rotateY(${this.state.deg}deg)`
    }

    clickRight=()=>{
        this.setState((prevState)=>{
            return{
                deg:prevState.deg-10,
            }
        })
        this.carousel.current.style.transform = `rotateY(${this.state.deg}deg)`
    }
    

    makeCarouselCell=()=>{
        const cellCount=36
        const degPerCell=360/cellCount
        const className=this.state.deg===degPerCell-10 ? 'choice' : 'carousel_cell'

        return(
            <>
                {Array(cellCount).fill().map((i)=>{
                    <div
                    style={{
                        backgroundImage: `url('./MYBOX/_${i}.jpg')`,
                        transform: `rotateY(${degPerCell*(i-1)}deg) translateZ(500px)`
                    }}
                    className={className}>
                    </div>
                })}
            </>
        )
    }

    render() {
        return (
            <>
                <div style={{ float: 'left', width: '100%', height: '100%', backgroundColor: 'black' }}>
                    <div className='scene'>
                        <div ref={this.carousel} className='carousel'>
                            <makeCarouselCell/>
                        </div>
                        <button className='button-left' onClick={this.clickLeft}>L</button>
                        <button className='button-right' onClick={this.clickRight}>R</button>
                    </div>
                </div>
            </>
        )
    }
};
export default Gallery