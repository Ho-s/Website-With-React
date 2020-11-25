import React, { createRef, PureComponent } from 'react';

class AboutUs extends PureComponent {
    state = {
        left: false,
        right: false,
        x: null,
        y: null,
        width: null,
        height: null,
    }

    left = createRef()
    right = createRef()

    updateMousePositionLeft = (e) => {
        const left = e.target.getBoundingClientRect()
        this.setState(({
            left: true,
            x: e.clientX - left.left,
            y: e.clientY - left.top - 0.109375,
            width: left.width,
            height: left.height
        }))
    }

    updateMousePositionRight = (e) => {
        const right = e.target.getBoundingClientRect()
        this.setState(({
            right: true,
            x: e.clientX - right.left + 0.5,
            y: e.clientY - right.top + 0.1875,
            width: right.width,
            height: right.height
        }))
    }

    componentDidMount() {
        this.left.current.addEventListener('mousemove', this.updateMousePositionLeft)
        this.left.current.addEventListener('mouseleave', () => {
            this.setState(({
                left: false,
            }))
        })
        this.right.current.addEventListener('mousemove', this.updateMousePositionRight)
        this.right.current.addEventListener('mouseleave', () => {
            this.setState(({
                right: false,
            }))
        })
    }

    componentWillUnmount() {
        this.left.current.removeEventListener('mousemove', this.updateMousePositionLeft)
        this.right.current.removeEventListener('mousemove', this.updateMousePositionRight)
    }

    normal={
        width: '80px',
        height: '50px',
        fontSize: '20px',
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: '2.5',
        listStyle: 'none',
        cursor: 'pointer',
        position:'relative',
    }

    render() {
        return (
            <>
                <div className='about-top'>
                    <div ref={this.left} className='about-top-left'>
                        {this.state.left && <div className='zoom' style={
                            {
                                top: this.state.y,
                                left: this.state.x,
                                backgroundSize: `${this.state.height} ${this.state.width}`,
                                backgroundImage: 'url("./images/6.jpg")',
                                backgroundPosition: `-${this.state.x * 2 + 100} -${this.state.y * 2 + 100} `
                            }}>
                        </div>}
                    </div>
                    <div className='about-top-right'>
                        <div style={{paddingTop:'80px',marginLeft:'100px',fontSize:'30px'}}>BlaBla</div>
                        <div style={{marginLeft:'100px',marginTop:'30px'}}>BlaBla</div>
                        <div style={{marginTop:'30px',marginLeft:'100px',position:'relative'}}>
                            <div className='news-div-wrapper' style={this.normal}>
                                <div style={{backgroundColor:'black'}} className='before'></div>
                                Love Me
                                <div style={{backgroundColor:'black'}} className='after'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about-bottom'>
                    <div className='about-bottom-left'>
                        <div style={{paddingTop:'80px',marginLeft:'100px',fontSize:'30px'}}>BlaBla</div>
                        <div style={{marginLeft:'100px',marginTop:'30px'}}>BlaBla</div>
                        <div style={{marginTop:'30px',marginLeft:'100px',position:'relative'}}>
                            <div className='news-div-wrapper' style={this.normal}>
                                <div style={{backgroundColor:'black'}} className='before'></div>
                                Love Me
                                <div style={{backgroundColor:'black'}} className='after'></div>
                            </div>
                        </div>
                    </div>
                    <div ref={this.right} className='about-bottom-right'>
                        {this.state.right && <div className='zoom' style={
                            {
                                top: this.state.y,
                                left: this.state.x,
                                backgroundSize: `${this.state.height} ${this.state.width}`,
                                backgroundImage: 'url("./images/7.jpg")',
                                backgroundPosition: `-${this.state.x * 2 + 100} -${this.state.y * 2 + 100} `
                            }}>
                        </div>}
                    </div>
                </div>
            </>
        )
    }
};
export default AboutUs