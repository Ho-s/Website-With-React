import React, { createRef, PureComponent } from 'react';

class History extends PureComponent {
    state = {
        
    }
    scrollRef=createRef()
    backgroundScroll=createRef()
    mainBackground=createRef()

    handelScroll=()=>{
        let scrollTop=document.body.scrollTop
        this.backgroundScroll.current.style.backgroundPositionY=`${scrollTop/3}px`
        this.mainBackground.current.style.backgroundPositionY=`-${scrollTop/4}px`
        if(scrollTop>825){
            this.scrollRef.current.style.position='fixed'
            this.scrollRef.current.style.top='0'
            this.scrollRef.current.style.backgroundColor='rgb(151, 150, 150)'
            this.scrollRef.current.style.marginTop='0'
            this.scrollRef.current.style.animation='opacityChange 2s forwards'
        }else{
            this.scrollRef.current.style.position=''
            this.scrollRef.current.style.top=''
            this.scrollRef.current.style.backgroundColor=''
            this.scrollRef.current.style.marginTop='7vh'
            this.scrollRef.current.style.animation=''
        }
    }

    clickLoveMe=(e)=>{
        console.log(e.target)
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
                                <div className='inside-main-top-up-down'>qwhrasdasdasdasdhqeqjwejkeqhqeqjwejkehqeqjwejkekwkqwekqwrkk<br/> wqkkrwqw ekqewkqhqeqjwejkehqeqjwejkehqeqjwejkeekqqkwekw<br/> ekqwek qwkq ehqeqjwejkehqeqjwejkehqeqjwejkehqeqjwejkekwkwqkqwek qwk</div>
                            </div>
                            <div className='inside-main-top-down' onClick={this.clickLoveMe}>Love Me</div>
                        </div>
                    </div>
                    <div className='main-bottom'>
                        <div className='left'>
                            <div className='first'></div>
                            <div className='second'></div>
                            <div className='third'></div>
                        </div>
                        <div className='right'>
                            <div className='fourth'></div>
                            <div className='fifth'></div>
                            <div className='sixth'></div>
                            <div className='seventh'></div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
};
export default History

