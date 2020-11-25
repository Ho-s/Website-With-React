import React, { PureComponent } from 'react';

class Gallery extends PureComponent {
    render() {


        return (
            <>
                <div style={{float:'left',width:'100%',height:'100%',backgroundColor:'black'}}>
                    <div className='scene'>
                        <div className='carousel'>
                            <div style={{backgroundImage:"url('./MYBOX/(1).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (2).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (3).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (4).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (5).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (6).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (7).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (8).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (9).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/(1).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (2).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (3).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (4).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (5).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (6).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (7).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (8).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (9).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/(1).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (2).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (3).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (4).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (5).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (6).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (7).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (8).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (9).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (7).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (8).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (9).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (7).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (8).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (9).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (7).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (8).jpg')"}} className='carousel_cell' ></div>
                            <div style={{backgroundImage:"url('./MYBOX/ (9).jpg')"}} className='carousel_cell' ></div>
                        </div>
                        <button onClick={this.clickLeft}>L</button>
                        <button onClick={this.clickRight}>R</button>
                    </div>
                </div>
            </>
        )
    }
};
export default Gallery