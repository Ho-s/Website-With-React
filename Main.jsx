import React, { createRef, PureComponent } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home'
import Timer from './Timer'
import AboutUs from './AboutUs'
import News from './News'
import Gallery from './Gallery'

class Main extends PureComponent {
    state = {
        home: true,
        timer: false,
        about: false,
        news: false,
        gallery: false,
    }

    scrollRef = createRef()
    handleScroll = () => {
        let scrollTop = document.body.scrollTop
        if (this.state.home) {
            if (scrollTop > 900) {
                this.scrollRef.current.style.position = 'fixed'
                this.scrollRef.current.style.top = '0'
                this.scrollRef.current.style.backgroundColor = 'violet'
                this.scrollRef.current.style.marginTop = '0'
            } else {
                this.scrollRef.current.style.position = ''
                this.scrollRef.current.style.top = ''
                this.scrollRef.current.style.backgroundColor = ''
                this.scrollRef.current.style.animation = ''
            }
        } else {
            this.scrollRef.current.style.position = 'fixed'
            this.scrollRef.current.style.top = '0'
            this.scrollRef.current.style.backgroundColor = 'rgb(199, 199, 199)'
            this.scrollRef.current.style.animation = ''
        }
    }

    clickHome = () => {
        this.setState({
            home: true,
            timer: false,
            about: false,
            news: false,
            gallery: false,
        })
    }

    clickTimer = () => {
        this.setState({
            home: false,
            timer: true,
            about: false,
            news: false,
            gallery: false,
        })
    }

    clickAboutUs = () => {
        this.setState({
            home: false,
            timer: false,
            about: true,
            news: false,
            gallery: false,
        })
    }

    clickNews = () => {
        this.setState({
            home: false,
            timer: false,
            about: false,
            news: true,
            gallery: false,
        })
    }

    clickGallery = () => {
        this.setState({
            home: false,
            timer: false,
            about: false,
            news: false,
            gallery: true,
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentDidUpdate() {
        this.handleScroll()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <BrowserRouter>
                <nav ref={this.scrollRef}>
                    <ul>
                        <li>
                            {this.state.home ? <div className='beforeNormal'></div> : <div className='before'></div>}
                            <Link onClick={this.clickHome} to='/home'>Home</Link>
                            {this.state.home ? <div className='afterNormal'></div> : <div className='after'></div>}
                        </li>
                        <li>
                            {this.state.timer ? <div className='beforeNormal'></div> : <div className='before'></div>}
                            <Link onClick={this.clickTimer} to='/timer'>Timer</Link>
                            {this.state.timer ? <div className='afterNormal'></div> : <div className='after'></div>}
                        </li>
                        <li>
                            {this.state.about ? <div className='beforeNormal'></div> : <div className='before'></div>}
                            <Link onClick={this.clickAboutUs} to='/aboutUs'>AboutUs</Link>
                            {this.state.about ? <div className='afterNormal'></div> : <div className='after'></div>}
                        </li>
                        <li>
                            {this.state.news ? <div className='beforeNormal'></div> : <div className='before'></div>}
                            <Link onClick={this.clickNews} to='/news'>News</Link>
                            {this.state.news ? <div className='afterNormal'></div> : <div className='after'></div>}
                        </li>
                        <li>
                            {this.state.gallery ? <div className='beforeNormal'></div> : <div className='before'></div>}
                            <Link onClick={this.clickGallery} to='/gallery'>Gallery</Link> {/*2019 2018 2017 * 1초만에 보기*/}
                            {this.state.gallery ? <div className='afterNormal'></div> : <div className='after'></div>}
                        </li>
                    </ul>
                </nav>
                <div>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/timer' component={Timer}></Route>
                    <Route path='/aboutUs' component={AboutUs}></Route>
                    <Route path='/news' component={News}></Route>
                    <Route path='/gallery' component={Gallery}></Route>
                </div>
                <div style={{padding: '70px 0',width: `100%`,float: 'right',backgroundColor:'white',textAlign:'center'}}>
                    <div >Ho-s ©2020·Privacy Policy</div>
                    <div>https://github.com/Ho-s</div>
                </div>
            </BrowserRouter>
        )
    }
};
export default Main