import React, { PureComponent } from 'react';

Date.prototype.getInterval = function (otherDate) {
    let interval;

    if (this > otherDate)
        interval = this.getTime() - otherDate.getTime()
    else
        interval = otherDate.getTime() - this.getTime()

    return Math.ceil(interval / (1000 * 60 * 60 * 24))
}
const date = new Date()
const dt = new Date('2017-12-23')
const result = dt.getInterval(date)

const FlipUnitContainer = ({ digit, shuffle, unit }) => {
    // assign digit values
    let currentDigit = digit;
    let previousDigit = digit - 1;

    // to prevent a negative value
    if (unit !== 'hours') {
        previousDigit = previousDigit === -1
            ? 59
            : previousDigit;
    } else {
        previousDigit = previousDigit === -1
            ? 23
            : previousDigit;
    }

    // add zero
    if (currentDigit < 10) {
        currentDigit = `0${currentDigit}`;
    }
    if (previousDigit < 10) {
        previousDigit = `0${previousDigit}`;
    }

    // shuffle digits
    const digit1 = shuffle
        ? previousDigit
        : currentDigit;
    const digit2 = !shuffle
        ? previousDigit
        : currentDigit;

    // shuffle animations
    const animation1 = shuffle
        ? 'fold'
        : 'unfold';
    const animation2 = !shuffle
        ? 'fold'
        : 'unfold';

    return (
        <div className={'flipUnitContainer'}>
            <div className={'upperCard'}>
                <span>{currentDigit}</span>
            </div>
            <div className={'lowerCard'}>
                <span>{previousDigit}</span>
            </div>
            <div className={`flipCard ${animation1}`}>
                <span>{digit1}</span>
            </div>
            <div className={`flipCard ${animation2}`}>
                <span>{digit2}</span>
            </div>
        </div>
    );
};

class Timer extends PureComponent {
    state = {
        days: 0,
        daysSuffle: true,
        hours: 0,
        hoursShuffle: true,
        minutes: 0,
        minutesShuffle: true,
        seconds: 0,
        secondsShuffle: true
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.updateTime(), 50);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    updateTime() {
        const time = new Date;
        const days = result;
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        if (days !== this.state.days) {
            const daysSuffle = !this.state.daysSuffle;
            this.setState({
                days,
                daysSuffle
            });
        }

        if (hours !== this.state.hours) {
            const hoursShuffle = !this.state.hoursShuffle;
            this.setState({
                hours,
                hoursShuffle
            });
        }

        if (minutes !== this.state.minutes) {
            const minutesShuffle = !this.state.minutesShuffle;
            this.setState({
                minutes,
                minutesShuffle
            });
        }

        if (seconds !== this.state.seconds) {
            const secondsShuffle = !this.state.secondsShuffle;
            this.setState({
                seconds,
                secondsShuffle
            });
        }
    }

    render() {
        const {
            days,
            hours,
            minutes,
            seconds,
            daysSuffle,
            hoursShuffle,
            minutesShuffle,
            secondsShuffle
        } = this.state;

        return (
            <>
                <div className='timer-left'>
                    <FlipUnitContainer
                        unit={'days'}
                        digit={days}
                        shuffle={daysSuffle}
                    />
                    <div className={'flipClock'}>

                        <FlipUnitContainer
                            unit={'hours'}
                            digit={hours}
                            shuffle={hoursShuffle}
                        />
                        <FlipUnitContainer
                            unit={'minutes'}
                            digit={minutes}
                            shuffle={minutesShuffle}
                        />
                        <FlipUnitContainer
                            unit={'seconds'}
                            digit={seconds}
                            shuffle={secondsShuffle}
                        />
                    </div>
                </div>
                <div className='timer-right'>
                    history
                </div>
            </>
        );

    }
};
export default Timer