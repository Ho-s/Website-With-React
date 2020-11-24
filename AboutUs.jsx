import React, { createRef, PureComponent } from 'react';

class AboutUs extends PureComponent {
    state = {
        x: null,
        y: null,
    }
    left = createRef()
    right = createRef()

    updateMousePositionLeft = (e) => {
        this.setState(({
            x: e.clientX - this.getRect()[0],
            y: e.clientY - this.getRect()[1]
        }))
        // console.log(this.state.x,this.state.y)
        return (
            <div style={{ top: this.state.y, left: this.state.x }}></div>
        )
    }

    updateMousePositionRight = (e) => {
        this.setState(({
            x: e.clientX - this.getRect()[2],
            y: e.clientY - this.getRect()[3]
        }))
        // console.log(this.state.x,this.state.y)
    }

    getRect = () => {
        const left = this.left.current.getBoundingClientRect()
        const right = this.right.current.getBoundingClientRect()
        console.log(left, right)
        return [left.left, left.top + 0.109375, right.left, right.top - 0.1875]
    }

    componentDidMount() {
        this.left.current.addEventListener('mousemove', this.updateMousePositionLeft)
        this.right.current.addEventListener('mousemove', this.updateMousePositionRight)
    }

    componentWillUnmount() {
        this.left.current.removeEventListener('mousemove', this.updateMousePositionLeft)
        this.right.current.removeEventListener('mousemove', this.updateMousePositionRight)
    }

    render() {
        return (
            <>
                <div className='about-top'>
                    <div ref={this.left} className='about-top-left'>
                        {/* <this.updateMousePositionLeft/> */}
                    </div>
                    <div className='about-top-right'>
                        <div>BlaBla</div>
                        <div>BlaBla</div>
                        <div>BlaBla</div>
                    </div>
                </div>
                <div className='about-bottom'>
                    <div className='about-bottom-left'>
                        <div>BlaBla</div>
                        <div>BlaBla</div>
                        <div>BlaBla</div>
                    </div>
                    <div ref={this.right} className='about-bottom-right'>
                        {/* <this.updateMousePositionRight/> */}
                    </div>
                </div>
            </>
        )
    }
};
export default AboutUs