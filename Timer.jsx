import React, { PureComponent } from 'react';

Date.prototype.getInterval = function (otherDate) {
    let interval;
 
    if(this > otherDate)
        interval = this.getTime() - otherDate.getTime()
    else
        interval = otherDate.getTime() - this.getTime()
 
    return Math.floor(interval / (1000*60*60*24))
}
const date = new Date()
const dt = new Date('2017-12-23')
const result_str = dt.getInterval(date)
const hours=date.getHours()
const minutes=date.getMinutes()
let seconds=date.getSeconds()

class Timer extends PureComponent {
    state={
        date:date,
        hours:hours,
        minutes:minutes,
        seconds:seconds,
    }

    changeSecond=()=>{
        this.setState((prevState)=>({
            seconds:prevState.seconds+1
        }))
        if(this.state.seconds>60)
    }

    componentDidMount(){
        this.interval=setInterval(this.changeSecond,1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render() {
        return (
            <>
                <div style={{marginTop:'10vh'}}>
                    <span>{result_str}일</span>
                    <span>{hours}시간</span>
                    <span>{minutes}분</span>
                    <span>{this.state.seconds}초</span>
                </div>

            </>
        )
    }
};
export default Timer