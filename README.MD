# chowa-log

Different information level reminder logs

## Install

```
npm i chowa-log
```

## Usage

* info
* warning
* success
* error

```
const cwlog = require('chowa-log');

// import cwlog from 'chowa-log';

cwlog.info('This is an info log');
```

## Setting

### Set project name

```
cwlog.setProject('chowa');
```

### Display log date

```
cwlog.displayDate();
```

## License

[MIT](http://opensource.org/licenses/MIT)
