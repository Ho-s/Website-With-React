import React, { Component } from 'react';

class History extends Component{
    state={

    }
    
    render(){
        return(
            <>
                <header>
                    <div className='top'>
                        <div className='top-left'></div>
                        <a className='top-Middle' href=''>You<br/> And<br/> I</a>
                        <div className='top-right'></div>
                    </div>
                    <div className='middle'>Since I met you<br/>There has not been a moment that i ain't think about you</div>
                    <nav>
                        <ul>
                            <li className='home'>
                                <a  href=''>Home</a>
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

                </main>
            </>
        )
    }
};
export default History

