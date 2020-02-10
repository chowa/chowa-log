const colors = require('colors/safe');

class cwlog {

    static project = 'cwlog';

    static setProject(project) {
        this.project = project;
    }

    static stdout(msg) {
        console.log(`[${colors.brightBlue(this.project)}] ${msg}`);
    }

    static info(msg) {
        this.stdout(colors.cyan(msg));
    }

    static success(msg) {
        this.stdout(colors.green(msg));
    }

    static warning(msg) {
        this.stdout(colors.yellow(msg));
    }

    static error(msg) {
        this.stdout(colors.red(msg));
    }
}

module.exports = cwlog;
