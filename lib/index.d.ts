import * as colors from 'colors/safe';

export default class cwlog {

    static setProject(project: string): void;

    static success(msg: string): void;

    static warning(msg: string): void;

    static error(msg: string): void;

    static info(msg: string): void;
}
