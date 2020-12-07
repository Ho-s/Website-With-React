import React, { createRef, PureComponent } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home'
import Timer from './Timer'
import AboutUs from './AboutUs'
import News from './News'
import GalleryZero from './GalleryZero'
import GalleryNine from './GalleryNine'
import GalleryEight from './GalleryEight'

class Main extends PureComponent {
    state = {
        home: true,
        timer: false,
        about: false,
        news: false,
        galleryEight: false,
        galleryNine:false,
        galleryZero:false,
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
            galleryEight: false,
            galleryNine:false,
            galleryZero:false,
        })
    }

    clickTimer = () => {
        this.setState({
            home: false,
            timer: true,
            about: false,
            news: false,
            gallery: false,
            galleryEight: false,
            galleryNine:false,
            galleryZero:false,
        })
    }

    clickAboutUs = () => {
        this.setState({
            home: false,
            timer: false,
            about: true,
            news: false,
            gallery: false,
            galleryEight: false,
            galleryNine:false,
            galleryZero:false,
        })
    }

    clickNews = () => {
        this.setState({
            home: false,
            timer: false,
            about: false,
            news: true,
            gallery: false,
            galleryEight: false,
            galleryNine:false,
            galleryZero:false,
        })
    }

    clickGalleryEight = () => {
        this.setState({
            home: false,
            timer: false,
            about: false,
            news: false,
            gallery: true,
            galleryEight: true,
            galleryNine:false,
            galleryZero:false,
        })
    }

    clickGalleryNine = () => {
        this.setState({
            home: false,
            timer: false,
            about: false,
            news: false,
            gallery: true,
            galleryEight: false,
            galleryNine:true,
            galleryZero:false,
        })
    }

    clickGalleryZero = () => {
        this.setState({
            home: false,
            timer: false,
            about: false,
            news: false,
            gallery: true,
            galleryEight: false,
            galleryNine:false,
            galleryZero:true,
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
                        <li className='gallery' style={{color:'white'}} >
                            {this.state.gallery ? <div className='beforeNormal'></div> : <div className='before'></div>}
                            Gallery
                            <div className='galleryList'>  
                                <Link onClick={this.clickGalleryZero} to='/galleryZero'>2020</Link>
                                <Link onClick={this.clickGalleryNine} to='/galleryNine'>2019</Link>
                                <Link onClick={this.clickGalleryEight} to='/galleryEight'>2018</Link>
                            </div>
                            {this.state.gallery ? <div className='afterNormal'></div> : <div className='after'></div>}
                        </li>
                    </ul>
                </nav>
                <div>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/timer' component={Timer}></Route>
                    <Route path='/aboutUs' component={AboutUs}></Route>
                    <Route path='/news' component={News}></Route>
                    <Route path='/galleryZero' component={GalleryZero}></Route>
                    <Route path='/galleryNine' component={GalleryNine}></Route>
                    <Route path='/galleryEight' component={GalleryEight}></Route>
                </div>
                <div style={{padding: '70px 0',width: `100%`,float: 'right',backgroundColor:'white',textAlign:'center'}}>
                    <div>Ho-s ©2020·Privacy Policy</div>
                    <div>https://github.com/Ho-s</div>
                </div>
            </BrowserRouter>
        )
    }
};
export default Main