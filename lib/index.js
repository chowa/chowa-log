const colors = require('colors/safe');

function info(msg) {
    console.log(colors.cyan(msg));
}

function success(msg) {
    console.log(colors.green(msg));
}

function warning(msg) {
    console.log(colors.yellow(msg));
}

function error(msg) {
    console.log(colors.red(msg));
}

exports.info = info;
exports.success = success;
exports.warning = warning;
exports.error = error;
