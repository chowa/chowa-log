const colors = require('colors/safe');
const moment = require('moment');

const cwlog = {
    project: 'cwlog',

    showDate: false,

    setProject(project) {
        this.project = project;
    },

    displayDate() {
        this.showDate = true;
    },

    stdout(msg) {
        console.log(`[${colors.brightBlue(this.project)}] ${this.showDate ? ` [${colors.magenta(moment().format('YYYY/MM/DD HH:mm:ss'))}] ` : ''} ${msg}`);
    },

    info(msg) {
        this.stdout(colors.cyan(msg));
    },

    success(msg) {
        this.stdout(colors.green(msg));
    },

    warning(msg) {
        this.stdout(colors.yellow(msg));
    },

    error(msg) {
        this.stdout(colors.red(msg));
    },

    log(msg) {
        console.log(msg);
    }
};

module.exports = cwlog;
