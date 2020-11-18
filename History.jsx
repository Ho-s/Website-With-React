import React, { createRef, PureComponent } from 'react';

class History extends PureComponent {
    state = {
        create: [],
        home: true,
        timer: false,
        about: false,
        news: false,
        gallery: false,
    }

    scrollRef = createRef()
    backgroundScroll = createRef()
    mainBackground = createRef()


    handelScroll = () => {
        let scrollTop = document.body.scrollTop
        this.backgroundScroll.current.style.backgroundPositionY = `${scrollTop / 3}px`
        this.mainBackground.current.style.backgroundPositionY = `-${scrollTop / 4}px`
        if (scrollTop > 825) {
            this.scrollRef.current.style.position = 'fixed'
            this.scrollRef.current.style.top = '0'
            this.scrollRef.current.style.backgroundColor = 'violet'
            this.scrollRef.current.style.marginTop = '0'
            this.scrollRef.current.style.animation = 'opacityChange 2s forwards'
        } else {
            this.scrollRef.current.style.position = ''
            this.scrollRef.current.style.top = ''
            this.scrollRef.current.style.backgroundColor = ''
            this.scrollRef.current.style.marginTop = '50px'
            this.scrollRef.current.style.animation = ''
        }
    }
    
    clickLoveMe = (e) => {
        e.stopPropagation()
        e.preventDefault()
        this.setState((prevState) => {
            return {
                create: [...prevState.create,0]
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

    componentDidMount() {
        window.addEventListener('scroll', this.handelScroll);
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handelScroll);
    }

    render() {
        return (
            <>
                <header ref={this.backgroundScroll}>
                    <div className='top'>
                        <div className='top-left'></div>
                        <a className='top-Middle' href=''>You<br /> And<br /> I</a>
                        <div className='top-right'></div>
                    </div>
                    <div className='middle'>Ever since I met you,<br />There has not been a moment that i ain't think about you.</div>
                    <nav ref={this.scrollRef}>
                        <ul>
                            <li className='home'>
                                <a href=''>Home</a>
                            </li>
                            <li className='timer'>
                                <a href=''>Timer</a>
                            </li>
                            <li className='about us'>
                                <a href=''>AboutUs</a>
                            </li>
                            <li className='news'>
                                <a href=''>News</a>
                            </li>
                            <li className='gallery'>
                                <a href=''>Gallery</a> {/*2019 2018 2017 */}
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <div ref={this.mainBackground} className='main-top'>
                        <div className='inside-main-top'>
                            <div className='inside-main-top-up'>
                                <div className='inside-main-top-up-up'>Hello</div>
                                <div className='inside-main-top-up-down'>qwhrasdasdasdasdhqeqjwejkeqhqeqjwejkehqeqjwejkekwkqwekqwrkk<br /> wqkkrwqw ekqewkqhqeqjwejkehqeqjwejkehqeqjwejkeekqqkwekw<br /> ekqwek qwkq ehqeqjwejkehqeqjwejkehqeqjwejkehqeqjwejkekwkwqkqwek qwk</div>
                            </div>
                            <div className='inside-main-top-down' onClick={this.clickLoveMe}>Love Me
                                {this.state.create.length >= 1 && <div className='heart' style={{top:'20px',right:'40px'}}>	&#128525;</div>}
                                {this.state.create.length >= 2 && <div className='heart' style={{top:'12px',right:'-20px'}}>&#128420;</div>}
                                {this.state.create.length >= 3 && <div className='heart' style={{top:'35px',right:'-33px'}}>&#10085;</div>}
                                {this.state.create.length >= 4 && <div className='heart' style={{top:'42px',right:'20px'}}>&#128147;</div>}
                                {this.state.create.length >= 5 && <div className='heart' style={{top:'33px',right:'30px'}}>&#128150;</div>}
                                {this.state.create.length >= 6 && <div className='heart' style={{top:'17px',right:'50px'}}>&#128152;</div>}
                                {this.state.create.length >= 7 && <div className='heart' style={{top:'-2px',right:'10px'}}>&#10084;</div>}
                                {this.state.create.length >= 8 && <div className='heart' style={{top:'9px',right:'-2px'}}>&#10083;</div>}
                            </div>
                        </div>
                    </div>
                    <div className='main-bottom'>
                        <div className='left'>
                            <div className='first'></div>
                            <div className='second'></div>
                        </div>
                        <div className='right'>
                            <div className='third'></div>
                            <div className='fourth'></div>
                            <div className='fifth'></div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
};
export default History

