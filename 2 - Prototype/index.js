function StopWatch() {
    let startTime, endTime, running, duration = 0;

    Object.defineProperty(this, 'duration', {
        get: function () { return duration; },
        set: function(value) {duration = value}
    });

    Object.defineProperty(this, 'startTime', {
        get: function () { return startTime.getTime(); },
        set: function(value) {startTime = value}

    });

    Object.defineProperty(this, 'endTime', {
        get: function () { return endTime.getTime(); },
        set: function(value) {endTime = value}
    });

    Object.defineProperty(this, 'running', {
        get: function () { return running; },
        set: function(value) {running = value}
    });
}



StopWatch.prototype.start = function () {
    if (this.running)
        throw new Error('Stopwatch has already started.');

    this.running = true;
    this.startTime = new Date();
}

StopWatch.prototype.stop = function () {
    if (!this.running)
        throw new Error('Stopwatch is not started.');

    this.running = false;
    this.endTime = new Date();
    this.duration += (this.endTime - this.startTime) / 1000;
}

StopWatch.prototype.reset = function () {
    this.duration = 0;
    this.startTime, this.endTime = null;
    this.running = false;
}

const sw = new StopWatch()