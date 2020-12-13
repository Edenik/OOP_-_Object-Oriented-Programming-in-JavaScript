function StopWatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function () {
        if (running)
            throw new Error('Stopwatch has already started.');

        running = true;
        startTime = new Date();
    }

    this.stop = function () {
        if (!running)
            throw new Error('Stopwatch is not started.');

        running = false;
        endTime = new Date();
        duration += (endTime.getTime() - startTime.getTime()) / 1000;
    }

    this.reset = function () {
        duration = 0;
        startTime, endTime = null;
        running = false;
    }

    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        }
    })
}

const sw = new StopWatch()