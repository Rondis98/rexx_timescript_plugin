class TimeCalculator {
    static calculateTimeDifference(first: Date, second: Date): number {
        return second.getTime() - first.getTime();
    }

    static calculateTime(time: Time): number {
        time.minutes += time.hours * 60;
        time.seconds += time.minutes * 60;

        return time.seconds;
    }

    static calculateRealTime(sec: number): Time {
        let times: Time = {
            hours: 0,
            minutes: 0,
            seconds: 0
        };

        // Hours
        times.hours = Math.floor(sec / 60 / 60);
        sec -= times.hours * 60 * 60;
        // Minutes
        times.minutes = Math.floor(sec / 60);
        sec -= times.minutes * 60;
        // Seconds
        times.seconds = Math.floor(sec);
        sec -= times.seconds;

        return times;
    }

    static roundTime(times: Time): Time {
        if (times.seconds >= 60) {
            let diff = Math.floor(times.seconds / 60);
            times.minutes += diff;
            times.seconds -= diff * 60;
        }

        if (times.minutes >= 60) {
            let diff = Math.floor(times.minutes / 60);
            times.hours += diff;
            times.minutes -= diff * 60;
        }

        return times;
    }

    static toDoubleDigit(value: number): string {
        let negative = false;
        let returnString;

        if (value < 0) {
            negative = true;
            value = Math.abs(value);
        }

        if (value >= 10) {
            returnString = '' + value;
        } else {
            returnString = '0' + value;
        }

        if (negative) {
            returnString = '-' + returnString;
        }

        return returnString;
    }

    static getDifference(start: number, end: number): number {
        return end - start;
    }
}
