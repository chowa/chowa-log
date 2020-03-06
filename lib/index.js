const colors = require('colors/safe');

const cwlog = {
    project: 'cwlog',

    setProject(project) {
        this.project = project;
    },

    stdout(msg) {
        console.log(`[${colors.brightBlue(this.project)}] ${msg}`);
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
    }
};

module.exports = cwlog;
