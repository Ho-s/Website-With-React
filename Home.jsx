import React, { createRef, PureComponent } from 'react';

class Home extends PureComponent {
    state = {
        create: [],
        picture: false,
        num: 1,
        n: 1,
    }

    backgroundScroll = createRef()
    mainBackground = createRef()

    handelScroll = () => {
        let scrollTop = document.body.scrollTop
        this.backgroundScroll.current.style.backgroundPositionY = `${scrollTop / 3}px`
        this.mainBackground.current.style.backgroundPositionY = `-${scrollTop / 6}px`
    }

    clickLoveMe = (e) => {
        e.stopPropagation()
        e.preventDefault()
        this.setState((prevState) => {
            return {
                create: [...prevState.create, 0]
            }
        })
        this.i++
        setTimeout(() => {
            this.setState((prevState) => {
                return {
                    create: prevState.create.slice(1)
                }
            })
        }, 900)
    }

    clickCreateFirst = () => {
        this.setState({
            picture: true,
            num: 11,
            n: 1,
        })
    }

    clickCreateSecond = () => {
        this.setState({
            picture: true,
            num: 21,
            n: 1,
        })
    }

    clickCreateThird = () => {
        this.setState({
            picture: true,
            num: 31,
            n: 1,
        })
    }

    clickCreateFourth = () => {
        this.setState({
            picture: true,
            num: 41,
            n: 1,
        })
    }
    
    clickCreateFifth = () => {
        this.setState({
            picture: true,
            num: 51,
            n: 1,
        })
    }

    clickRemove = () => {
        this.setState({
            picture: false,
        })
    }

    clickRight = () => {
        if (this.state.n === 5) {
            return
        } else {
            this.setState((prevState) => {
                return {
                    num: prevState.num + 1,
                    n: prevState.n + 1
                }
            })
        }
    }

    clickLeft = () => {
        if (this.state.n === 1) {
            return
        } else {
            this.setState((prevState) => {
                return {
                    num: prevState.num - 1,
                    n: prevState.n - 1
                }
            })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handelScroll);
    }


    componentWillUnmount() {
        window.removeEventListener('scroll', this.handelScroll);
    }

    render() {
        return (
            <>
                {this.state.picture &&
                    <div className='full'>
                        <div className='full-top'>{this.state.n}/5</div>
                        <div onClick={this.clickRemove} className='full-button'>X</div>
                        <div onClick={this.clickLeft} className='full-left'>&#8592;</div>
                        <div style={{ backgroundImage: `url(./images/${this.state.num}.jpg)` }} className='full-middle'></div>
                        <div onClick={this.clickRight} className='full-right'>&#8594;</div>
                    </div>
                }
                <header ref={this.backgroundScroll}>
                    <div className='top'>
                        <div className='top-left'></div>
                        <div className='top-Middle'>You<br /> And<br /> I</div>
                        <div className='top-right'></div>
                    </div>
                    <div className='middle'>Ever since I met you,<br />There has not been div moment that i ain't think about you.</div>
                </header>
                <main>
                    <div ref={this.mainBackground} className='main-top'>
                        <div className='inside-main-top'>
                            <div className='inside-main-top-up'>
                                <div className='inside-main-top-up-up'>Hello</div>
                                <div className='inside-main-top-up-down'>qwhrasdasdasdasdhqeqjwejkeqhqeqjwejkehqeqjwejkekwkqwekqwrkk<br /> wqkkrwqw ekqewkqhqeqjwejkehqeqjwejkehqeqjwejkeekqqkwekw<br /> ekqwek qwkq ehqeqjwejkehqeqjwejkehqeqjwejkehqeqjwejkekwkwqkqwek qwk</div>
                            </div>
                            <div className='inside-main-top-down' onClick={this.clickLoveMe}>Love Me
                                {this.state.create.length >= 1 && <div className='heart' style={{ top: '20px', right: '40px' }}>	&#128525;</div>}
                                {this.state.create.length >= 2 && <div className='heart' style={{ top: '12px', right: '-20px' }}>&#128420;</div>}
                                {this.state.create.length >= 3 && <div className='heart' style={{ top: '35px', right: '-33px' }}>&#10085;</div>}
                                {this.state.create.length >= 4 && <div className='heart' style={{ top: '42px', right: '20px' }}>&#128147;</div>}
                                {this.state.create.length >= 5 && <div className='heart' style={{ top: '33px', right: '30px' }}>&#128150;</div>}
                                {this.state.create.length >= 6 && <div className='heart' style={{ top: '17px', right: '50px' }}>&#128152;</div>}
                                {this.state.create.length >= 7 && <div className='heart' style={{ top: '-2px', right: '10px' }}>&#10084;</div>}
                                {this.state.create.length >= 8 && <div className='heart' style={{ top: '9px', right: '-2px' }}>&#10083;</div>}
                            </div>
                        </div>
                    </div>
                    <div className='main-bottom'>
                        <div className='left'>
                            <div onClick={this.clickCreateFirst} className='first'></div>
                            <div onClick={this.clickCreateSecond} className='second'></div>
                        </div>
                        <div className='right'>
                            <div onClick={this.clickCreateThird} className='third'></div>
                            <div onClick={this.clickCreateFourth} className='fourth'></div>
                            <div onClick={this.clickCreateFifth} className='fifth'></div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
};
export default Home