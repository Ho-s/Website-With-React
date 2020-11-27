import React, { createRef, PureComponent } from 'react';

class Gallery extends PureComponent {
    state={
        deg:0,
        n:0,
        picture:false,
    }

    carousel = createRef()
    choice = createRef()
    cell =createRef()

    clickLeft = () => {
        this.setState((prevState)=>{
            if(this.state.n<=0){
                return{
                    deg:prevState.deg+10,
                    n:35
                }
            }else{
                return{
                    deg:prevState.deg+10,
                    n:prevState.n-1
                }
            }
        })
        this.carousel.current.style.transform = `rotateX(-10deg) rotateY(${this.state.deg+10}deg)`
    }

    clickRight=()=>{
        this.setState((prevState)=>{
            if(this.state.n>=35){
                return{
                    deg:prevState.deg-10,
                    n:0
                }
            }else{
                return{
                    deg:prevState.deg-10,
                    n:prevState.n+1
                }
            }
        })
        this.carousel.current.style.transform = `rotateX(-10deg) rotateY(${this.state.deg-10}deg)`
    }
    

    onClickChoice=()=>{
        this.setState(({
            picture:true,
        }))
        this.carousel.current.style.display='none'
    }

    onLeaveChoice=()=>{
        this.setState(({
            picture:false,
        }))
        this.carousel.current.style.display='block'
    }

    makeCarouselCell=()=>{
        const cellCount=36
        const degPerCell=360/cellCount
        const n=Math.ceil(this.state.deg / 360)
        
        return(
            <>
                {Array(cellCount).fill().map((i,idx)=>{
                    const className=this.state.deg-(n*360)===degPerCell-((idx+1)*10) ? true : false
                    return(
                        <>
                            {className && 
                            <li ref={this.choice} onClick={this.onClickChoice} key={idx}
                            style={{
                                backgroundImage: `url('./MYBOX/_(${idx+1}).jpg')`,
                                transform: `rotateY(${degPerCell*(idx)}deg) translateZ(550px)`,
                            }}
                            className={'choice'}>
                            </li>}

                            {!className &&
                            <li ref={this.cell} key={idx}
                            style={{
                                backgroundImage: `url('./MYBOX/_(${idx+1}).jpg')`,
                                transform: `rotateY(${degPerCell*(idx)}deg) translateZ(500px)`,
                            }}
                            className={'carousel_cell'}>
                            </li>}
                        </>
                    )
                })}
            </>
        )
    }

    render() {
        return (
            <>
                <div  style={{ float: 'left', width: '100%', height: '100%', backgroundColor: 'black' }}>
                    {this.state.picture &&
                    <div className='full'>
                        <div className='full-top'>{this.state.n+1}/36</div>
                        <div onClick={this.onLeaveChoice} className='full-button'>X</div>
                        <div onClick={this.clickLeft} className='full-left'>&#8592;</div>
                        <div style={{ backgroundImage: `url('./MYBOX/_(${this.state.n+1}).jpg')` }} className='full-middle'></div>
                        <div onClick={this.clickRight} className='full-right'>&#8594;</div>
                    </div>
                    }
                    <div className='scene'>
                        <ul ref={this.carousel} className='carousel'>
                            <this.makeCarouselCell/>
                            {/* {this.makeCarouselCell()} */}
                        </ul>
                        <button className='button-left' onClick={this.clickLeft}>&#8592;</button>
                        <button className='button-right' onClick={this.clickRight}>&#8594;</button>
                    </div>
                </div>
            </>
        )
    }
};
export default Gallery