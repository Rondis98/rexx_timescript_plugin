class TimeHandler extends Module {
    _time = {
        hours: 0,
        minutes: 0,
        seconds: 0
    };

    constructor(timeEntries) {
        super(timeEntries);
    }

    getTimeDifferences(state = TimeEntries.come) {
        let timeTimes = [];
        for(let i = 0; i < this._timeEntries.entryLength; i += 2) {
            while (this._timeEntries.timeEntries[i] && this._timeEntries.timeEntries[i].state !== state) {
                i++;
            }

            if (!this._timeEntries.timeEntries[i]) {
                break;
            }

            let fromTime = this._timeEntries.timeEntries[i].time;
            let toTime =
                this._timeEntries.timeEntries[i + 1]
                    ? this._timeEntries.timeEntries[i + 1].time
                    : this._currentTime;

            let difference = TimeCalculator.calculateTimeDifference(fromTime, toTime);

            let times = TimeCalculator.calculateRealTime(difference);

            timeTimes.push(times);
        }

        return timeTimes;
    }

    assignRealTime(timeTimes) {
        for (let i = 0; i < timeTimes.length; i++) {
            this._time.hours += timeTimes[i].hours;
            this._time.minutes += timeTimes[i].minutes;
            this._time.seconds += timeTimes[i].seconds;
        }

        TimeCalculator.roundTime(this._time);
    }

    resetTimeObject() {
        this._time.hours = 0;
        this._time.minutes = 0;
        this._time.seconds = 0;
    }
}