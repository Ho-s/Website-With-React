import React, { PureComponent } from 'react';

class News extends PureComponent {
    state={
        picture: false,
        num: 1,
        n: 1,
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
                {this.state.picture &&
                    <div className='full'>
                        <div className='full-top'>{this.state.n}/5</div>
                        <div onClick={this.clickRemove} className='full-button'>X</div>
                        <div onClick={this.clickLeft} className='full-left'>&#8592;</div>
                        <div style={{ backgroundImage: `url(./images/${this.state.num}.jpg)` }} className='full-middle'></div>
                        <div onClick={this.clickRight} className='full-right'>&#8594;</div>
                    </div>
                }
                <div className='news-div'>
                    <div style={{marginTop:'10vh'}}>
                        <div className='news-photo' style={{backgroundImage:'url(./images/11.jpg)'}}></div>
                        <div className='news-write'>
                            <div style={{paddingTop:'80px',marginLeft:'100px',fontSize:'30px'}}>Sondo</div>
                            <div style={{marginLeft:'100px',marginTop:'30px'}}>
                                <div style={{float:'left',backgroundImage:'url(./images/calender.png)',backgroundSize:'cover',width:'15px',height:'15px'}}></div>
                                <span style={{marginLeft:'5px',fontSize:'18px',color:'red',lineHeight:'0.8'}}>March 13, 2020</span>
                            </div>
                            <div style={{fontSize:'20px',marginLeft:'100px',marginTop:'30px'}}>dsf<br/>sdfd<br/>fs<br/>fsfsfss<br/>dffs<br/>dsdf<br/>sdff<br/>sdfs<br/>dfdssdf</div>
                            <div style={{marginTop:'30px',marginLeft:'100px',position:'relative'}}>
                                <div onClick={this.clickCreateFirst} className='news-div-wrapper' style={this.normal}>
                                    <div style={{backgroundColor:'black'}} className='before'></div>
                                    Look
                                    <div style={{backgroundColor:'black'}} className='after'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='news-write'>
                        <div style={{paddingTop:'80px',marginLeft:'100px',fontSize:'30px'}}>Sondo</div>
                            <div style={{marginLeft:'100px',marginTop:'30px'}}>
                                <div style={{float:'left',backgroundImage:'url(./images/calender.png)',backgroundSize:'cover',width:'15px',height:'15px'}}></div>
                                <span style={{marginLeft:'5px',fontSize:'18px',color:'red',lineHeight:'0.8'}}>March 13, 2020</span>
                            </div>
                            <div style={{fontSize:'20px',marginLeft:'100px',marginTop:'30px'}}>dsf<br/>sdfd<br/>fs<br/>fsfsfss<br/>dffs<br/>dsdf<br/>sdff<br/>sdfs<br/>dfdssdf</div>
                            <div style={{marginTop:'30px',marginLeft:'100px',position:'relative'}}>
                                <div onClick={this.clickCreateSecond} className='news-div-wrapper' style={this.normal}>
                                    <div style={{backgroundColor:'black'}} className='before'></div>
                                    Look
                                    <div style={{backgroundColor:'black'}} className='after'></div>
                                </div>
                            </div>
                        </div>
                        <div className='news-photo' style={{backgroundImage:'url(./images/21.jpg)'}}></div>
                    </div>
                    <div>
                        <div className='news-photo' style={{backgroundImage:'url(./images/31.jpg)'}}></div>
                        <div className='news-write'>
                        <div style={{paddingTop:'80px',marginLeft:'100px',fontSize:'30px'}}>Sondo</div>
                            <div style={{marginLeft:'100px',marginTop:'30px'}}>
                                <div style={{float:'left',backgroundImage:'url(./images/calender.png)',backgroundSize:'cover',width:'15px',height:'15px'}}></div>
                                <span style={{marginLeft:'5px',fontSize:'18px',color:'red',lineHeight:'0.8'}}>March 13, 2020</span>
                            </div>
                            <div style={{fontSize:'20px',marginLeft:'100px',marginTop:'30px'}}>dsf<br/>sdfd<br/>fs<br/>fsfsfss<br/>dffs<br/>dsdf<br/>sdff<br/>sdfs<br/>dfdssdf</div>
                            <div style={{marginTop:'30px',marginLeft:'100px',position:'relative'}}>
                                <div onClick={this.clickCreateThird} className='news-div-wrapper' style={this.normal}>
                                    <div style={{backgroundColor:'black'}} className='before'></div>
                                    Look
                                    <div style={{backgroundColor:'black'}} className='after'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='news-write'>
                        <div style={{paddingTop:'80px',marginLeft:'100px',fontSize:'30px'}}>Sondo</div>
                            <div style={{marginLeft:'100px',marginTop:'30px'}}>
                                <div style={{float:'left',backgroundImage:'url(./images/calender.png)',backgroundSize:'cover',width:'15px',height:'15px'}}></div>
                                <span style={{marginLeft:'5px',fontSize:'18px',color:'red',lineHeight:'0.8'}}>March 13, 2020</span>
                            </div>
                            <div style={{fontSize:'20px',marginLeft:'100px',marginTop:'30px'}}>dsf<br/>sdfd<br/>fs<br/>fsfsfss<br/>dffs<br/>dsdf<br/>sdff<br/>sdfs<br/>dfdssdf</div>
                            <div style={{marginTop:'30px',marginLeft:'100px',position:'relative'}}>
                                <div onClick={this.clickCreateFourth} className='news-div-wrapper' style={this.normal}>
                                    <div style={{backgroundColor:'black'}} className='before'></div>
                                    Look
                                    <div style={{backgroundColor:'black'}} className='after'></div>
                                </div>
                            </div>
                        </div>
                        <div className='news-photo' style={{backgroundImage:'url(./images/41.jpg)'}}></div>
                    </div>
                    <div>
                        <div className='news-photo' style={{backgroundImage:'url(./images/51.jpg)'}}></div>
                        <div className='news-write'>
                        <div style={{paddingTop:'80px',marginLeft:'100px',fontSize:'30px'}}>Sondo</div>
                            <div style={{marginLeft:'100px',marginTop:'30px'}}>
                                <div style={{float:'left',backgroundImage:'url(./images/calender.png)',backgroundSize:'cover',width:'15px',height:'15px'}}></div>
                                <span style={{marginLeft:'5px',fontSize:'18px',color:'red',lineHeight:'0.8'}}>March 13, 2020</span>
                            </div>
                            <div style={{fontSize:'20px',marginLeft:'100px',marginTop:'30px'}}>dsf<br/>sdfd<br/>fs<br/>fsfsfss<br/>dffs<br/>dsdf<br/>sdff<br/>sdfs<br/>dfdssdf</div>
                            <div style={{marginTop:'30px',marginLeft:'100px',position:'relative'}}>
                                <div onClick={this.clickCreateFifth} className='news-div-wrapper' style={this.normal}>
                                    <div style={{backgroundColor:'black'}} className='before'></div>
                                    Look
                                    <div style={{backgroundColor:'black'}} className='after'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
};
export default News